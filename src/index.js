import React, { Fragment } from 'react';
import { render } from 'react-dom';

// Static imports
import './styles.css';
import Nav from './nav';

// Dynamic imports
import('./Page1');
import('./Page2');

console.log('Index module loaded');

const Index = () => (
  <Fragment>
    <Nav title="NavTitle" />
  </Fragment>
);

render(<Index />, document.getElementById('root'));
