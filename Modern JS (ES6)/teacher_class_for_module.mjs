import { Person } from './person_class_for_module.mjs';

export function promote() {}

// Default export
export default class Teacher extends Person {
    constructor(name, degree) {
        super(name); // whenever we have a constructor in child class then we should first call the constructor of
        // parent class otherwise an error will occur
        this.degree = degree;
    }

    teach = () => {
        console.log("teach");
    }
}