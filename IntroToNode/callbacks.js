var maxtime = 1000;

// If the input is even, double it
// If input is odd, error
// (call takes random amount of time < ls)

var evenDoubler = function(v, callback){
    var waitTime = Math.floor(Math.random()* (maxtime+1));
    if(v % 2){
        setTimeout(function() {
           callback(new Error("Odd input")); 
        }, waitTime);    
    } else {
        setTimeout(function() {
            callback(null, v*2, waitTime);
        }, waitTime);
    }
}

var handleResults = function(err, results, time){
    if(err){
        console.log("ERROR: " + err.message);
    }
    else{
        console.log("The results are: " + results + " (" +time+ " ms)");
    }
};



// call the function
evenDoubler(3, handleResults);
console.log("------------");