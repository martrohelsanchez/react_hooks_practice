const initialOptionsState = [["guitar", "piano", "violin", "drums"]];

function options(state = initialOptionsState, action) {
    switch (action.type) {
        case "handleChange": 
            let newState = state;
            newState[action.quesIndex][action.opIndex] = action.input;
            return newState;
        default:
            return state;
    }
}

export default options;
