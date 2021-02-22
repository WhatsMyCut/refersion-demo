import React from 'react';

const ZipcodeSearch = (props) => {
  const { defaultZipcode, handleZipcodeChange } = props;
  return (
    <div>
      <input type="text" onChange={ handleZipcodeChange } placeholder={defaultZipcode} />
    </div>
  )
}
export default ZipcodeSearch;
