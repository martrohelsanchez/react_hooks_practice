import React, { useState, useContext } from 'react'

import {ContextOne} from '../App'

function Child1() {
    const contextOne = useContext(ContextOne);
    
    console.log('Child1')

    return (
        <div>
            <div>
                Child1: {contextOne}
            </div>
        </div>
    )
}

export default Child1