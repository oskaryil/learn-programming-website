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
            const routeActive = props.location.pathname === props.match.path;
            const Component = route.component;

            return <Component {...props} routeActive={routeActive} />;
          }}
        />
      ))}
    </Switch>
  </>
);

export default withRouter(RoutingProvider);
