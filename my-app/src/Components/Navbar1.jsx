import React from "react"

export default function Navbar(props){
    return <nav className="nav">
        <a href="/" className="site-title">{props.bar}</a>
        <ul>
            <li>
                <a href="/Today" className="links">Articles</a>
            </li>
             <li>
                <a href="/Radar" className="links">Login</a>
            </li>
            <a href="/Radar" className="links">About</a>
            <li>
            </li>
            <a href="/Radar" className="links">Help</a>
        </ul>
    </nav>
}
