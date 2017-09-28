var http = require('http');

var url = 'http://www.google.com.eg/?gfe_rd=cr&dcr=0&ei=DAi5WcimM7Ks8wfyqaTYCw';

console.log('making request....');
 var req = http.request(url, function(res) {
	console.log(res.statusCode);
	res.pipe(process.stdout);
 });

 req.end();