process.stdin.resume();
process.stdin.setEncoding("utf8");

process.stdin.on('data', function(chunk) {
    process.stdout.write('Data! '  + chunk);
});

process.stdin.on('end', function() {
    process.stderr.write("Done !");
}); 

process.on("SIGTERM", function() {
    process.stderr.write("Why Man!");
});

console.log('node is running as process #' + process.pid);