import { useState } from "react";

function Counter(){

    let [number, setNumber] = useState(0)

    function increment(){
        console.log("running increment",number);
        setNumber(number + 1);
        number++;
        
        //document.getElementById("count").textContent = count;

    }

    function decrement(){
        //console.log("running decrement",count);
        //setNumber(number - 1);
        number--;
        //document.getElementById("count").textContent = count;
    }

    return(
        <div>
            <h3 id="count">{number}</h3>
            <p>
                <button onClick={increment}>+</button>
                <button  onClick={decrement}>-</button>
            </p>
        </div>
    )
}

export default Counter

//todolist
//input box -> input a task -> button + add task
//each task "-"" button to remove the task