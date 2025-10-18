// Higher Order Function
function waiter(orderCallback, item, quantity) {
    console.log(" Waiter: Welcome to the restaurant!");
    console.log(" Waiter: Taking your order...");

    // Pass arguments to the callback
    orderCallback(item, quantity);

    console.log(" Waiter: Order is being processed and served!");
}

// Callback functions
function orderFood(item, quantity) {
    console.log(`Customer: I would like ${quantity} ${item}(s), please!`);
}

// Use HOF with different arguments
waiter(orderFood, "Pizza", 2);
console.log("----");
waiter(orderFood, "Pasta", 1);
// //real time example
// // Higher Order Function (Waiter)
// function waiter(orderCallback) {
//     console.log("👨‍🍳 Waiter: Welcome to the restaurant!");
//     console.log("👨‍🍳 Waiter: Taking your order...");

//     // Execute the callback (the customer's order)
//     orderCallback();

//     console.log("👨‍🍳 Waiter: Order is being processed and served!");
// }

// // Callback functions (Customer orders)
// function orderPizza() {
//     console.log("🍕 Customer: I would like a Pizza, please!");
// }

// function orderPasta() {
//     console.log("🍝 Customer: I would like a Pasta, please!");
// }

// // Use HOF with different callbacks
// waiter(orderPizza);
// console.log("----");
// waiter(orderPasta);