var request = require('request');

var s = request("https://www.facebook.com");

s.on('data', function(chunk) {
    console.log("Got some data: " + chunk);
});

s.on('end', function() {
    console.log('Done !');
});