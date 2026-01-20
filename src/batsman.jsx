import { useState } from "react"

export default function Batsman(){
    const [runs,setRuns]= useState(0)
    const [sixes,setSixes]= useState(0)
    const [fours,setFours]=useState(0)
    runs >= 50 ? alert("you got a HalfCentury") : null
    const handleSingle = () => {
        const one = runs + 1;
        setRuns(one);
    }
    const handleFour=()=>{
        const four = runs+4;
        const countFour = fours+1;
        setFours(countFour);
        setRuns(four);
    }
    const handleSix=()=>{
        const six = runs+6;
        const countSix = sixes+1;
        setSixes(countSix)
        setRuns(six);
    }
    return(
        <div className="counter">
            <h2>Bangladesh</h2>
            <h4>run:{runs}</h4>
            <p>six Count:{sixes}</p><p>Four Count:{fours}</p>
            <button onClick={handleSingle}>single</button>
            <button onClick={handleFour}>four</button>
            <button onClick={handleSix}>sixx</button>
        </div>
    )
}