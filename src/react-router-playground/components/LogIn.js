import React from 'react';

function LogIn({setLoggedIn}) {
    function logIn() {
        setLoggedIn(true)
    }

    return (
      <div>
        <div>LogIn</div>
        <button onClick={logIn}></button>
      </div>
    );
}

export default LogIn;