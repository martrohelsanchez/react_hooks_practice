import React from "react";

let lastHighlight = 0;

function Word({input, word}) {
    let highlighted;
    let unHighlighted;
    const inputIndex = input.length - 1;

    // if (input) {
    //     //if user starts to type
    //     if (input[inputIndex] === word[inputIndex] && inputIndex - lastHighlight == 1) { 
    //         lastHighlight = inputIndex;
    //         highlighted = word.slice(0, inputIndex + 1);
    //         unHighlighted = word.slice(inputIndex + 1);
    //     } else if ( inputIndex <= lastHighlight) {
    //         lastHighlight = inputIndex;
    //         highlighted = word.slice(0, lastHighlight + 1);
    //         unHighlighted = word.slice(lastHighlight + 1);
    //     }
    //     else {
    //         highlighted = word.slice(0, lastHighlight + 1);
    //         unHighlighted = word.slice(lastHighlight + 1);
    //     }
    // } else {
    //     //if the input field is blank
    //     lastHighlight = 0; //reset last hightlight pointer if there's no input 
    //     unHighlighted = word.slice(lastHighlight); //unhighlight all letter if there's no input
    // }

    const inputLetters = input.slice(0, inputIndex + 1);
    const wordLetters = word.slice(0, inputIndex + 1);

    if (input) {
        //user starts typing
        if (inputLetters === wordLetters) {
            lastHighlight = inputIndex;
            highlighted = word.slice(0, inputIndex + 1);
            unHighlighted = word.slice(inputIndex + 1);
        } else {
            highlighted = word.slice(0, lastHighlight + 1);
            unHighlighted = word.slice(lastHighlight + 1);
        }
    } else {
        lastHighlight = 0; //reset last hightlight pointer if there's no input 
        unHighlighted = word.slice(lastHighlight); //unhighlight all letter if there's no input
    }


    return (
        <div class="word" >
            <span class="highlighted">{highlighted}</span>
            <span class="unHighlighted">{unHighlighted}</span>
            <div>output: {input}</div>
        </div>
    )
}



export default Word;