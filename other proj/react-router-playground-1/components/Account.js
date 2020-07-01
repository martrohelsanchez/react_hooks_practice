import React from 'react';
import { useHistory } from 'react-router-dom';

function Account({loggedIn}) {
    const history = useHistory();

    if (!loggedIn) {
        history.push('/') 
    }

    return (
        <div>
            Account
        </div>
    )
}

export default Account