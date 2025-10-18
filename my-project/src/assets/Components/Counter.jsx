import { useEffect, useState } from 'react'

export default function Counter() {
    let name = "Gamana";
    let [count, setCount] = useState[0];
    const inc = () => { setCount(count = count + 1); }
    useEffect(()=> console.log("you clicked"));
    return (
        <div>
        <h1>This is count : {count} {name}</h1>
        <button onClick={inc}>increment</button>
        </div>
    )
}