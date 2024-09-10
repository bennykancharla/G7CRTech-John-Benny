
var numberTextBox=document.getElementById('numberTextBox');
var console=document.getElementById('console');
var numberList=document.getElementById('numberList');
var numbers=[2,3,9,2];


const onClickClose = (num) => {
    let numList = []
    let removeList = []
   for (let number of numbers){
    if(num !== number){
        numList.push(number)
    }else{
        removeList.push(number)
    }
   }
   refresh()
}



function addToList(){
    var value = numberTextBox.value;
    var number = parseFloat(value);
    if(!isNaN(number)){
        //console.innerHTML+=  `<p>Adding number ${number}</p>`;
        
        numberList.innerHTML+=`<li>${number} <button onclick="">x</button></li> `;
        numbers.push(number);
        // console.log(numberList.ul.li.value)
    } else{
        console.innerHTML+=`<p>Invalid Value :"${value}"</p>`;
    }

    

}

function clear(){
    //console.log('calling clear');
    alert('Clearning!');

    console.innerHTML=`<p>Clearing</p>`;
    numberTextBox.value='';
    numberList.innerHTML='';
    //console.innerHTML='';
}

function reset(){
    console.innerHTML=`<p>Resetting</p>`;
    clear();
    //also remove from the memory
    numbers=[];
}

function refresh(){
    numberList.innerHTML="";
    for(var number of numbers){
        numberList.innerHTML+=`<li>${number} <button onclick="">x</button></li>`;
    }
}


document
    .getElementById('addButton')
    .addEventListener('click', addToList);