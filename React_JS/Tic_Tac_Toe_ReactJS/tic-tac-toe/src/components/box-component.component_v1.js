import React from "react";

export const Box = ({value,id}) => {
    var i = 0
    const clickHandler = ( )=> {
        // console.log("Box Clicked")
        var move = document.getElementById(id);
        var status = document.getElementById("status"); 
        move.textContent = status.textContent;
        let values=["O","X"]
        if(i===0){
            status.textContent ="X"
            move.textContent=values[i]
            i++
        }
        else{
            status.textContent = "O"
            move.textContent=values[i]
             i--
        }


        
        
    }

    return (
        <button  id={id} onClick={clickHandler} className="box-component playwrite-be-wal-box1">

            {value}
        </button>
    )
};