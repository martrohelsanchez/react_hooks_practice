import React, { useState } from 'react';
import {Route, Switch, Link} from 'react-router-dom';

import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Shop from './components/Shop';

function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="Account">Account</Link>
          </li>
        </ul>

        <Switch>
          <Route exact to="/signUp">
            <SignUp setLoggedIn={setLoggedIn} />
          </Route>
          <Route exact to="/logIn">
            <LogIn setLoggedIn={setLoggedIn} />
          </Route>
          <Route exact to="/shop">
            <Shop />
          </Route>
        </Switch>
      </div>
    );
}

export default App;