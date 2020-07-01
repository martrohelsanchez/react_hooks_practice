function editing(state = false, action) {
    switch (action.type) {
        case "toggleEditing":
            return !state;
        default:
            return state;
    }
}

export default editing;