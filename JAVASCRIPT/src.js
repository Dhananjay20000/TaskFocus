function showMessages() {
    alert("Hello, World!");
}
document.writeln("click on the button");
document.writeln("<br>");
document.writeln("click on the button")
document.writeln("<br>");
console.log("hello");
console.log("Welcome to this world!")
document.writeln("<br>");
document.writeln("3+4");
document.writeln("<br>");
document.writeln(3+4);

var age = 22;
var age =24;

// function hoisting  = automatically take fn declaration to the top of fn call

//Fn Declaration
function square(x) {
    return x * x;
}

//function call
console.log(square(4));

//fn expression
let sqr = function(x)
{
    console.log(x*x);
}
sqr(5);

//Arrow fn
let sq = x => x*x;
console.log(square(6));

function largest(a, b, c) {
    let large = (a>b) ? (a>c?a:c) : (b>c?b:c);
    return large;
}
console.log(largest(10,30,12));
//a = 60, b=