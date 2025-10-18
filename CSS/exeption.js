// try {
// hallo();
// }
// catch(error) {
//     console.log("Error Handled" + error);
// }
// finally {
//     console.log("Finally executed");
// }



function validateAge(age) {
    if(age<18) {
        throw new CustomError("You are not under aged");
    }
    console.log("You are allowed");
}
try {
    validateAge(12);
}
catch(error) {
    console.log("The age is invalid", error);
}
finally {
    console.log("Always executed");
}