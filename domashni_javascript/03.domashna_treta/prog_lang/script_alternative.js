
let java = {
    name: "Java",
    founder: {
        f_name: "James Gosling",
        email: "james.gosling@java.com"
    },
    founded: 1995 
};

let ce = {
    name: "C",
    founder: {
        f_name: "Dennis Ritchie",
        email: "dennis.ritchie@c.com"
    },
    founded: 1972 
};

let python = {
    name: "Python",
    founder: {
        f_name: " Guido van Rossum",
        email: "guido.rossum@python.com"
    },
    founded: 1989 
};

let prog_languages = [java, ce, python];

const outputElement = document.getElementById("output");

//Output the whole array in the HTML
outputElement.innerHTML += "<b>Answer to request 1:<b><br>";
for (let i = 0; i < prog_languages.length; i++) {
    outputElement.innerHTML += `<br>Name of language: <b>${prog_languages[i].name}</b>.<br>`;
    outputElement.innerHTML += `Name of founder: <b>${prog_languages[i].founder.f_name}</b>.<br>`
    outputElement.innerHTML += `Their E-mail: <b>${prog_languages[i].founder.email}</b>.<br>`
    outputElement.innerHTML += `Year when it was founded: <b>${prog_languages[i].founded}</b>.<br>`
}
//

//In another line, output only the first item in the array
outputElement.innerHTML += "<br><b>Answer to request 2:<b><br>";

outputElement.innerHTML += `<br>Name of language: <b>${prog_languages[0].name}</b>.<br>`;
outputElement.innerHTML += `Name of founder: <b>${prog_languages[0].founder.f_name}</b>.<br>`
outputElement.innerHTML += `Their E-mail: <b>${prog_languages[0].founder.email}</b>.<br>`
outputElement.innerHTML += `Year when it was founded: <b>${prog_languages[0].founded}</b>.<br>`
//

//In another line, output the e-mail of the founder of the second item in the array
outputElement.innerHTML += "<br><b>Answer to request 3:<b><br>";

outputElement.innerHTML += `<br>Their E-mail: <b>${prog_languages[1].founder.email}</b>.<br>`
//

//Add one item (object) to the beginning of the array
prog_languages.unshift("JavaScript");
outputElement.innerHTML += "<br><b>Answer to request 4:<b><br>";
outputElement.innerHTML += `<br>${prog_languages}<br>`
//

//Add one item (object) to the end of the array 
prog_languages.push("Nim");
outputElement.innerHTML += "<br><b>Answer to request 5:<b><br>";
outputElement.innerHTML += `<br>${prog_languages}<br>`
//