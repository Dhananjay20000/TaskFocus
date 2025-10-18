// no ip no op
function add()
{
    let a =  10;
    let b = 20;
    console.log(a+b);
}
add();

// no ip but op
function add()
{
    let x =  10;
    let y = 20;
    return x+y
}
let res = add();
console.log(res);

//i/p - no op
function add(a1,b1) {
    console.log(a1+b1)
}
add(10,5);