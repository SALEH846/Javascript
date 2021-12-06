// Abstraction means Hide the details and only show or expose the essentials

// Let's say that 'defaultLocation' variable and 'computeOptimumLocation' method both are implementation details
// and we want to hide these from users so no unexpected results are produced at runtime
// What we do is to use 'let' instead of 'this' because let initializes and the scope is only within the function 
// and as the function ends they go out of scope so users cannot access them from outside

function Circle(radius) {
    this.radius = radius;

    // this.defaultLocation = {
    //     x: 0,
    //     y: 0
    // };

    let defaultLocation = {
        x: 0,
        y: 0
    };

    // this.computeOptimumLocation = function() {
    //     // ...
    // };

    let computeOptimumLocation = function() {
        // ...
    };

    this.draw =  function() {
        // this.computeOptimumLocation();
        computeOptimumLocation();
        console.log("draw");
    };
}

const circle = new Circle('10');