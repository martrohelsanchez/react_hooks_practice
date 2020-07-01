import React from 'react';

function SignUp({setLoggedIn}) {
    function logIn() {
        setLoggedIn(true)
    }

    return (
      <div>
        <div>
            SignUp
        </div>
        <button onClick={logIn}>Sign Up</button>
      </div>
    );
}

export default SignUp;