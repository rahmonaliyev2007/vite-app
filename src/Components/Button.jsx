import React from 'react';

function Button({ alertTXT, showAlert }) {
  return (
    <button onClick={() => showAlert(alertTXT)}>Show Alert</button>
  );
}

export default Button;