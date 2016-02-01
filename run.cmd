call browserify -e test.js -o bundle.js
start chrome "http://localhost:3456/test.html"
call http-server -c-1 -p3456 -d

