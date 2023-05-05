var radius = prompt("Внеси го радиусот на кругот.");

var dijametar = 2 * radius;

const pi = 3.14;

var obem = pi * dijametar;

var plostina = pi * radius * radius;

document.getElementById("obem").innerHTML = obem.toFixed(2);

document.getElementById("plostina").innerHTML = plostina.toFixed(2);
