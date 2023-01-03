import React from "react"

export default function Navbar(props){
    return <nav className="nav">
        <a href="/" className="site-title">{props.bar}</a>
        <ul>
            <li>
                <a href="links" className="links">Articles</a>
            </li>
             <li>
                <a href="/" className="links">Sports</a>
            </li>
            <a href="/" className="links">Tech</a>
            <li>
            </li>
            <a href="/aboutMe" className="links">About Me</a>
        </ul>
    </nav>
}
