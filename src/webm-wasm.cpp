/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

#include <cstdlib>
// emscripten
#include <emscripten/bind.h>
#include <emscripten/val.h>
// libvpx
#include "vpxenc.h"
#include "vpx/vp8cx.h"
// libwebm
#include "mkvmuxer.hpp"
// libyuv
#include "libyuv.h"
// Our MyMkvWriters
#include "./mkvwriter/mymkvwriter.hpp"
#include "./mkvwriter/mymkvstreamwriter.hpp"

using namespace emscripten;
using namespace mkvmuxer;

int vpx_img_plane_width(const vpx_image_t *img, int plane);
int vpx_img_plane_height(const vpx_image_t *img, int plane);
void clear_image(vpx_image_t *img) ;

class WebmEncoder {
  public:
    WebmEncoder(int timebase_num, int timebase_den, unsigned int width, unsigned int height, unsigned int bitrate, bool realtime, bool klive, int lossless, int speed, val cb);
    ~WebmEncoder();
    bool addRGBAFrame(std::string rgba);
    bool finalize();
    bool finalizeLast();
    bool closeEncoder(std::string rgba, std::string msg);
    std::string lastError();

  private:
    bool InitCodec(int timebase_num, int timebase_den, unsigned int width, unsigned int height, unsigned int bitrate, int lossless, int speed);
    bool InitMkvWriter(bool klive, val cb);
    bool InitImageBuffer();

    bool RGBAtoVPXImage(const uint8_t *data);
    bool EncodeFrame(vpx_image_t *img);

    vpx_codec_ctx_t ctx;
    unsigned int frame_cnt = 0;
    vpx_codec_enc_cfg_t cfg;
    vpx_codec_iface_t* iface = vpx_codec_vp9_cx();
    vpx_image_t *img;
    std::string last_error;
    IMkvWriter *mkv_writer;
    Segment *main_segment;
    bool realtime = false;
};

WebmEncoder::WebmEncoder(int timebase_num, int timebase_den, unsigned int width, unsigned int height, unsigned int bitrate_kbps, bool realtime_, bool klive, int lossless, int speed, val cb): realtime(realtime_) {

  if(!InitCodec(timebase_num, timebase_den, width, height, bitrate_kbps, lossless ? 1 : 0, speed < -9 ? -9 : (speed > 9 ? 9 : speed))) {
    throw last_error;
  }
  if(!InitMkvWriter(klive, cb)) {
    throw last_error;
  }
  if(!InitImageBuffer()) {
    throw last_error;
  }
}

WebmEncoder::~WebmEncoder() {
  vpx_img_free(img);
  delete main_segment;
  if(realtime) {
    delete (MyMkvStreamWriter*)mkv_writer;
  } else {
    delete (MyMkvWriter*)mkv_writer;
  }
}

bool WebmEncoder::addRGBAFrame(std::string rgba) {
  // printf("\nC++ addRGBAFrame pos %llu\n", ((MyMkvStreamWriter*)mkv_writer)->getPos());
  // printf("C++ addRGBAFrame len %llu\n", ((MyMkvStreamWriter*)mkv_writer)->getLen());
  // printf("C++ addRGBAFrame cap %llu\n", ((MyMkvStreamWriter*)mkv_writer)->getCap());
  RGBAtoVPXImage((const uint8_t*) rgba.c_str());
  if(!EncodeFrame(img)) {
    last_error = "Could not encode frame";
    return false;
  }
  if(!EncodeFrame(NULL)) {
    last_error = "Could not flush frame";
    return false;
  }
  if(realtime) {
    ((MyMkvStreamWriter*)mkv_writer)->Notify();
  }
  return true;
}

bool WebmEncoder::finalize() {
  // generates error in frametool
  // printf("\nC++ finalize pos %llu\n", ((MyMkvStreamWriter*)mkv_writer)->getPos());
  // printf("C++ finalize len %llu\n", ((MyMkvStreamWriter*)mkv_writer)->getLen());
  // printf("C++ finalize cap %llu\n", ((MyMkvStreamWriter*)mkv_writer)->getCap());

  if(!EncodeFrame(NULL)) {
    last_error = "Could not encode flush frame";
    return false;
  }

  if(!main_segment->Finalize()) {
    last_error = "Could not finalize mkv";
    return false;
  }
  if(realtime) {
    ((MyMkvStreamWriter*)mkv_writer)->Notify();
  } else {
    ((MyMkvWriter*)mkv_writer)->Notify();
  }
  
  return true;
}

bool WebmEncoder::finalizeLast() {
  // generates error in frametool
  // printf("\nC++ finalizeLast pos %llu\n", ((MyMkvStreamWriter*)mkv_writer)->getPos());
  // printf("C++ finalizeLast len %llu\n", ((MyMkvStreamWriter*)mkv_writer)->getLen());
  // printf("C++ finalizeLast cap %llu\n", ((MyMkvStreamWriter*)mkv_writer)->getCap());

  if(!EncodeFrame(NULL)) {
    last_error = "Could not encode flush frame";
    return false;
  }

  if(!main_segment->Finalize()) {
    last_error = "Could not finalize mkv";
    return false;
  }
  if(realtime) {
    ((MyMkvStreamWriter*)mkv_writer)->NotifyEnd();
  } else {
    ((MyMkvWriter*)mkv_writer)->Notify();
  }
  
  return true;
}

bool WebmEncoder::closeEncoder(std::string rgba, std::string msg) {
  printf("\nC++ closeEncoder pos %llu\n", ((MyMkvStreamWriter*)mkv_writer)->getPos());
  printf("C++ closeEncoder len %llu\n", ((MyMkvStreamWriter*)mkv_writer)->getLen());
  printf("C++ closeEncoder cap %llu\n", ((MyMkvStreamWriter*)mkv_writer)->getCap());
  
  bool lastFrame = true;

  RGBAtoVPXImage((const uint8_t*) rgba.c_str());
  if(!EncodeFrame(img)) {
    last_error = "Could not encode frame";
    return false;
  }
  if(!EncodeFrame(NULL)) {
    last_error = "Could not flush frame";
    return false;
  }

  uint8_t* ccddata = ((MyMkvStreamWriter*)mkv_writer)->setCCD((const uint8_t*) msg.c_str(), 5);
  
  printf("\nC++");
  printf("\n%02X %02X %02X %02X %02X", ccddata[0], ccddata[1], ccddata[2], ccddata[3], ccddata[4]);
  printf("\n%hhu %hhu %hhu %hhu %hhu", ccddata[0], ccddata[1], ccddata[2], ccddata[3], ccddata[4]);
  printf("\nC++\n");

  printf("\nC++ closeEncoder pos %llu\n", ((MyMkvStreamWriter*)mkv_writer)->getPos());
  printf("C++ closeEncoder len %llu\n", ((MyMkvStreamWriter*)mkv_writer)->getLen());
  printf("C++ closeEncoder cap %llu\n", ((MyMkvStreamWriter*)mkv_writer)->getCap());

  // printf("\nC++ closeEncoder pos %llu\n", ((MyMkvStreamWriter*)mkv_writer)->getPos());
  // printf("C++ closeEncoder len %llu\n", ((MyMkvStreamWriter*)mkv_writer)->getLen());
  // printf("C++ closeEncoder cap %llu\n", ((MyMkvStreamWriter*)mkv_writer)->getCap());
  
  // printf("C++\n");
  // printf("concatenate data here\n");

  bool fin = this->finalizeLast();

  // printf("\nC++ closeEncoder pos %llu\n", ((MyMkvStreamWriter*)mkv_writer)->getPos());
  // printf("C++ closeEncoder len %llu\n", ((MyMkvStreamWriter*)mkv_writer)->getLen());
  // printf("C++ closeEncoder cap %llu\n", ((MyMkvStreamWriter*)mkv_writer)->getCap());

  return lastFrame && fin;
}

std::string WebmEncoder::lastError() {
  return std::string(last_error);
}

bool WebmEncoder::EncodeFrame(vpx_image_t *img) {
  vpx_codec_iter_t iter = NULL;
  const vpx_codec_cx_pkt_t *pkt;
  vpx_codec_err_t err;

  err = vpx_codec_encode(
    &ctx,
    img,
    frame_cnt, /* time of frame */
    1, /* length of frame */
    0, /* flags. Use VPX_EFLAG_FORCE_KF to force a keyframe. */
    realtime ? VPX_DL_REALTIME : VPX_DL_BEST_QUALITY
  );
  frame_cnt++;
  if(err != VPX_CODEC_OK) {
    last_error = std::string(vpx_codec_err_to_string(err));
    return false;
  }
  while((pkt = vpx_codec_get_cx_data(&ctx, &iter)) != NULL) {
    if(pkt->kind != VPX_CODEC_CX_FRAME_PKT) {
      continue;
    }
    auto frame_size = pkt->data.frame.sz;
    auto is_keyframe = (pkt->data.frame.flags & VPX_FRAME_IS_KEY) != 0;
    auto timebase = 1000000000ULL * cfg.g_timebase.num/cfg.g_timebase.den;
    auto timestamp = pkt->data.frame.pts * timebase;

    Frame frame;
    if (!frame.Init((uint8_t*) pkt->data.frame.buf, pkt->data.frame.sz)) {
      last_error = "Could not initialize frame container";
      return false;
    }
    frame.set_track_number(1);
    frame.set_timestamp(timestamp);
    frame.set_is_key(is_keyframe);
    frame.set_duration(timebase);
    if(!main_segment->AddGenericFrame(&frame)) {
      last_error = "Could not add frame";
      return false;
    }
  }
  return true;
}

bool WebmEncoder::InitCodec(int timebase_num, int timebase_den, unsigned int width, unsigned int height, unsigned int bitrate, int lossless, int speed) {
  vpx_codec_err_t err;
  err = vpx_codec_enc_config_default(iface, &cfg, 0);
  if(err != VPX_CODEC_OK) {
    last_error = std::string(vpx_codec_err_to_string(err));
    return false;
  }

  cfg.g_timebase.num = timebase_num;
  cfg.g_timebase.den = timebase_den;
  cfg.g_w = width;
  cfg.g_h = height;
  cfg.g_threads = 1;
  cfg.g_lag_in_frames = 0;
  cfg.rc_target_bitrate = bitrate;

  err = vpx_codec_enc_init(
    &ctx,
    iface,
    &cfg,
    0 /* flags */
  );
  if(err != VPX_CODEC_OK) {
    last_error = std::string(vpx_codec_err_to_string(err));
    return false;
  }
  // Set lossless VP9
  err = vpx_codec_control_(
    &ctx,
    VP9E_SET_LOSSLESS,
    lossless
  );
  if(err != VPX_CODEC_OK) {
    last_error = std::string(vpx_codec_err_to_string(err));
    return false;
  }
  // Set encoding speed
  err = vpx_codec_control_(
    &ctx,
    VP8E_SET_CPUUSED,
    speed
  );
  if(err != VPX_CODEC_OK) {
    last_error = std::string(vpx_codec_err_to_string(err));
    return false;
  }
  return true;
}

bool WebmEncoder::InitMkvWriter(bool klive, val cb) {
  if(realtime) {
    mkv_writer = new MyMkvStreamWriter(cb);
  } else {
    mkv_writer = new MyMkvWriter(cb);
  }
  main_segment = new Segment();
  if(!main_segment->Init(mkv_writer)) {
    last_error = "Could not initialize main segment";
    return false;
  }
  if(main_segment->AddVideoTrack(cfg.g_w, cfg.g_h, 1 /* track id */) == 0) {
    last_error = "Could not add video track";
    return false;
  }
  Track* const vid_track = main_segment->GetTrackByNumber(1);
  vid_track->set_codec_id("V_VP9");
  main_segment->set_mode(klive ? Segment::Mode::kLive : Segment::Mode::kFile);
  auto info = main_segment->GetSegmentInfo();
  // Branding, yo
  auto muxing_app = std::string(info->muxing_app()) + " but in wasm";
  auto writing_app = std::string(info->writing_app()) + " but in wasm";
  info->set_writing_app(writing_app.c_str());
  info->set_muxing_app(muxing_app.c_str());
  return true;
}

bool WebmEncoder::InitImageBuffer() {
  img = vpx_img_alloc(
    NULL, /* allocate buffer on the heap */
    VPX_IMG_FMT_I420,
    cfg.g_w,
    cfg.g_h,
    0 /* align. simple_encoder says 1? */
  );
  if(img == NULL) {
    last_error = "Could not allocate vpx image buffer";
    return false;
  }
  return true;
}

bool WebmEncoder::RGBAtoVPXImage(const uint8_t *rgba) {
  clear_image(img);
  // litten endian BGRA means it is ARGB in memory
  if(
    libyuv::BGRAToI420(
      // Since we are ignoring opacity anyways (currently), we can use
      // this nasty nasty trick to avoid reshuffling the entire memory
      // from RGBA to ARGB.
      rgba-1,
      cfg.g_w*4,
      img->planes[VPX_PLANE_Y],
      img->stride[VPX_PLANE_Y],
      img->planes[VPX_PLANE_U],
      img->stride[VPX_PLANE_U],
      img->planes[VPX_PLANE_V],
      img->stride[VPX_PLANE_V],
      cfg.g_w,
      cfg.g_h
    ) != 0) {
    last_error = "Could not convert to I420";
    return false;
  }
  return true;
}

int vpx_img_plane_width(const vpx_image_t *img, int plane) {
  if ((plane == 1 || plane == 2) && img->x_chroma_shift > 0 )
    return (img->d_w + 1) >> img->x_chroma_shift;
  else
    return img->d_w;
}

int vpx_img_plane_height(const vpx_image_t *img, int plane) {
  if ((plane == 1 || plane == 2) && img->y_chroma_shift > 0)
    return (img->d_h + 1) >> img->y_chroma_shift;
  else
    return img->d_h;
}

void clear_image(vpx_image_t *img) {
  for(int plane = 0; plane < 4; plane++) {
    auto *row = img->planes[plane];
    if(!row) {
      continue;
    }
    auto plane_width = vpx_img_plane_width(img, plane);
    auto plane_height = vpx_img_plane_height(img, plane);
    uint8_t value = plane == 3 ? 1 : 0;
    for(int y = 0; y < plane_height; y++) {
      memset(row, value, plane_width);
      row += img->stride[plane];
    }
  }
}

EMSCRIPTEN_BINDINGS(my_module) {
  class_<WebmEncoder>("WebmEncoder")
    .constructor<int, int, unsigned int, unsigned int, unsigned int, bool, bool, int, int, val>()
    .function("addRGBAFrame", &WebmEncoder::addRGBAFrame)
    .function("finalize", &WebmEncoder::finalize)
    .function("lastError", &WebmEncoder::lastError)
    .function("closeEncoder", &WebmEncoder::closeEncoder);
}
