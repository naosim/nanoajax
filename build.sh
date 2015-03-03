tsc ./dev/nanoajax.ts --out ./build/nanoajax.js
./node_modules/uglify-js/bin/uglifyjs -c -o ./build/nanoajax.min.js ./build/nanoajax.js