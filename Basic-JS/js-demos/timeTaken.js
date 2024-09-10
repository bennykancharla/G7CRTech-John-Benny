// Find the time taken by below two functions 


var {LinkedList}= require('./linkedList');
// const humanizeDuration = require("humanize-duration");
 

function createList(count){ 

    var list = new LinkedList(); 

    for(var i=1;i<=count;i++) {
        list.append(i); 
    }
    return list; 

} 

function sumList2(list){
    var sum = 0;
    list.forEach(v => sum+=v)
    return sum
}
 

function sumList(list){ 

    var result=0; 

    for(var i=0;i<list.length();i++) {
        result+=list.get(i); 
    }
    

    return result; 

    

} 

 

//find how much time will the below code take 
var count=100000; 

//time#1 

var start = performance.now()
var list = createList(count); 
var end = performance.now()
console.log(list)
// console.log(start)
// console.log(end)

console.log("Total time taken", end - start)


//time#2 

var start2 = performance.now()
var result = sumList(list); 
var end2 = performance.now()
console.log(result)
console.log("Total time taken For Second Function", end2 - start2)
 

//print time#1 and time#2 