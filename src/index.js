import makeButton from './button';
import makeNav from './nav';

import './styles.css';

console.log('Index module loaded');

const nav = makeNav('Nav Title');
const button = makeButton('Button 1');
document.body.appendChild(nav);
document.body.appendChild(button);