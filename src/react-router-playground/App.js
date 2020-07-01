import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';

import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Shop from './components/Shop';

function App() {
    return (
      <div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
              <Link to='/shop'>Shop</Link>
          </li>
          <li>
              <Link to='Account'>Account</Link>
          </li>
        </ul>

        <Switch>
          <Route exact to="/signUp">
            <SignUp />
          </Route>
          <Route exact to="/logIn">
            <LogIn />
          </Route>
        </Switch>
      </div>
    );
}

export default App;