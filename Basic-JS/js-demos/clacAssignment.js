


// const firstNumInput = document.getElementById("first-num");
// const secondNumInput = document.getElementById("second-num");

// const dropdownEle =  document.getElementById("dropdown");


// const resultHead = document.getElementById("result-head")
 

// function plus(a, b) { return a + b; }
// function minus(a, b) { return a - b; }
// function multiply(a, b) { return a * b; }
// function divide(a, b) { return a / b; }
// function mod(a,b) { return a % b; }


// function Calculator() {

//     operators = {
//         plus: plus,
//         minus    
//     }

//     this.execute = function (value1, oprName, value2) {

//         if (operators[oprName]) { 
//             var opr = operators[oprName]; 
//             var result = opr(value1, value2);
//             return result
//         } else {
//             return `Invalid operation ${oprName}`;
//         }
//     }

//     this.addOperator = function (operator, ...names) {

//         if (names.length) {
//             for (var name of names) {
//                 operators[name] = operator;
//             }
//         } else {
//             operators[operator.name] = operator;
//         }
//     }
// };





// var calc = new Calculator();


// calc.addOperator(multiply);
// calc.addOperator(divide);
// calc.addOperator(mod);



// // console.log("Started")

// function onClickCalculate(){
//     // console.log("clicked")
//     resultHead.textContent = ""

//     const result = calc.execute(parseInt(firstNumInput.value),dropdownEle.value,parseInt(secondNumInput.value))
//     resultHead.textContent = result

// }
// console.log("a")