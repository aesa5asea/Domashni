var temp_c = prompt("Enter the temperature in °C");
var temp_f = prompt("Enter the temperature in °F");

var converter_c = ((temp_f - 32) * 5) / 9;

var converter_f = ((temp_c / 5) * 9) + 32;

document.getElementById("ent_c").innerHTML = temp_c;

document.getElementById("ent_f").innerHTML = temp_f;

document.getElementById("con_c").innerHTML = converter_c.toFixed(2);

document.getElementById("con_f").innerHTML = converter_f.toFixed(2);