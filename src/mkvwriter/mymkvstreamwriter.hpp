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

#ifndef MYMKVSTREAMWRITER_HPP
#define MYMKVSTREAMWRITER_HPP

#include <cstdlib>
#include <cstring>
#include <inttypes.h>

#include "emscripten/bind.h"

#include "mkvmuxer.hpp"

using namespace emscripten;

class MyMkvStreamWriter : public mkvmuxer::IMkvWriter {
 public:
  explicit MyMkvStreamWriter(val cb);
  virtual ~MyMkvStreamWriter();

  virtual int64_t Position() const;
  virtual int32_t Position(int64_t position);
  virtual bool Seekable() const;
  virtual int32_t Write(const void* buffer, uint32_t length);
  virtual void ElementStartNotify(uint64_t element_id, int64_t position);

  void Notify();
  void NotifyEnd();

  uint8_t* setCCD(const void* buffer, uint32_t length);

  uint8_t* getBuf();
  uint8_t* getCCD();
  uint64_t getPos();
  uint64_t getLen();
  uint64_t getCap();

 private:
  uint8_t* buf;
  uint8_t* ccd;
  uint64_t pos;
  uint64_t len;
  uint64_t lenccd;
  uint64_t cap;
  val cb;
};

#endif  // MYMKVSTREAMWRITER_HPP
