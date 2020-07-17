import React from "react";
import useDragRetract from "../../customHooks/useDragRetract";
import style from "./Board.module.css";

function Cards({ cards }) {
    return cards.map(card =>
        <Card 
            // key={card}
            card={card} 
            key={card}    
        />
    )
}

function Card({ card }) {
    const [position, onMouseDown] = useDragRetract();

    return (
        <div
            className={style.cardTitle}
            onMouseDown={e => onMouseDown(e)}
            style={{ transform: `translate(${position.transformX}px, ${position.transformY}px)` }}
        >
            {card}
        </div>
    )
}

export default Cards