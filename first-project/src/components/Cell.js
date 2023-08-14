import React from 'react'

function Cell({ id, cellValue }) {
    return <div className="square" id={id}>{cellValue}</div>;
  }

export default Cell