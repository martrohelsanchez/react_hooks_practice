import React, { useState } from 'react';
import {Route, Switch, Link, NavLink, Redirect} from 'react-router-dom';

import styles from '../styles.css';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Shop from './components/Shop';
import Home from './components/Home';
import Account from './components/Account';

function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
      <div>
        <ul>
          <li>
            <NavLink to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop" activeClassName="active">
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/Account" activeClassName="active">
              Account
            </NavLink>
          </li>
          <li>
              <NavLink to='/logIn' activeClassName='active'>
                  LogIn
              </NavLink>
          </li>
          <li>
              <NavLink to='/signUp' activeClassName='active'>
                  SignUp
              </NavLink>
          </li>
        </ul>

        <Switch>
          <Route path="/signUp">
            <SignUp setLoggedIn={setLoggedIn} />
          </Route>
          <Route path="/logIn">
            <LogIn setLoggedIn={setLoggedIn} />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path='/account' loggedIn={loggedIn}>
            <Redirect to='/' />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    );
}

export default App;