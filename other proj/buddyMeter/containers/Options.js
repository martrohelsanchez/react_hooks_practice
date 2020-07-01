import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {handleChange} from "../redux/actions/optionsAction";

function Options(props) {
    const options = useSelector(state => state.options)
    const dispatch = useDispatch();
    const [ans, setAns] = useState([[0]]);
    const index = props.quesNum - 1;
    console.log(options);

    function removeOption(e) {
        let opt = options.slice(0);
        opt[props.quesNum - 1].splice(e.target.id, 1);
        // setOptions(opt);
    }

    function createOptions() {
        // let opt = options.slice(0);
        // opt.push(["Option 1", "Option 2", "Option 3", "Option 4"]);
        // setOptions(opt);
        // console.log("createOptions: " + options);
        options.push(["Option 1", "Option 2", "Option 3", "Option 4"]); // Avoid rerender 
    }

    // function handleChange(e) {
    //     if (e.target.name == "options") { 
    //         let newOpt = options.slice(0);
    //         newOpt[index][e.target.id] = e.target.value;
    //         // setOptions(newOpt);
    //     }
    //     let newAns = ans.splice(0);
    //     newAns[index] = e.target.id;
    //     setAns(newAns);
    // }

    function editing() {
        const hasNoOptions = options[props.quesNum - 1] == undefined;
        if (hasNoOptions) { //determine first if the options exist for the question number
            createOptions();
        }
        console.log("options: " + options)
        const current = options[props.quesNum - 1];
        const renderOptions = current.map((val, i, arr) => {
            return (
                <div>
                    <label>
                        <input
                            type="radio"
                            name="ans"
                            id={i}
                            onChange={(e) => handleChange(e)}
                            checked={ans[props.quesNum - 1] == i}
                        />
                        <input
                            type="text"
                            name="options"
                            value={val}
                            id={i}
                            onChange={(e) => dispatch(handleChange(e.target.value, props.quesNum, i))}
                        />
                    </label>
                    <button id={i} onClick={(e) => removeOption(e)}>X</button>
                </div>
            )
        });
        return renderOptions;
    }

    return (
        <div>
            {props.editing && editing()}
        </div>
    )
}

export default Options;