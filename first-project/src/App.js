import React from 'react';
import ListInstructions from './components/listInstructions';
import './App.css';
import Cells from './components/Cells';
import { useState } from 'react';

function App() {
  const[cells, setCells]= useState(["","","","","","","","","",])
  return (
    <div className="App">
      <h1> Tic Tac Toe Game</h1>
      <p>Tic Tac Toe, also known as "Noughts and Crosses," is a two-player game where 
        the objective is to be the first to get three of your own symbols in a row,
         either horizontally, vertically, or diagonally, on a 3x3 grid.</p>
         <h2>Instructions</h2>
         <ListInstructions />
         <div className="gameBoard">
          {Cells.map((Cells,index) => <Cells key={index} />)}
         <Cells />
         </div>
        
    </div>
  );
}

export default App;
