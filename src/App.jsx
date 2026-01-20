import './App.css'
import Counter from './counter';
import Batsman from './batsman';

function App() {
function handleClick(){
  alert("i clicked now")
}
const handleArrow=(num)=>{
  alert(num+7);
}

  return (
    <>
    
      <h1>Vite + React</h1>
      <button onClick={handleClick}>clicked</button>
      <button onClick={()=>handleArrow(7)}>click 2</button>
      <Counter></Counter>
      <Batsman></Batsman>
    </>
  )
}

export default App
