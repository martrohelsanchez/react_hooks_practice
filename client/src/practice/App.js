import React, {  useEffect, useState, useRef } from 'react';

import Testing from './components/Testing';
import Child1 from './components/Child1';
import Child2 from './components/Child2';

export const ContextOne = React.createContext('initial contexOne value');

function App(props) {
    const [count, setCount] = useState(0);
    let forCounter = 0;

    function handleClick() {
        setCunt(prev => prev + 1)
        console.log(count)
    }

    return (
        <>
            {count}<br />
            <button onClick={handleClick}>
                click meh
            </button>
            <ContextOne.Provider value={count}>
                <Child1 />
                <Child2 />
            </ContextOne.Provider>
        </>
    )
}

export default App;