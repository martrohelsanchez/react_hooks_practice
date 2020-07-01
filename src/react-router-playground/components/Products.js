import React from 'react';
import {useParams, Switch, Route, useRouteMatch} from 'react-router-dom';

function Products() {
    const match = useRouteMatch();
    const params = useParams();
    console.log(match);
    console.log(params)

    return (
      <div>
        <div>Product:</div>
        <Switch>
          <Route exact path={`${match.}`}>
            PS5
          </Route>
          <Route exact path={`${match.url}`}>
            Ryzen
          </Route>
        </Switch>
      </div>
    );
}

export default Products