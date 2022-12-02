
function checkNum(num) {
    if(!isNaN(num)){
        rampNumbers(num)
    }
    else {
        console.log('It is not a number')
    }
}

// This function checks to see if the number will "ramp up"
function rampNumbers(num) {
    // Define variables
    num = num.toString()
    let testing1 = 0
    let testing2 = 0
    // For Loop to iterate through the number
    for(let i = 0; i < num.length; i++) {
        // Convert string characters BACK into numbers
        testing1 = parseInt(num[i])
        testing2 = parseInt(num[i+1])
        // console.log("Number 1 = " + num[i] + " Number 2 = " + num[i+1])

        // Compare the two, and if the bigger number is BEFORE the smaller, return false and BREAK the loop
        if(testing1 > testing2){
            return false
            break;
        }
        else {
            // Do nothing and continue the loop
        }
    }
    return true
}

console.log(rampNumbers(5235))

// TODO:
// Create a way to accept an input
// Create "checks" to make sure a number was inputed - Lisa completed
// Create a website document that displays everything
// Stylize the website*
// Find way to optimize the code*

