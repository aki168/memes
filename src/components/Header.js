import React from "react";

export default function Header() {
    return (
        <nav className="nav">
            <h1 className="nav--logoZone">
                <img className="logoZone--logo" src="images/JD-16-512.webp" alt="logo" />
                <h2 className="logoZone--title" href="">迷因圖產生器</h2>
            </h1>
            <h3 className="nav--text">React - Project by AKI</h3>  
        </nav>
    )
}