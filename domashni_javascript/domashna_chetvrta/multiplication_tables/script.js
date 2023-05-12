// const outputElement = document.getElementById("output");

// for ( let counter = 0 ; counter <= 10 ; counter++ ) {
//     let result = counter * 9;
//     outputElement.innerHTML += `${counter} * 9 = ` + `${result} <br>`;
// }

const outputElement = document.getElementById("output");

for ( let counter = 0 ; counter <= 10 ; counter++ ) {
    for ( let counter2 = 0  ; counter2 <= 10 ; counter2++) {
        let result = counter * counter2;
        outputElement.innerHTML += `${counter} * ${counter2} = ` + `${result} <br>`;
        
        if (counter2 % 10 === 0 && counter2 !== 0) {
            outputElement.innerHTML += "<br>";
    }
  }
}
