import React from "react";
import {useDispatch} from "react-redux";
import { changeQues } from "../redux/actions/quesNumAction"

function NavBtn(props) {
    const dispatch = useDispatch();

    const back = (
        <button onClick={() => dispatch(changeQues(props.quesNum - 1))}>
            Back
        </button>
    )

    const next = (
        <button onClick={() => dispatch(changeQues(props.quesNum + 1))}>
            Next
        </button>
    )

    return (
        <div>
            {props.quesNum > 1 ? back : null}
            {next}
        </div>
    )
}

export default NavBtn;