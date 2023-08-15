import React from 'react'

function Cell({ id, cell }) {

  const handleClick=()=> {
    
  }
    return (
    <div className="square" id={id} onClick = {handleClick}></div>
    )
  }

export default Cell