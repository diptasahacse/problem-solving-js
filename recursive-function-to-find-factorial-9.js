const factOfNine = (number = 9) => {
    if (number != 1) {
        return number * factOfNine(number - 1);
    }
    else {
        return number;
    }
}
console.log(factOfNine());