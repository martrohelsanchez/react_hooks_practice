function quesNum(state = 1, action) {
    switch(action.type) {
        case "changeQues":
            return action.updateQues
        default:
            return state
    }
}

export default quesNum;