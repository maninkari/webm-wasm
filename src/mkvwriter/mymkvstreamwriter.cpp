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

#include "mymkvstreamwriter.hpp"

MyMkvStreamWriter::MyMkvStreamWriter(val cb_) : cb(cb_), pos(0), len(0), cap(1024) {
  buf = (uint8_t*) malloc(cap);
}

MyMkvStreamWriter::~MyMkvStreamWriter() {
}

// https://www.tutorialspoint.com/c_standard_library/c_function_realloc.htm
int32_t MyMkvStreamWriter::Write(const void* buffer, uint32_t length) {
  while(len + length >= cap) {
    cap *= 2;
    buf = (uint8_t*) realloc((void*)buf, cap);
  }
  // buf + len is where the new pointer should point
  // buffer gets copied into buf + len position
  // 'lenght' bytes of buffer get copied into buf + len 
  memcpy(buf + len, buffer, length);
  len += length;
  pos += length;
  return 0;
}

int64_t MyMkvStreamWriter::Position() const {
  return pos;
}

int32_t MyMkvStreamWriter::Position(int64_t position) {
  return -1;
}

bool MyMkvStreamWriter::Seekable() const {
  return false;
}

void MyMkvStreamWriter::ElementStartNotify(uint64_t, int64_t) {
}

// returns array buffer
// es cuestion de agregar la data extra y devolverla con la calback function cb 
void MyMkvStreamWriter::Notify() {
  cb(val(typed_memory_view(len, buf)));
  len = 0;
}

void MyMkvStreamWriter::NotifyEnd() {
  // memcpy(buf, buffer, length);
  printf("\nNotifyEnd()\n");
  cb(val(typed_memory_view(len, buf)));
  cb(val(typed_memory_view(lenccd, ccd)));
  len = 0;
}

// setters
uint8_t* MyMkvStreamWriter::setCCD(const void* buffer, uint32_t length) {
  lenccd = length;
  ccd = (uint8_t*)malloc(length);
  memcpy(ccd, buffer, length);
  return ccd;
}

// getters
uint8_t* MyMkvStreamWriter::getBuf() {
  return this->buf;
}

uint8_t* MyMkvStreamWriter::getCCD() {
  return this->ccd;
}

uint64_t MyMkvStreamWriter::getPos() {
  return this->pos;
}

uint64_t MyMkvStreamWriter::getLen() {
  return this->len;
}

uint64_t MyMkvStreamWriter::getCap() {
  return this->cap;
}
