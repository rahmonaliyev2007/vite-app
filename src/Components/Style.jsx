import React from 'react';

function Style({ color, width, height }) {
  return (
    <div 
      style={{
        width: width ? `${width}px` : "1px", 
        height: height ? `${height}px` : "1px", 
        backgroundColor: color ? `${color}` : "white",
        border: '1px solid white', borderRadius: "10px",
      }}
    > </div>
  );
}

export default Style;