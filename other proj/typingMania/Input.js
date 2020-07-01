import React from "react";

function Input(props) {
    return (
        <input type="text" value={props.input} onChange={(e) => props.updateInput(e.target.value) }/>
    )
}

export default Input