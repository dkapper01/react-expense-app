import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h2>Expensify</h2>
    <NavLink to="/" activeClassName="is-active" exact={true}>
      Home
    </NavLink>
    <NavLink to="/create" activeClassName="is-active" exact={true}>
      Create
    </NavLink>
    <NavLink activeClassName="is-active" to="/edit" exact={true}>
      Edit
    </NavLink>
    <NavLink activeClassName="is-active" to="/help" exact={true}>
      Help
    </NavLink>
  </header>
);

export default Header; 
