/* eslint-disable jsx-a11y/aria-role */
import React from 'react';

const Button = (props) => {
  const { handleSubmit, buttonText } = props;
  return (
    <>
    <input role="submit" type="button" value={buttonText} onClick={handleSubmit} />
    </>
  )

}
export default Button;
