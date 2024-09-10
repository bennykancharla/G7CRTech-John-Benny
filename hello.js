const areaOfCircleTwoTimes = (radius) => {
    let result;
    for (let i = 0; i<2;i++){
        if (Number.isInteger(radius) ){
            result = 3.14 * (radius ** 2)
            console.log(result)
            radius = result
        }
        else{
            result = 3.14 * (parseInt(radius) ** 2)
            radius = result
        }
}
    return result
}


// console.log( areaOfCircleTwoTimes(1))
// console.log(r)
// const secondRadius  = areaOfCircle(r)
// console.log(secondRadius)


// console.log(typeof(new Array(1,2,3)))
// console.log(typeof({"B": "fs", "a":[1,2],"f":23}))
// console.log("Vsf" + "r")
// console.log(typeof(1))
// console.log(typeof(1.2))
console.log(0 && [1,2,4])