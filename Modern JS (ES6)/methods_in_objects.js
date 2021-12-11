const person = {
    name: "Saleh",
    walk() {console.log("This is person's walk")},
    talk() {console.log("This is person's talk")}
}

person.walk();

console.log(person['name']);

console.log(person['talk']);