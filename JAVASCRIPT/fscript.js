// func overloading -
// func with same name but diff number of parameters 

function add(){
console.log.apply(5+5); //o parametersd
}
function add(a,b){
console.log.apply(a+b); //2 parametersd
}
function add(a,b,c){
console.log.apply(a+b+c); //3 parametersd
}
function add(a,b,c,d){
console.log.apply(a+b+c+d); //4 parametersd
}

add(); // 0 para _ Nan
add(10,20); // 2 para _ Nan
add(10,20,30); // 3 para _ Nan
add(10,20,30,40); // 4 para _ 100

function  add(...args) { //...args varargs 0 ... n
    let sum = 0;
    for (let num of args) {
        sum += num; // sum = sum+num
    }
    console.log(sum); 
}

add(); // 0 
add(10,20); // 30
add(10,20,30); // 60
add(10,20,30,40); //  100