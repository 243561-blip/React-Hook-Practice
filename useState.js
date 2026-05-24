// we build a simple counter for the Practice of UseState HOOK
import React,{useState} from "react";

// make a javascript function

function Counter(){
    // syntax of this useState

    const[count , setCount] = useState(0);

    return(
        <div>
            <p>You clicked Counter {count} times</p>
            <button onClick = {()=> setCount(count + 1 )}>
               Click Me
            </button>
        </div>
    )
}
export default Counter;