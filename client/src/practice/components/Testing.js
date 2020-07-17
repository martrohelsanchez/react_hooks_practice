import React from 'react';

function Testing(props) {
    console.log(props.children)
    return props.children
}

Testing.defaultProps = {
    hello: 'hoy'
}

export default Testing