let a = 10;
let b = 5;
document.writeln("Arithmetic operator");
document.writeln("<br>");
document.writeln(a+b);//15
document.writeln("<br>");
document.writeln(a-b);//5
document.writeln("<br>");
document.writeln(a*b);//50
document.writeln("<br>");
document.writeln(a/b);//2
document.writeln("<br>");
document.writeln(a%b);//0
document.writeln("<br>");
document.writeln(a**b);//100000
document.writeln("<br>");
let x = 8;
document.writeln(x++);//9
document.writeln(x);//9
document.writeln("<br>");
let y = 4;
document.writeln(y--);//3
document.writeln(y);//3
document.writeln("<br>");

document.writeln("Assignment operators");
document.writeln("<br");
let c = 5;
document.writeln(c);//5
document.writeln("<br>");
document.writeln(c+=3);//c = c+3; 8
document.writeln("<br>");
document.writeln(c-=3);//c = c-3; 5
document.writeln("<br>");
document.writeln(c*=3);//c = c*3=15
document.writeln("<br>");
document.writeln(c/=3);//c = c/3=5
document.writeln("<br>");
document.writeln(c%=3);//c = c%3= 2
document.writeln("<br>");

document.writeln("Relational Operators");
document.writeln("<br>");
let m = 5;//number
let n = "5";//string
let  o = 5;
document.writeln(m==n);//true
document.writeln("<br>");
document.writeln(m===n);//false-values +datatype 
document.writeln("<br>");
document.writeln(m!=o);//false - values
document.writeln("<br>");
document.writeln(m!==o);//true - values - datatype
document.writeln("<br>");
document.writeln(m<o);//false
document.writeln("<br>");
document.writeln(m<=o);//falsr
document.writeln("<br>");
document.writeln(m>o);//true
document.writeln("<br>");
document.writeln(m>=o);//true
document.writeln("<br>");


document.writeln("Logical Operators");
document.writeln("<br>");
let age = 28;
console.log(age > 18 && age <30);//op : true
console.log(age < 18 || age >30);//op : false
document.writeln("check output on console");
document.writeln("<br>");

document.writeln("Ternary Operators");
document.writeln("<br>");
let canVote = (age>=18) ? "Yes!" : "No!"; //op:Yes!   
document.writeln(canVote);
document.writeln("<br>");
// to find wheather the number is even or odd
let num = 13;
let res = (num % 2 == 0) ? "Even" : "Odd"; //op:Odd
document.writeln(res);
document.writeln("<br>");

document.writeln("Type Operators");
document.writeln("<br>");
let p = 10;
document.writeln(p);//10
document.writeln(typeof(p));//string
document.writeln("<br>");
let q = "Hello";
document.writeln(q);//Hello
document.writeln(typeof(q));//string
document.writeln("<br>");
let r = true;
document.writeln(r);//true
document.writeln(typeof(r));//boolean
document.writeln("<br>");
document.writeln("<br>");
console.log(typeof "Hello"); //op: String

console.log([1,2,3] instanceof Array); //op:true


// fn int JS Add 2 num 
function add()
{
    let a =  10;
    let b = 20;
    console.log();
    
}