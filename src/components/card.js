import React from "react";
import "../index.css"
import { ImLocation } from "react-icons/im";


export default function Card(props){
    return(
        <div className="card">
            <img className="card--image"src={ props.card.img } alt="Travel photo"></img>
            <div className="div--inner">
                <div className="div--inner--top">
                    <ImLocation className="div--inner--top_loc" />
                    <a className="div--inner--top_link" href="">View on Google Maps</a>
                </div>
                <h1 className="div--inner_title">{ props.card.name }</h1>
                <h6 className="div--inner_date">{ props.card.date }</h6>
                <p className="div--inner_desc">{ props.card.description }</p>
            </div>
        </div>
    )
}