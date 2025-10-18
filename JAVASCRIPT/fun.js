//function declaratin
//declare or create
function greet() {
    console.log("Hello Everyone");
}
//call
greet();

function greet1(name, age) {
    return `Hello, ${name} your age is ${age}!`;
}
console.log(greet1("Alice", 34)); // op : Hello, Alice!
console.log(greet1("Bob", 56)); // op : Hello, Alice!


function add() {
    let a = 10;
    let b = 20;
    console.log(a+b);
}
add();

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
console.log(sq(6));


function largest(a, b, c) {
    let large = (a>b) ? (a>c?a:c) : (b>c?b:c);
    return large;
}
console.log(largest(10,30,12));
console.log(largest(60,50,10));
//a = 60, b = 50, c = 10


function checkAgeGroup(age) {
    if(age < 13) {
        return "child";
    }
    else if(age >= 13 && age<= 19) {
        return "Teen";
    }
    else if(age >= 20 && age <= 64) {
        return "Adult";
    }
    else {
        return "Senior";
    }

}
console.log(checkAgeGroup(80));

function month() {
    let a = prompt("Enter the Number:");
    a = 
    console.log(a);
}