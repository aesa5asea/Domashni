var MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
    {name: "Everest", height: 8848, country: "Nepal"},
    {name: "Mount Fuji", height: 3776, country: "Japan"},
    {name: "Mont Blanc", height: 4808, country: "Italy/France"},
    {name: "Vaalserberg", height: 323, country: "Netherlands"},
    {name: "Denali", height: 6168, country: "United States"},
    {name: "Popocatepetl", height: 5465, country: "Mexico"}
];

var table = document.createElement("table");
table.style.border = "1px solid black";

var headers = ["Name", "Height", "Country"];
var headerRow = document.createElement("tr");

for (var i = 0; i < headers.length; i++) {
  var headerCell = document.createElement("th");
  headerCell.textContent = headers[i];
  headerCell.style.border = "1px solid black";
  headerRow.appendChild(headerCell);
}
table.appendChild(headerRow);


for (var i = 0; i < MOUNTAINS.length; i++) {
  var row = document.createElement("tr");
  var nameCell = document.createElement("td");
  nameCell.textContent = MOUNTAINS[i].name;
  nameCell.style.border = "1px solid black";
  row.appendChild(nameCell);

  var heightCell = document.createElement("td");
  heightCell.textContent = MOUNTAINS[i].height;
  heightCell.style.border = "1px solid black";
  row.appendChild(heightCell);

  var countryCell = document.createElement("td");
  countryCell.textContent = MOUNTAINS[i].country;
  countryCell.style.border = "1px solid black";
  row.appendChild(countryCell);

  table.appendChild(row);
}

document.body.appendChild(table);