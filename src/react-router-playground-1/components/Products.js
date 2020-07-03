import React from 'react';
import {useParams, Switch, Route, useRouteMatch, useLocation} from 'react-router-dom';

function Products() {
    const match = useRouteMatch();
    const params = useParams();
    const location = useLocation();
    console.log('match ', match);
    console.log('Location ', location)
    console.log('params ', params);
    console.log('')

    return (
      <div>
        <div>Product:</div>
        <Switch>
          <Route exact path={`/shop/ps5`}>
            PS5
          </Route>
          <Route exact path={`/shop/ryzen`}>
            Ryzen
          </Route>
        </Switch>
      </div>
    );
    sadfas
}

export default Products