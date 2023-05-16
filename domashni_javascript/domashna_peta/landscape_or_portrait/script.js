let width = prompt("Enter the width of the screen.");
let height = prompt("Enter the height of the screen.");

function land_or_port (width, height) {
    if (width > height) {
        return "The dimensions are for a Landscape.";
    } else if (width < height) {
        return "The dimensions are for a Portrait.";
    } else {
        return "The dimensions are equal, thus it is neither Landscape or Portrait.";
    }
};

console.log(land_or_port(width, height));

document.getElementById("display").innerHTML = land_or_port(width, height);
