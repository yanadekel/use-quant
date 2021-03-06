import React from 'react';
import './button.css';

const STYLES = ['btn--primery', 'btn--outline','btn--secondry','btn--outline2'];
const SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide'];
const COLOR = ['primary', 'secondery', 'blue', 'red', 'yellow'];

export const Button = ({ children, type, onClick, buttonStyle, buttonSize, buttonColor }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[0];
  const checkButtonColor = STYLES.includes(buttonColor) ? buttonColor : COLOR;

  return (
    <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
      onClick={onClick} type={type}>{children}</button>
  )
}