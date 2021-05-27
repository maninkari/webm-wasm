echo "============================================="
echo "Compiling wasm bindings"
echo "============================================="
(
  emcc \
    ${OPTIMIZE} \
    --bind \
    -s STRICT=1 \
    -s ALLOW_MEMORY_GROWTH=1 \
    -s ASSERTIONS=0 \
    -s MODULARIZE=1 \
    -s FILESYSTEM=0 \
    -s EXPORT_ES6=1 \
    -s MALLOC=emmalloc \
    --std=c++11 \
    -I node_modules/libyuv/include \
    -I node_modules/libvpx \
    -I node_modules/libwebm \
    -I build-vpx \
    -I build-webm \
    -o ./webm-wasm.js \
    -x c++ \
    src/webm-wasm.cpp \
    src/mkvwriter/mymkvwriter.cpp \
    src/mkvwriter/mymkvstreamwriter.cpp \
    build-yuv/libyuv.a \
    build-vpx/libvpx.a \
    build-webm/libwebm.a
  mkdir -p dist || true
  mv webm-wasm.{js,wasm} dist
)
echo $(ls)
echo $(pwd)
echo "============================================="
echo "Compiling wasm bindings done"
echo "============================================="
