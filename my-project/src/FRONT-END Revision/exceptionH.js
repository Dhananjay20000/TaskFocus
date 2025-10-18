
try {
let num = 10;
let res = num / 10;
console.log(res);
}
catch (e) {
    console.log("Please define x" , e.message);
}
finally {
    console.log("Wxecution completed.");
}