import React from 'react';

console.log('Button module loaded');

/**
 * 
 * @param {string} buttonName
 * @returns {Element}
 */
const Button = ({ buttonName }) => (
  <button>{`Button: ${buttonName}`}</button>
);

export default Button;