function outerFunction() {
    let count = 0;

    return function innerFunction() {
        count++;
        console.log(`Count is: ${count}`);
    };
}

const counter = outerFunction();
counter();
counter();
counter();