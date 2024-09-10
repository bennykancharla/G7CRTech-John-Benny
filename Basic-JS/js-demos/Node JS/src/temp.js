// var {findPrimesCallback, isPrimeSync} = require("./AsyncFuncs")



// function *generator(){
//     while(true){
//     var value = yield 
//     console.log(`Generator ${value}`)
// }
// }

// const primeRange = function *(min,max){
//     for(var i = min;i<max;i++){
//         if(isPrimeSync(i)){
//             var result = yield i;
//             if(result === "abort"){
//                 yield {message:"aborted", lastValueChecked:i};
//                 return;
//             }
//         }
//     }
// }

// function* primeGenerator(skip = 0,min,max) {
//     let count = 0;
    

//     // const isPrime = (n) => {
//     //     for (let i = 2; i <= Math.sqrt(n); i++) {
//     //         if (n % i === 0) return false;
//     //     }
//     //     return true;
//     // };

//     for(let num = min; num < max; num++) {
//         if (isPrimeSync(num)) {
//             if (count >= skip) {
//                 var result = yield num;
//                 if(result === "abort"){
//                     yield {message:"aborted", lastValueChecked:num};
//                     return;
//                 }
//             }
//             count++;
//         }
       
//     }
// }


// var result = primeGenerator(1,100);

// while(true){
//        var r =  result.next().value;
//        console.log(r)
//        if(!r){
//         break;
//        }
// }
// // console.log(result.next("abort"));

// // var generator =  generator();

// // for(var i = 0; i <10;i++){
// //     // console.log("e")
// //    generator.next(i).value
// // }




// // var res= findPrimesCallback(2,5000,(error,result,progress) => {
    
// //         console.log(result);
// //         console.log(progress)
// // },100)


// // console.log(res)


let milliseconds = 1625097600000; 
let date = new Date(milliseconds);

// console.log(date.getMonth()+1);

console.log(date.toLocaleDateString('default',
     { month: 'short' }));