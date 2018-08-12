import React from 'react';

/**
 * 
 * @param {string} buttonName
 * @returns {Element}
 */
const Button = ({ buttonName }) => (
  <button>{`Button: ${buttonName}`}</button>
);

export default Button;