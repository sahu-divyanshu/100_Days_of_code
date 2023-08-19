import React from "react";
import "./Card.css";
export const Card =(
    
)=>{
    return <div className="card-container">
        <img src="https://picsum.photos/300/200" alt="CardImage" className="card-img"/>
        <h1 className="card-title">Card Title</h1>
        <p className="card-desc">This is card description. the details about this card is present here </p>
        <a href="cardPage"  className="card-btn">Learn More</a>
    </div>
}