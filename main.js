function rampNumbers(num) {
    num = num.toString()
    let testing1 = 0
    let testing2 = 0
    for(let i = 0; i < num.length; i++) {
        testing1 = parseInt(num[i])
        testing2 = parseInt(num[i-1])
        console.log(num[i])
        if(testing1 > testing2){

        }
        else {
            return false
        }
    }
    return true
}

console.log(rampNumbers(5235))