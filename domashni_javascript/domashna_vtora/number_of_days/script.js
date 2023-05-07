let month = prompt("Enter one of the twelve monts in the year.")

let outputElement = document.getElementById("output");

if (month == "January") {
    outputElement.innerHTML = `The month of January has <a>31</a> days.` ;
} else if (month == "February") {
    outputElement.innerHTML = `The month of February has <a>28</a> or <b>29</b> days depending on if it's a leap year or not.` ;
} else if (month == "March") {
    outputElement.innerHTML = `The month of March has <a>31</a> days.` ;
} else if (month == "April") {
    outputElement.innerHTML = `The month of April has <a>30</a> days.` ;
} else if (month == "May") {
    outputElement.innerHTML = `The month of May has <a>31</a> days.` ;
} else if (month == "June") {
    outputElement.innerHTML = `The month of June has <a>30</a> days.` ;
} else if (month == "July") {
    outputElement.innerHTML = `The month of July has <a>31</a> days.` ;
} else if (month == "August") {
    outputElement.innerHTML = `The month of August has <a>31</a> days.` ;
} else if (month == "September") {
    outputElement.innerHTML = `The month of September has <a>30</a> days.` ;
} else if (month == "October") {
    outputElement.innerHTML = `The month of October has <a>31</a> days.` ;
} else if (month == "November") {
    outputElement.innerHTML = `The month of November has <a>30</a> days.` ;
} else if (month == "December") {
    outputElement.innerHTML = `The month of December has <a>31</a> days.` ;
} else {
    outputElement.innerHTML = `Enter a valid name of a month.` ;
}