// First Example
// var request = require('request');

// var s = request("https://www.facebook.com");
// s.pipe(process.stdout); 

// Second Example
// request("https://www.facebook.com").pipe(process.stdout);

// Third Example 
// var request = require('request');
// var fs = require('fs');

// request("https://www.facebook.com").pipe(fs.createWriteStream('facebook.html'));

// Fourth Example 
var request = require('request');
var fs = require('fs');
var zlib = require('zlib');

request("https://www.facebook.com").pipe(zlib.createGzip()).pipe(fs.createWriteStream('facebook.html.gz'));




