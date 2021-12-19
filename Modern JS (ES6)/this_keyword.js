const person = {
    name: "Saleh",
    walk() {
        console.log(this);
    }
};

person.walk(); // will return the reference to the object in which it is defined

console.log("-------------------");
const walk = person.walk;
walk(); // here, it will return the global object i.e. window object because the function walk is now defined
// in global scope
// Solution to this problem is
console.log("--------------------");
// Funstions in JS are objects so they also have methods such as bind
const bindedWalk = person.walk.bind(person); // we are passing the person object in place of this so it will bind
// with the person object
bindedWalk();

// A good resource to learn about 'this' keyword in JavaScript
// https://www.w3schools.com/js/js_this.asp