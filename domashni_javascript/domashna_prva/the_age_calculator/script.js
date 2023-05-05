var year = prompt("Enter the year you were born.");
var year_two = prompt("Enter the year of your future age.");

var my_year = year;
var my_year_two = year_two;

var calculation = my_year_two - my_year;

var calculation_two = my_year_two - my_year - 1;

document.getElementById("year").innerHTML = calculation;

document.getElementById("year_other").innerHTML = calculation_two;

document.getElementById("year_two_other").innerHTML = my_year_two;

