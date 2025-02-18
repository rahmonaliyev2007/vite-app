import React from 'react'

function Greating({name}) {
  return (
    <h2>Hello , {name ? name : 'Guest'} 🙋‍♂️</h2>
  )
}

export default Greating