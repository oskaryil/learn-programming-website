import React from 'react';
import { AppBar, NavItem } from '../atoms';
import routes from '../mocks/routes';

const Navbar = () => {
  // const routeIsActive = props.location.pathname === props.match.path;
  return (
    <AppBar>
      {routes.map(route => (
        <NavItem key={route.path} to={route.path}>
          {route.name}
        </NavItem>
      ))}
    </AppBar>
  );
};

export default Navbar;
