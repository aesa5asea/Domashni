let colour = ["red", "green", "blue", "yellow"];

const outputElement = document.getElementById("output");

outputElement.innerHTML += "Answer:<br>";
for (let i = 0; i < colour.length; i++) {
    outputElement.innerHTML += `My #${i+1} choice is ${colour[i]}.<br>`;
  }

// outputElement.innerHTML = `My #1 choice is ${colour[0]}.`;
// outputElement.innerHTML = `My #2 choice is ${colour[1]}.`;
// outputElement.innerHTML = `My #3 choice is ${colour[2]}.`;
// outputElement.innerHTML = `My #4 choice is ${colour[3]}.`;
// ova samo na command prompt gi dava zatoa gi trgnav 

// da ima prazna linija izmegju dvata rezultata
outputElement.innerHTML += "<br>";
outputElement.innerHTML += "Bonus:<br>";

//bonus
let counter;
let number;

for (counter = 0; counter < colour.length; counter++) {
    if (counter == 0) {
        number = "1st";
    } else if (counter == 1) {
        number = "2nd";
    } else if (counter == 2) {
        number = "3th";
    } else {
        number = "4th";
    }
    outputElement.innerHTML += `My ${number} choice is ${colour[counter]}.</br>`;
}

