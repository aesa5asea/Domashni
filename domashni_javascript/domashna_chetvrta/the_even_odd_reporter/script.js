const outputElement = document.getElementById("output");

for ( let counter = 0 ; counter <= 20 ; counter ++ ) {
    if (counter % 2) {
        outputElement.innerHTML += `- ${counter} is <a>odd</a>.<br>`;
    } else {
        outputElement.innerHTML += `- ${counter} is <b>even</b>.<br>`;
    }
} 