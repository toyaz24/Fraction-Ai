import React from "react"
import Navbar from "../Navbar/Navbar"
import HeroBanner from "../HeroBanner/HeroBanner"
import "./header.css"

export default function Header(){
    return(
        <>
        <div className="header-conatiner">
            <div className="header-subcontent-conatienr">
            <Navbar/>
            <HeroBanner/>
            </div>
        </div>
        </>
    )
}