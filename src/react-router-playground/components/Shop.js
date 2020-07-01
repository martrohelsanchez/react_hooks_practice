import React from 'react';
import {Route, Switch, Link, useRouteMatch, useParams} from 'react-router-dom';

import Products from './Products';

function Shop() {
    const match = useRouteMatch();
    const params = useParams();
    console.log(match)

    return (
      <div>
        <div>Shop</div>

        <ul>
          <li>
            <Link to={`${match.url}/ps5`}>PS5</Link>
          </li>
          <li>
            <Link to={`${match.url}/ryzen`}>Ryzen</Link>
          </li>
        </ul>

        <Route path={`${match.url}/:products`}>
            <Products />
        </Route>
      </div>
    );
}

export default Shop