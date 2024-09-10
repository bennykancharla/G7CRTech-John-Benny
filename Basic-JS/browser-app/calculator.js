const numInput = document.getElementById("num-input");

const addBtn = document.getElementById("add-btn");

const sumBtn = document.getElementById("sum-btn");

const avgBtn = document.getElementById("avg-btn");

const maxBtn = document.getElementById("max-btn");

const clearBtn = document.getElementById("clear-btn");

const resetBtn = document.getElementById("reset-btn");

const listOfNums = document.getElementById("list-of-nos");

const refreshBtn = document.getElementById("refresh-btn");

const resultContainer = document.getElementById("result-container");




let numsArray = [];

const sumOfNums = (arr) =>{
    let sum = 0;
    arr.map((num) => {
        sum += num
    })
    return sum
}

const avgOfNums = (arr) => {
   
    sumOfNumber = sumOfNums(arr)
    return (sumOfNumber/ arr.length)
    
}

const maxOfNums = (arr) => {
    let maxNum = arr[0]
    for (let i of arr){
        if (maxNum < i){
            maxNum = i
        }
    }
    return maxNum
}



const addingNums = (value) => {
    const listItem = document.createElement("li");
    listItem.textContent = parseInt(value)

    const closeBtn = document.createElement("button");
    closeBtn.textContent = "x"

    closeBtn.addEventListener("click", (value) => {
            listItem.remove()
            let index = numsArray.indexOf(parseInt(value))
            if(index> -1){
                numsArray.splice(index,1);
            }
            // numsArray.remove(value)
        })
        console.log(numsArray)
        // for (let i of numsArray){
        //     addingNums(i)
        // }

    

    listItem.appendChild(closeBtn);
    listOfNums.appendChild(listItem);

}

const  clearingAllValues = () => {
    resultContainer.textContent=""
    numInput.value = ""
    listOfNums.textContent = ""
}


addBtn.addEventListener("click", () => {
    numsArray.push(parseInt(numInput.value))
    // console.log(numsArray)
   addingNums(numInput.value)
   
   
})

sumBtn.addEventListener("click", () => {
    resultContainer.textContent = ""
    resultContainer.textContent = `Sum is ${sumOfNums(numsArray)}`
}  )



avgBtn.addEventListener("click", () => {
    resultContainer.textContent = ""
    resultContainer.textContent = `Average is ${avgOfNums(numsArray)}`
}  )


maxBtn.addEventListener("click", () =>{
    resultContainer.textContent = ""
    resultContainer.textContent = `Max is ${maxOfNums(numsArray)}`

})

clearBtn.addEventListener("click", () => {
   clearingAllValues()
})

refreshBtn.addEventListener("click", () => {
    for (let i of numsArray){
        addingNums(i)
    }
})

resetBtn.addEventListener("click", () => {
    clearingAllValues()
    numsArray = []
})