class Person {
    constructor(name) {
        this.name = name;
    }
    walk = () => {
        console.log("Walking function");
    }
    showData = () => {
        console.log(this.name);
    }
}

const person1 = new Person("saleh");
person1.showData();