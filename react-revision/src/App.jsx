import {useEffect, useState } from 'react'
import Names from './Names'
import './App.css'

function App() {
  {/* Constant variable*/}
  // const name = "Anu";
  const [name, setName] = useState("Anu");
  const [count, setCount] = useState(0)

  //useEffect
  useEffect(() => {
    console.log("You have clicked on the button");
    setTimeout(() => setCount(count + 1) ,1000);
  }, [count]);

  return (
    <>
    <button onClick={ () => setCount((count)=> count + 1)}>
      count is {count}
      </button>
      
      <h1>Good Morning {name}</h1>
      <button onClick={() => setName("Dhananjay")}>Change Name</button>
      <Names name = {name} age="23"/>
        
        
    </>
  )
}

export default App;
