import React from 'react';
import { AppBar, NavItem } from '../atoms';
import routes from '../mocks/routes';

const Navbar = () => (
  <AppBar>
    {routes.map(route => (
      <NavItem key={route.path} to={route.path} exact activeClassName="active-nav-item">
        {route.name}
      </NavItem>
    ))}
  </AppBar>
);

export default Navbar;
