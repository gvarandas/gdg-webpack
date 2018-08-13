import React, { Fragment } from 'react';
import { render } from 'react-dom';

import Nav from './nav';
import UpperContainer from './UpperContainer';
import BottomContainer from './BottomContainer';

import './styles.css';

console.log('Index module loaded');

const Index = () => (
  <Fragment>
    <Nav title="NavTitle" />
    <UpperContainer />
    <BottomContainer />
  </Fragment>
);

render(<Index />, document.getElementById('root'));
