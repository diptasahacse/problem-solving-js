function largestElement(ages){
    let largestAge = ages[0];
    for (let index = 0; index < ages.length; index++) {
        if(largestAge < ages[index]){
            largestAge = ages[index];
            
        }
    }
    return largestAge;

}
function smallestElement(ages){
    let smallestAge = ages[0];
    for (let index = 0; index < ages.length; index++) {
        if(smallestAge > ages[index]){
            smallestAge = ages[index];
        }
    }
    return smallestAge;

}
let ages = [2, 34, 46, 3, 45, 67, 2, 42, 7, 100, 95, 3, 45, 84, 103, 1];
let largest = largestElement(ages);
let smallest = smallestElement(ages);
console.log(smallest,largest);


