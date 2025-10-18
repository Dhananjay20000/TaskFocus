import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div>
      <nav>
      <ul>
        {/* <a href='url'>Home</a> */}
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
    </div>
  )
}