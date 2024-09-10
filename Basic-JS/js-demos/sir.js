class Calculator{
    constructor(presenter,formatter){
     
        this.operators={};
        this.addDefaultOperators();
        this.formatter = formatter ||( (res,v1,v2,opr) => `${v1} ${opr} ${v2} = ${res}`);
        this.presenter=presenter || console.log;
    }

    addDefaultOperators(){
        this.addOperator((x,y)=>x+y, "plus");
        this.addOperator((x,y)=>x-y, "minus");
        this.addOperator((x,y)=>x*y, "multiply");
        this.addOperator((x,y)=>x/y, "divide");
        this.addOperator((x,y) => x%y, "mod" )
    }

 


    //socket for future extension.
    addOperator(operator,...names){
        if(operator.name)
            this.operators[operator.name]=operator;
        
        for(let name of names){
            this.operators[name]=operator;
        }
    }

    setPresenter(presenter){
        this.presenter=presenter;
    }


    execute(value1,operatorName, value2,format){
        if(this.operators[operatorName]){
            //Step #1 Find operator
            var operator=this.operators[operatorName];

            //Step #2 Do Calculation
            var result=operator(value1,value2);

            //Step #3 Format the output
            var output = this.formatter(result,value1,value2,operatorName,format)

            //Step #4 Present the result
            this.presenter(output); 


        }else{
            this.presenter(`Invalid operator: ${operatorName}`); 
        }
    }
}


        
const firstNumInput = document.getElementById("first-num");
const secondNumInput = document.getElementById("second-num");

const dropdownEle =  document.getElementById("dropdown");
const formatDropdown = document.getElementById("format-dropdown");
const presenterDropdown = document.getElementById("presenter-dropdown");


function presentInHtml (res){
    const resultHead = document.getElementById("result-head")
    resultHead.textContent = ""
    resultHead.textContent = res
}

function getFormat(res,v1,v2,opr,format){
    const listOfSymbols = {"plus" : "+","minus": "-", "multiply": "*","divide": "/", "mod": "%"}
    const formattingList = {
        "onlyResult":(res) => `${res}`,
        "withSymbols" : (res,v1,v2,opr) => `${v1} ${listOfSymbols[opr]} ${v2} = ${res}`,
        "withWords" : (res,v1,v2,opr) => `${v1} ${opr} ${v2} = ${res}`
    }
    return formattingList[format](res,v1,v2,opr)
}


var emptyHtmlResult = () => {
    const resultHead = document.getElementById("result-head")

        resultHead.textContent = ""
}


var getPresenter = {
    presentInHtml,
    presentInConsole : (res) => {
        emptyHtmlResult()
        console.log(res)
    },
    presentInAlert : (res) =>{ 
        emptyHtmlResult()
        alert(res)
    },
    presentInLocalStorage: (res) => {
        emptyHtmlResult()
        localStorage.setItem("Result",res)
    }
}

function onClickCalculate(){
    // console.log("clicked")
    var calc = new Calculator(getPresenter[presenterDropdown.value],getFormat);
    calc.execute(parseInt(firstNumInput.value),dropdownEle.value,parseInt(secondNumInput.value),formatDropdown.value)
}






// var calculator = new Calculator(getPresenter.presentInConsole, getFormat);
// calculator.execute(10,"+",10,"withWords");
 
// console.log("Started")


// function testCalculator(){
//     var calc=new Calculator();
//     calc.execute(10,"plus",5);
//     calc.execute(10,"minus",5);

//     calc.setPresenter( output=> console.log(`*** ${output} ***`) );

//     calc.execute(10,"multiply",5);
//     calc.execute(10,"divide",4);
//     calc.execute(10,"mod",4);
// }

// testCalculator();