import React from 'react'

function Cell({ id, cell, setCells }) {

  const handleClick=(e)=> {
    const taken = e.target.firstChild.classList.contains("cicle")||
    e.target.firstChild.classList.contains("cross")
  }
    return (
    <div className="square" id={id} onClick = {handleClick}>
      <div className="cross"></div>
    </div>
    )
  }

export default Cell