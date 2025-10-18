//[] square brackets
let colors = ["red", "yelllow", "green", "pink"];
console.log(colors);
console.log(colors[2]);

//create with constructor - new keyword
let arr = new Array(1, 2, 3, 4, 5, 6);
console.log(arr);
arr.push(7); //end
arr.unshift(0); //start
console.log(arr); 
arr.pop(); //last - 7
arr.shift(); //start - 0
console.log(arr);
//index
console.log(arr[5]); //6
//array.splice(start index, deleteCount no of items, item1, item2, ....) -1, 2, 10, "A", 5, 6
arr.splice(2, 2, 10, 'A')
console.log(arr);

let ar = new Array(1, 2, 3, 4, 5, 6); //3,4,5
//slice - start - end index 0 - n-1
let part= ar.slice(2, 5); // 3, 4, 5
console.log(part);
let part1 = ar.slice(2, 4);//3, 4
console.log(part1);

// [] square brackets
let colors1 = ["red", "yelllow", "green", "pink"];
console.log(colors);
console.log(colors1.indexOf("pink"));
console.log(colors.includes("green"));
console.log(colors.includes("cyan"));
colors1.sort();
console.log(colors1);
colors1.reverse();
console.log(colors1);

let num = [1, 2, 4, 0, 7];
num.sort();
console.log(num);
num.reverse();
console.log(num);

//for loop
let nos = [1, 2, 3, 4];
for (let i = 0;i<nos.length; i++) {
    console.log(nos[i]);
}
//for color
let nos1 = ["red", "green", "pink", "black"];
for (let i = 0;i<nos1.length; i++) {
    console.log(nos1[i]);
}

//Arrow function
nos.forEach(i => console.log(i));

let fruits = ["apple", "banana", "cherry"];
fruits.forEach(fruit=> console.log(fruits));

//map
let numbers = [1, 2, 3]; //orignal
//square numbers

let squared = numbers.map(num => num * num); //[1, 4, 9]
console.log(squared); //op:[1, 4, 9]

let noss = [1, 2, 3, 4];
let noss1 = [...nos]; //spread operator
console.log(noss);
console.log(noss1);

for(let i = 0; i<nos.length;i++) {
    //console.log(noss[i]);
    ProcessingInstruction.stdout.write(noss1[i] + " ");
}

//filter()
let numberss = [1, 2, 3, 4, 5];
let evenNumberss = numberss.filter(num => num % 2==0);
console.log(evenNumberss); //op: [2, 4]
