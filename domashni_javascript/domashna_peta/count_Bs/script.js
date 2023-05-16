let count = { 
    A: 0, 
    B: 0 
};

function countLetters(str) {
    for (let i = 0; i < str.length; i++) {
        let letter = str.charAt(i).toUpperCase();
        if (letter === "A" || letter === "B") {
            count[letter]++;
        }
    }
    return count;
}