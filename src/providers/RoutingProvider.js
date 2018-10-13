import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import routes from '../mocks/routes';

const RoutingProvider = () => (
  <>
    <Switch>
      {routes.map(route => (
        <Route
          exact
          key={route.name}
          path={route.path}
          render={props => {
            const Component = route.component;

            return <Component {...props} />;
          }}
        />
      ))}
    </Switch>
  </>
);

export default withRouter(RoutingProvider);
