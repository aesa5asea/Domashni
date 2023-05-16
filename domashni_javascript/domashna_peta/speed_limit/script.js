let speed = prompt("How fast were you driving?") ;

function limit(speed) {
    
    if (speed <= 50) {
        return "You are driving safe.";
    } else if (speed > 50 && speed <= 120) {
        let penalty_points = (speed - 50 ) / 5;
        if (penalty_points > 10 && speed > 120) {
            return "License suspended."; 
        } else
        return `You crossed the speed limit! You have <a>${penalty_points}</a> penalty points.`;        
    } else {
        return "License suspended.";
    }    
}

console.log(limit(speed));

document.getElementById("display").innerHTML = limit(speed);