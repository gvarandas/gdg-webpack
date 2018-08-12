import React from 'react';
import { render } from 'react-dom';

import Nav from './nav';
import Button from './button';

import './styles.css';

const Index = () => (
  <React.Fragment>
    <Nav title="NavTitle" />
    <Button buttonName="Confirmar" />
  </React.Fragment>
);

render(<Index />, document.body);
