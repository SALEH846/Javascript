// Factory function
function createCircle(radius) {
    return {
        // radius: radius,
        // In ES6 we have this feature that if the name of both key and value aresame then we can write it only once
        radius,
        draw: function() {
            console.log("draw");
        }
    };
};

const circle = createCircle(1);
circle.draw();