import React from 'react';
import {Route, useHistory, useRouteMatch, useParams, NavLink} from 'react-router-dom';

import styles from "../../styles.css";
import Products from './Products';

function Shop() {
    const match = useRouteMatch();
    const params = useParams();
    const history = useHistory();
    console.log(match)

    function handleRedirect() {
        history.push('/testing')
    }

    return (
      <div>
        <div>Shop</div>
        <button onClick={handleRedirect}>click meh</button>

        <ul>
          <li>
            <NavLink to={`${match.url}/ps5`} activeClassName="active">
              PS5
            </NavLink>
          </li>
          <li>
            <NavLink to={`${match.url}/ryzen`} activeClassName="active">
              Ryzen
            </NavLink>
          </li>
        </ul>

        <Route path={`${match.url}/:products`}>
          <Products />
        </Route>
      </div>
    );
}

export default Shop