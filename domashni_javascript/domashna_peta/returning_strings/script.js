let object = {
    name: "Nikola",
    surname: "Nikolovski",
    home_town: "Nikolaev Grad",
    postal_code: 1000
}

function returning_objects(obj, type){
    let values = Object.values(obj);
    let result = [];
    for(let i=0; i<values.length; i++){
        if(typeof values[i] === type){
            result.push(values[i]);
        }
    }
    return result;
}

console.log(returning_objects(object, "string"));
console.log(returning_objects(object, "number"));

