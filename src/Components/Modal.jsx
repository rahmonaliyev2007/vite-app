import React from 'react';

function Modal({ title, children, isOpen, setIsOpen }) {
  if (!isOpen) {
    return <button onClick={() => setIsOpen(true)}> Delete</button>;
  }

  return (
    <div className='modal'>
      <button onClick={() => setIsOpen(false)}>Close</button> 
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export default Modal;