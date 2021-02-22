import React from 'react';

const Button = (props) => {
  const { handleClick, buttonText } = props;
  return (
    <>
    <input type="button" value={buttonText} onClick={handleClick} />
    </>
  )

}
export default Button;
