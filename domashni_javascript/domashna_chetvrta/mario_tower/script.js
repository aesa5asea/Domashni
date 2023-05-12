const outputElement = document.getElementById("output");

let tower = "";
for ( let counter = 0 ; counter <= 5 ; counter ++ ) {
    tower += "#".repeat(counter) + "<br>";  
} 

outputElement.innerHTML = tower;