import React from 'react'

function StatusMessage({isSuccess}) {
  return (
    <h2 style={isSuccess ? {color: "green"} : {color: "red"}}>{isSuccess ? 'Success!' : 'Error!'}</h2>
  )
}

export default StatusMessage