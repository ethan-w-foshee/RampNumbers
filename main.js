
// This function is checking if it is a valid input
function checkNum(num) {
    if (!isNaN(num)) {
        return isNumRamp(num)
    }
    else {
        console.log('It is not a number')
    }
}

// This function is checking if the number is a ramp number
function isNumRamp(num) {
    let d1, d2;
    while (num >= 10) {
        d1 = num % 10;
        num /= 10;
        d2 = num % 10;
        if (d2 > d1)
            return false;
    }
    return true;
}

function numberCheck(num) {
    num = document.getElementById("number").value
    console.log(num)
    console.log(checkNum(num))
}
// TODO:
// Create a way to accept an input -- Jaziel
// Create "checks" to make sure a number was inputed --- Lisa
// Create a website document that displays everything --- Viri

// Stylize the website*
// Find way to optimize the code*

// ------------------- NOT USED ANYMORE ------------------------
// This function checks to see if the number will "ramp up"
// function rampNumbers(num) {
//     // Define variables
//     num = num.toString()
//     let testing1 = 0
//     let testing2 = 0
//     // For Loop to iterate through the number
//     for(let i = 0; i < num.length; i++) {
//         // Convert string characters BACK into numbers
//         testing1 = parseInt(num[i])
//         testing2 = parseInt(num[i+1])
//         // console.log("Number 1 = " + num[i] + " Number 2 = " + num[i+1])

//         // Compare the two, and if the bigger number is BEFORE the smaller, return false and BREAK the loop
//         if(testing1 > testing2){
//             return false
//             break;
//         }
//         else {
//             // Do nothing and continue the loop
//         }
//     }
//     return true
// }