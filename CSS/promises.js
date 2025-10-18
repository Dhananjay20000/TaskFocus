//Steps to prepare Coffee

// 1. Place Order - 2sec - ["cold coffee","Espresso","Latte"]
//2. Started Preparing - 0sec
// 3. Add milk and coffee powder - 3sec 
// 4. Add Sugar - 2sec ["white","brown"]
// 5. Then boil and filter - 4sec 
// 6. Select container - 2sec ["L","M","S"]
// 7. Serve coffee - 1sec

// 1. relationship between time & Work
// 2. Promise Changing
// 2. Error Handling
// 3. then finally Handler

let stock = {
    coffee : ["cold coffee","Espresso","Latte"],
    sugar : ["white","brown"],
    cupsize: ["L","M","S"],
};

let is_shop_open = true;
let order = (time,work) => {
    return new Promise((resolve, reject) => {
        if(is_shop_open) {
            setTimeout(()=> {
                resolve(work);
            },time);
        } else {
            reject(console.log("Stock is not available"));
        }
    });
};
order(2000, () => console.log(`${stock.coffee[1]}was selected`))
.then(() => {
    return order(0, () => console.log("Preparation started."));
})
.then(()=> {
    return order(3000, () => console.log)
})