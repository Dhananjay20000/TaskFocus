//Takes another function as an argument (input).
//callback function
function add(a,b) {
    return a+b;
}
//HOF
function displayoutput(callback) {
    let a = 10;
    let b = 20;
    console.log(callback(a, b));
}
displayoutput(add);


//callback function
function greet(name) {
    console.log(`Hello, ${name}!`);
}
//HOF's
function processUser(name, callback) {
    callback(name);
}
processUser("Alice", greet); //Output: Hello, Alice!

// return a function as its output.
//HOF's
function multiplier(x){
    return function(y) { //anonymous
        return x * y;
    };
}
let double = multiplier(2);
console.log(double(5)); //10

let triple = multiplier(3);
console.log(triple(5)); //15