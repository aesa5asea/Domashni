document.body.style.fontFamily = "Arial, sans-serif";
document.getElementById("nickname").textContent = "Nikolaki";
document.getElementById("favorites").textContent = "Working mostly :')";
document.getElementById("hometown").textContent = "Skopje";

var liElements = document.getElementsByTagName("li");

for (var i = 0; i < liElements.length; i++) {
  liElements[i].className = "listitem";
}

var styleTag = document.createElement("style");

styleTag.textContent = ".listitem { color: red; }";

document.head.appendChild(styleTag);