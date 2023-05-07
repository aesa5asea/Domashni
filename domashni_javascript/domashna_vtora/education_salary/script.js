let education = prompt("Enter your education level.");
let salary;
let defaultText = "Enter a valid degree!"

let output = document.getElementById("output");

switch (education) {
    case "No high school diploma":
      salary = 1000;
      break;
    case "High school diploma":
      salary = 1100;
      break;
    case "Associate's degree":
      salary = 1200;
      break;
    case "Bachelor's degree":
      salary = 1300;
      break;
    case "Master's degree":
      salary = 1400;
      break;
    case "Professional degree":
      salary = 1500;
      break;
    case "Doctoral degree":
      salary = 1600;
      break;
    default:
        salary=null;
}
if (salary) {
    output.innerHTML = `The average salary for someone with a <a>${education}</a> is <b>${salary}</b>.`;
} else {
    output.innerHTML = defaultText ;
}
