const square = function(number) {
    return number * number;
}
// After converting it into arrow function it will look like
const square = number => {
    // if we have no arguments then we will pass empty () parantheses
    // if we have only one parameter then we can omit parantheses
    // if we have multiple parameters the parantheses must be used
    return number * number;
}
// if we have only one line of code in body of arrow function then it can be written as 
const square = number => number * number;

// all the functions defined above are same