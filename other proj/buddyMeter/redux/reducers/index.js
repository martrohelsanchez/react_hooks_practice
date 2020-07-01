import { combineReducers } from "redux";
import options from "./optionsReducer";
import quesNum from "./quesNumReducer";
import editing from "./editingReducer.js";

const reducers = combineReducers({
    options,
    editing,
    quesNum
})

export default reducers;