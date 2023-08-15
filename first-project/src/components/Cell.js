import React from 'react'

function Cell({ id, cell }) {
    return (
    <div className="square" id={id} > {cell}</div>
    )
  }

export default Cell