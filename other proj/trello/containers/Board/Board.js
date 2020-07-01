import React, { useState, useEffect } from "react";
import style from "./Board.module.css";
import List from "./List"

function Board() {
    const [lists, setList] = useState(["to do", "doing", "done"]);
    const [input, setInput] = useState("");
    const [showListComposer, setShowListComposer] = useState(false);
    let listsElement;
    let listsPosition = [];
    const renderList = lists.map((list, i) => {
        return (
            <List 
                key={list}
                title={list} 
                index={i} 
                listsPosition={listsPosition}
                rearrangeList={rearrangeList}
            />
        )
    });
    
    useEffect(() => {
        listsElement = document.getElementsByClassName("list");
        for (let el of listsElement) {
            listsPosition.push(el.getBoundingClientRect());
        }
        // listsPosition = listsElement.map(el => {return el.getBoundingClientRect()});
    })

    function rearrangeList(index1, index2) {
        setList(lists.map((title, i) => {
            if (i == index1) {
                return lists[index2]
            }
            if (i == index2) {
                return lists[index1]
            }
            return title
        }))
    }

    function addList(key) {
        if (input) {
            if (key === "Enter") {
                setList(
                    [
                        ...lists, input
                    ]
                )
                setShowListComposer(false);
                setInput("");
            }
        }
    }
    console.log(renderList);
    
    return (
        <div className={style.board}>
            {renderList}
            <div>
                <div className={style.addList}>
                {
                    showListComposer ?
                        <div>
                            <input
                                type="text"
                                placeholder="Enter list title..."
                                value={input}
                                onChange={e => setInput(e.target.value)}
                                onKeyDown={e => addList(e.key)}
                            /><br />
                            <button onClick={e => addList("Enter")}>{"Add List"}</button>
                            <button onClick={e => setShowListComposer(false)}>{"X"}</button>
                        </div>
                    :
                        <button onClick={e => setShowListComposer(true)}>
                            {"add another list"}
                        </button>
                }
            </div>
            </div>
        </div>
    );
}

export default Board;