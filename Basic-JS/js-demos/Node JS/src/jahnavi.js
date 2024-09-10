function isPrimeSync(value) {
    if (value < 2) return false;
 
    for (let i = 2; i * i <= value; i++) {
        if (value % i === 0) return false;
    }
 
    return true;
}
 
 
 
const PrimeRange = function * (min,max){
   
    for(let i = min;i<max;i++){
        if(isPrimeSync(i)){
                yield i   
        }
    }
     
}
var skipLimit = 2
let range = PrimeRange(0,10)//[2,3,5,7]

for(let i = 0;i<skipLimit;i++){
    range.next()//ignoring 2,3
}
 
// range.next(skipLimit)

for(let i of range){
    console.log(i)
}

// console.log(range);
// console.log(range.next());
// console.log(range.next());
 
module.exports = {
    PrimeRange
}
