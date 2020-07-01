import React from "react"

function useOptions(newState) {
    const [options, setOptions] = useState(newState);

    return [options, setOptions];
}

export default useOptions;