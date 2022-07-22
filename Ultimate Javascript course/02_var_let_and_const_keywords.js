// `var` keyword is used in pre ES6 code of JavaScript.
// It introduces sone bugs in the code.
// So, it is recommended to use `let` instead of `var` to define variables in post #S6 JavaScript.

// `const` is used to define constants which cannot be changed throughout JS program.

// var a = 45;
// var a = "p";

let b = "Harry";
const author = "Harry"

// author = 5 // Throws an error because constant cannot be changed

b = 4 // can be updated

// let b = "Saleh" // Will throw an error --> cannot be re-declared

{
    // `b` in the global scope is "4" but in the local scope of these braces it is 'this'
    let b = 'this'
    console.log(b)
}

console.log(b) // `b` in the global scope is "4"

// `var` vs `let` in JavaScript:

// `var` is globally scoped while `let` is block scoped.
// `var` can be updated and re-declared within its scope.
// `let` can be updated but not re-declared.
// `const` can neither be updated no be re-declared.
// `const` must be initialized during declaration unlike `var` and `let` as they can initialized later.

// One important thing to note about `const`
// Objects defined with `const` can be changed
const person = {
    name: "Saleh",
    section: 1,
    isPrincipal: false
};
person['friend'] = 'Haseeb'; // Not throw error --> we can add new key value pairs to object
console.log(person);
person['section'] = 2; // --> we can also update the existing jey value pairs also
console.log(person);
// Because `person` is just a reference to the object
// person = "Saleh"; // This will throw an error