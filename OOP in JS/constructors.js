// Contructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log("draw");
    }
}
const anotherCircle = new Circle(1);
// if we forget to use the 'new' keyword then 'this' will return the global object in case of node.js runtime 
// enviroment and will return window object in case of running the code in browser instead of 'Circle' function
anotherCircle.draw();