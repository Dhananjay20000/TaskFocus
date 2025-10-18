//Synchronous
// console.log("I");
// console.log("drink");
// console.log("cofee");
// console.log("in a");
// console.log("cup");

// //Asynchronous
// console.log("I");
// console.log("drink");
// setTimeout(() => {
//     console.log("cofee");
// },3000)
// console.log("in a");
// console.log("cup");

//Steps to prepare Coffee

// 1. Place Order - 2sec - ["cold coffee","Espresso","Latte"]
//2. Started Preparing - 0sec
// 3. Add milk and coffee powder - 3sec 
// 4. Add Sugar - 2sec ["white","brown"]
// 5. Then boil and filter - 4sec 
// 6. Select container - 2sec ["L","M","S"]
// 7. Serve coffee - 1sec

let stock = {
    coffee : ["cold coffee","Espresso","Latte"],
    sugar : ["white","brown"],
    cupsize: ["L","M","S"],
};
// console.log(stock.coffee[1]);
// HOF
let order = (coffeename,call_prepare) => {
    console.log("Place the order");
    setTimeout(() => {
        console.log(`Order placed for ${stock.coffee[cofeename]}`);
        call_prepare();
    },2000);  
}

let prepare = () => {
    setTimeout(() => {
    console.log("Preperation started");
    setTimeout(() => {
    console.log("Add milk and cofee powder");
    setTimeout(() => {
    console.log(`Choosen sugar to be added is ${stock.sugar[1]} sugar`);
    setTimeout(() => {
    console.log(`Boil and filter the cofee`);
    setTimeout(() => {
    console.log(`Selected the cup size ${stock.cupsize[2]} small`);
    setTimeout(() => {
    console.log(`Hurray! Cofee Served`);
    },2000);
    },2000);
    },4000);
    },2000);
    },3000);
    },0);
}
order(1,prepare);