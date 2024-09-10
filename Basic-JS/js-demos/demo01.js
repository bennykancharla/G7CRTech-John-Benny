function addNums(){
    // console.log(arr)
    let sum = 0

    for(let i in arguments){
        sum += arguments[i]
        // console.log(i)
    }
    // console.log(arguments)
    return sum
}

function avgNum(){
    // const sum = addNums(arguments)
    // console.log(arguments)
    // console.log(arr)
    let sum = 0

    for(let i in arguments){
        sum += arguments[i]
        // console.log(i)
    }
    return sum/arguments.length
}


console.log(addNums(1,2,3,4,5,6,7,8,9,10));
console.log(avgNum(1,2,3,4,5,6,7,8,9,10))