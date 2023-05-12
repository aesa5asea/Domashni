const outputElement = document.getElementById("output");

for ( counter = 100 ; counter >= 0 ; counter-- ) {
    if (counter <= 61 ) {
        outputElement.innerHTML += `You got ${counter} points on the test that lands you a <F>F</f>.<br>`;
    } else if (counter >= 62 && counter <= 71 ) {
        outputElement.innerHTML += `You got ${counter} points on the text that lands you a <d>D</d>.<br>`;
    } else if (counter >= 72 && counter <= 81 ) {
        outputElement.innerHTML += `You got ${counter} points on the text that lands you a <c>C</c>.<br>`;
    } else if (counter >= 82 && counter <= 91 ) {
        outputElement.innerHTML += `You got ${counter} points on the text that lands you a <b>B</b>.<br>`;
    } else {
        outputElement.innerHTML += `You got ${counter} points on the text that lands you a <a>A</a>.<br>`;
        
    }
}