//global scope
var a = 10;

function outer() {
    var b = 20; //local scope (outer)
    console.log("Inside outer function");
    function inner() {
        var c= 30; //Block scope
        console.log("Inside Inner function");
        console.log(a);//10
        console.log(b);//20
        console.log(c);//30
    }
        console.log(a);//10
        console.log(b);//20
        console.log(c);//Error
inner();
        console.log(a);//10
        console.log(b);//20
        console.log(c);//Error
}
        console.log(a);//10
        console.log(b);//Error
        console.log(c);//Error
outer();

        console.log(a);//10
        console.log(b);//Error
        console.log(c);//Error