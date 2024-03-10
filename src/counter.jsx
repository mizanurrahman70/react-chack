import { useState } from "react"

export default function Counter(){
    const [counter,setCount]=useState(0)
    const HandleAdd=()=>{
        const newCount= counter + 1
        setCount(newCount)
    }
    const Reduce=()=>{
       
            const newCount = counter - 1
        setCount(newCount)
  
    }
    return (
        <div>
            <h3>counter : {counter}</h3>
            <button onClick={HandleAdd}>add</button>
            <button onClick={Reduce}>Reduce</button>
        </div>
    )
}