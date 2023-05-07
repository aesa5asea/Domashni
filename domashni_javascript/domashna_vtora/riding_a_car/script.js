let age = parseInt(prompt("Enter your age."));

let outputElement = document.getElementById("output");

if ( age >= 18) {
    outputElement.innerHTML = `You are old enough to drive a car.` ;
} else {
    let wait_for_this_much = 18 - age;
    outputElement.innerHTML = `You are only ${age} years old! </br> When <a>${wait_for_this_much}</a> years pass, then you'll be old enough to drive a car.` ;
}

