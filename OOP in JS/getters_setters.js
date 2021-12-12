function Circle(radius) {
    this.radius = radius;

    let defaultLocation = {
        x: 0,
        y: 0
    };

    this.getDefaultLocation = function() {
        return defaultLocation;
    }

    this.draw =  function() {
        console.log("draw");
    };

    // Getter and Setter
    Object.defineProperty(this, 'defaultLocation', {
        // Getter
        get: function() {
            return defaultLocation;
        },
        // Setter
        set: function(value) {
            if (!value.x || !value.y) {
                throw new Error('Invalid Loaction!');
            }
            defaultLocation = value;
        }
    })
}

const circle = new Circle(10);
// console.log(circle.getDefaultLocation());
console.log(circle.defaultLocation);
circle.defaultLocation = { x: 1, y: 3 };
console.log(circle.defaultLocation);