import React from 'react';
import {Link} from 'react-router-dom';

export default function Navigation() {
  return <navbar>
      <Link to="/" > Accueil </Link>
      <Link to="/services" > Services </Link>
      <Link to="/profiles" > Profile </Link>
  </navbar>;
}
