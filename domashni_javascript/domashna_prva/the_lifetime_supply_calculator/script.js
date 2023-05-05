var my_age = prompt("Enter your age.");

var max_age = prompt("Enter the final year of your stock supply.");

var daily_amount = prompt("Enter how much units are you consuming per day.")

var years_of_supply = max_age - my_age;

var total = years_of_supply * daily_amount * 365;

var per_year = daily_amount * 365;

var per_month = per_year / 12;

var per_week = per_month / 4;

document.getElementById("age").innerHTML = max_age;

document.getElementById("total").innerHTML = total;

document.getElementById("yearly").innerHTML = per_year;

document.getElementById("montly").innerHTML = per_month.toFixed(2);

document.getElementById("weekly").innerHTML = per_week.toFixed(2);
