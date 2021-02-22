import React from 'react';

const ZipcodeSearch = (props) => {
  const { handleZipcodeChange } = props;
  return (
    <div>
      <input type="text" onChange={ handleZipcodeChange } />
    </div>
  )
}
export default ZipcodeSearch;
