// var VS let
// var and let are both used for variable declaration in javascript but the difference between them is that var 
// is function scoped and let is block scoped. It can be said that a variable declared with var is defined 
// throughout the program as compared to let.

// For var
console.log("For Var");
function forVar() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log(i);
}
forVar();

// For let
console.log("For Let");
function forLet() {
    for (let j = 0; j < 5; j++) {
        console.log(j);
    }
    console.log(j);
}
forLet();