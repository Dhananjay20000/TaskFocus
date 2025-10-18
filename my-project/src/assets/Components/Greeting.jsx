export function Greeting(props) {
    let greet = "Good Morning";
    return(
        <>
        <h2>Hello{props.fname}</h2>
        <h2>Age is{props.age}</h2>
        </>
    )
}