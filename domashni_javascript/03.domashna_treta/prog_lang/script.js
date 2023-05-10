
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



//Output the whole array in the console
console.log(prog_languages);

//In another line, output only the first item in the array
console.log(prog_languages[0]);

//In another line, output the e-mail of the founder of the second item in the array
console.log(prog_languages[1].founder.email);

//Add one item (object) to the beginning of the array 
prog_languages.unshift("JavaScript");
console.log(prog_languages);

//Add one item (object) to the end of the array 
prog_languages.push("Nim");
console.log(prog_languages);