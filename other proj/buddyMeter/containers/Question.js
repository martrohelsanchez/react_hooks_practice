import React, { useState, useContext} from "react";

function Question(props) {
    const [ques, setQues] = useState(["Rohel's dream instrument", "second", "third"]);

    function handleChange(e) {
        const updateQues = ques.splice(0);
        updateQues[props.quesNum - 1] = e.target.value;
        setQues(updateQues);
    }

    function answering() {
        return null;
    }

    function editing() {
        const current = ques[props.quesNum - 1];
        return <input type="text" value={current} onChange={(e) => handleChange(e)} />
    }

    return (
        props.editing ? editing() : answering()
    )
}

export default Question;