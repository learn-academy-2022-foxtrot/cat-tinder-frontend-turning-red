import React from "react"
import logo from "../assets/logo-red.png"
import catsImage from "../assets/cats-image.png"

const Header = () => {

    return(
        <div>
            <nav class="header">
            <img id = "item" src={logo} alt="logo" height="200px" />

            <ul class="nav justify-content-center" id = "item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
                <a class="nav-link" href="/catedit">Cat Edit</a>
                <a class="nav-link" href="/catindex">Cat Index</a>
                <a class="nav-link" href="/catnew" >Cat New</a>
                <a class="nav-link" href="/catshow" >Cat Show</a>
            </ul>
            <img id = "item" src={catsImage} alt="cats" height="200px" />

            </nav>
        </div>
    )
}

export default Header