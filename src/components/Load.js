import React from 'react';

function Load({load, text}) {
  return (
    <button onClick={() => load()}>{text}</button>
  );
}

export default Load;
