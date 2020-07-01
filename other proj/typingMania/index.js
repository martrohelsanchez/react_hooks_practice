import React, { useState } from "react"
import "./word.css";
import Word from "./Word";
import Input from "./Input";


function TypingMania() {
    const [round, setRound] = useState(1);
    const [input, setInput] = useState("");
    const [words, setWords] = useState(["zairadelacruz", "reactjs", "programming", "python"]);
    const word = words[round - 1];

    function check(input) {
        if (input === word) {
            setRound(round + 1)
            setInput("");
        }
    }

    function updateInput(input) {
        setInput(input);
        check(input)
    }

    return (
        <div>
            <Word 
                word={word}
                input={input}
                
            />
            <Input 
                updateInput={(input) => updateInput(input)}
                input={input}
            />
        </div>
    )
}

export default TypingMania