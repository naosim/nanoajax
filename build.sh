tsc ./dev/nanoajax.ts --out ./build/nanoajax.js
./node_modules/uglify-js/bin/uglifyjs -c -o ./build/nanoajax.min.js ./build/nanoajax.js

tsc ./dev/nanojsonp.ts --out ./build/nanojsonp.js
./node_modules/uglify-js/bin/uglifyjs -c -o ./build/nanojsonp.min.js ./build/nanojsonp.js