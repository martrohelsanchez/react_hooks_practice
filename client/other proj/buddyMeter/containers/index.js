import React, { useState } from "react";
import Question from "./Question";
import NavBtn from "./NavBtn";
import Options from "./Options";
import { useSelector } from "react-redux";

function BuddyMeter() {
    const [editing, setEditing] = useState(true);
    const quesNum = useSelector(state => state.quesNum);

    return(
        <div>
            <span>
                {quesNum}
            </span><br/>
            <Question 
                editing={editing} 
                quesNum={quesNum}
            /><br/><br/>
            <Options 
                quesNum={quesNum}
                editing={editing}
            /><br/>
            <button>
                Done
            </button><br/><br/>
            <NavBtn 
                quesNum={quesNum}
                editing={editing}
            />
        </div>
    )
}

export default BuddyMeter;