var mathFun = require('./mathfun');

var processorResults = function(err, results, time) {
    if(err) {
        console.log("ERROR: " + err.message);
    } else {
        console.log("The results are: " + results + " (" +time+ " ms)");
    }
};


for(var i = 0; i<10; i++) {
    console.log("calling 'evenDoubler' with paramter '" + i + "'");
    mathFun.evenDoubler(i, processorResults);
}

console.log("------------");
console.log("the 'foo' variable from module 'mathfun' = " + mathFun.foo);
console.log("the 'maxtime' variable is not exported " + mathFun.maxTime);


