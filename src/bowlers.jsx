import { useState } from "react"

export default function Balls(){
    const [counts,setCounts]=useState(0)
    const handleCount=()=>{
        const count = counts+1;
        setCounts(count);
    }
    const handleDicress=()=>{
        const count = counts - 1;
        setCounts(count);
    }
    const handleReset = () => {
        const count = counts - counts;
        setCounts(count);
    }
    const [masg,setMasg]=useState("")
    const handlerShow=()=>{
        const newMasg = alert("hlw");
        setMasg(newMasg);
    }
    return(
        <div>
            <h2>count:{counts}</h2>
            <button onClick={handleCount}>add</button>
            <button onClick={handleDicress}>minus</button>
            <button onClick={handleReset}>reset</button>
            <button onClick={handlerShow}> show</button>
        </div>
    )
}