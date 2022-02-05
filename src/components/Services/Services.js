import React from 'react';
import {Link} from 'react-router-dom'
import Gestion from './Gestion/Gestion';
import Informatique from './Informatique/Informatique';
import Marketing from './Marketing/Marketing';

export default function Services() {
  return <div>
      <h1>Nos services</h1>
      <nav>
          <Link to="/services/marketing" >Marketing</Link>
          <Link to="/services/gestion" >Gestion</Link>
          <Link to="/services/informatique" >Informatique</Link>
      </nav>
  </div>;
}
