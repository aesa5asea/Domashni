let band = prompt("How much players does your band have?").toLowerCase();

let outputElement = document.getElementById("output");

if (band == 1 || band == "one") {
    outputElement.innerHTML = `You are playing in a <a>Solo</a> band.` ;
} else if (band == 2 || band == "two") {
    outputElement.innerHTML = `You are playing in a <a>Duo</a> band.` ;
} else if (band == 3 || band == "three") {
    outputElement.innerHTML = `You are playing in a <a>Trio</a> band.` ;
} else if (band == 4 || band == "four") {
    outputElement.innerHTML = `You are playing in a <a>Quatret</a> band.` ;
} else if (band == 5 || band == "five") {
    outputElement.innerHTML = `You are playing in a <a>Quintet</a> band.` ;
} else if (band == 6 || band == "six") {
    outputElement.innerHTML = `You are playing in a <a>Sextet</a> band.` ;
} else if (band == 7 || band == "seven") {
    outputElement.innerHTML = `You are playing in a <a>Septet</a> band.` ;
} else if (band == 8 || band == "eight") {
    outputElement.innerHTML = `You are playing in a <a>Octet</a> band.` ;
} else if (band == 9 || band == "nine") {
    outputElement.innerHTML = `You are playing in a <a>Nonet</a> band.` ;
} else if (band >= 10 || band <= 39) {
    outputElement.innerHTML = `You are playing in a <a>Symphony Orchestra</a> or <a>Philharmonic Orchestra</a>.` ;
} else if (band >= 40 ) {
    outputElement.innerHTML = `You are playing in a <a>Chamber Orchestra</a>.` ;
} else {
    outputElement.innerHTML = `Please enter a numerical number so we can give you the name correctly.` ;
}