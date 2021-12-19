// when we call a stand alone function or global function or function which is not part of any object then "this" used in 
// that function will return a window object
// On the other hand, if we call a function which is a part of any object then "this" used in that function will
// return the object in which that function is defined

const person = {
    talk() {
        console.log(this); // will return the person object
    }
}
person.talk();

const person = {
    talk() {
        setTimeout(function(){
            console.log(this); // Here, "this" will return the window object because "setTimeOut" is a global function
            // and not a part of any object
        }, 1000);
    }
}
person.talk();


const person = {
    talk() {
        var self = this;
        setTimeout(function(){
            console.log(self);
        }, 1000);
    }
}
person.talk();

// using arrow function 
const person = {
    talk() {
        setTimeout(() => {
            console.log(this);
        }, 1000)
    }
}
person.talk();