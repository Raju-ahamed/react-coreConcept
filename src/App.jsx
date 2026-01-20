import './App.css'
import Counter from './counter';
import Batsman from './batsman';
import { Suspense } from 'react';
import User from './user';
import Friends from './friends';
import Posts from './posts';
import Balls from './bowlers'


// const fetchUser = fetch("https://jsonplaceholder.typicode.com/users")
//   .then(res=>res.json())
//   const fetchFriend =async()=>{
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     return res.json();
//   }
//   const fetchPost =async()=>{
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts")
//     return res.json();
//   }
function App() {
//   const allPost = fetchPost();
//   const friendMassage = fetchFriend();
// function handleClick(){
//   alert("i clicked now")
// }
// const handleArrow=(num)=>{
//   alert(num+7);
// }

  return (
    <>
    <Balls></Balls>
      {/* <Suspense fallback={<p></p>}>
    <Posts allPost={allPost}></Posts> */}
      {/* </Suspense> */}
      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <User fetchUser={fetchUser}></User>
      </Suspense> */}
      {/* <Suspense fallback={<p>here is my friends coming...</p>}>
        <Friends friendMassage={friendMassage}></Friends>
      </Suspense>
      <h1>Vite + React</h1>
      <button onClick={handleClick}>clicked</button>
      <button onClick={()=>handleArrow(7)}>click 2</button>
      <Counter></Counter>
      <Batsman></Batsman> */}



    </>
  )
}

export default App
