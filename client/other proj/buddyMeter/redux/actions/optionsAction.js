export function addOption(optionNum) {
  return {
    type: "addOption",
    optionNum,
  };
}

export function handleChange(input, ques, opIndex) {
    return {
        type: "handleChange",
        quesIndex: ques -1,
        opIndex,
        input
    }
}
