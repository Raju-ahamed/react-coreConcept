import { useState } from 'react'
import './App.css'
export default function Counter (){
    const handlerBtn = ()=>{
        setCount(count+1);
    }
    const [count,setCount]=useState(0)
    return(
        <div className='counter'>
            <h1>Count:{count}</h1>
            <button onClick={handlerBtn}>add</button>
        </div>
    )
}