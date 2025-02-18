import React, { useState } from 'react';

function Avatar({ src, alt }) {
  return (
    <div className='avatar'>
      <a href={src} target='_blank'>
      <img src={src} alt={alt} />
      </a>
    </div>
  );
}

export default Avatar;