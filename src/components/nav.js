import React from "react";
import { FaGlobeAfrica } from "react-icons/fa";
import "../index.css"

export default function Nav(){
    return(
        <div className="nav">
            <FaGlobeAfrica className="nav--globe"/>
            <h6 className="nav--title">My travel journal.</h6>
        </div>   
    )
}