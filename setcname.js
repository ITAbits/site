

const npm_package_homepage = process.env.npm_package_homepage.replace("https://", "");

let fs = require('fs');
let stream = fs.createWriteStream("./build/CNAME");
stream.once('open', function(fd) {
  stream.write(npm_package_homepage);
  stream.end();
});
