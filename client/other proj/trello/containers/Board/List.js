import React, { useState } from "react";
import style from "./Board.module.css";
import useDragRetract from "../../customHooks/useDragRetract";
import Cards from "./Cards";

function List({title, listsPosition, rearrangeList, index}) {
    const [showAddCard, setShowAddCard] = useState(false);
    const [cards, setCards] = useState(["first", "second", "third"]);
    const [input, setInput] = useState("");
    const [position, onMouseDown] = useDragRetract();

    if (position.isDragging) {
        for (let i in listsPosition) {
            const insideListX = position.clientX > listsPosition[i].x && position.clientX < listsPosition[i].x + listsPosition[i].width;
            const insideListY = position.clientY > listsPosition[i].y && position.clientY < listsPosition[i].y + listsPosition[i].height;
            if (insideListX && insideListY && i != index) {
                rearrangeList(index, i)
            }
        }
    }

    function addCard(key) {
        if (input) { //if input is empty, don't add a new card
            if (key === "Enter") { //if user pressed enter to add a card
                setCards([...cards, input]);
                setInput("");
            }
        }
    }

    function cancelAddingCard() {
        setShowAddCard(false)
        setInput("") 
    }

    return (
    <div>
        <div 
            className={"list"} 
            style={{ transform: `translate(${position.transformX}px, ${position.transformY}px)`}}
        >
            <div className={style.draggingTarget} onMouseDown={e => onMouseDown(e, listsPosition[index])}>
                {title}
            </div>
            <div className={style.cards}>
                <Cards cards={cards} />
                {
                    showAddCard ?
                        <div>
                            <textarea 
                                type="text" 
                                placeholder="enter a title for this card"
                                value={input} 
                                onChange={e => setInput(e.target.value)} 
                                onKeyDown={e => addCard(e.key)}
                            /><br/>
                            <button onClick={e => addCard(e.key)}>{"Add Card"}</button>
                            <button onClick={e => cancelAddingCard()}>{"X"}</button>
                        </div>
                        :
                        <button className={style.addAnotherCard} onClick={e => setShowAddCard(true)}>
                            {"add a card"}
                        </button>
                }
            </div>
        </div>
    </div>
    )
}

export default List;