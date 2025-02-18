import { RotateCcw, SendHorizontal } from 'lucide-react'
import React from 'react'

function IconButton({type, icon}) {
  return (
    <button type={type} > {icon === 'reset' ? <RotateCcw /> : <SendHorizontal />} </button>
  )
}

export default IconButton