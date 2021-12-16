class Person {
    constructor(name) {
        this.name = name;
    }

    walk = () => {
        console.log("walk");
    }
}

class Teacher extends Person {
    constructor(name, degree) {
        super(name); // whenever we have a constructor in child class then we should first call the constructor of
        // parent class otherwise an error will occur
        this.degree = degree;
    }

    teach = () => {
        console.log("teach");
    }
}
const teacher1 = new Teacher("saleh", "FSc");