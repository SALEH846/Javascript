// Calling a function inside another function is called 'callback'

const one = (call_second) => {
    console.log("Step 1 completed. Proceeding to step 2.");
    // setTimeout(() => {console.log("Haha")}, 1500);
    call_second(); // callback
}

const second = () => {
    console.log("Step 2 completed");
}

one(second);