import React from 'react';
import ListInstructions from './components/listInstructions';
import './App.css';
import Cell from './components/Cell';
import { useState } from 'react';

function App() {
  const[cells, setCells]= useState(["","","","","","","","","",])
  const[go,SetGo] = useState("circle")
  const[winningMessage, setWinningMessage] =useState(null)

  const message = "it is now "+ go + " 's go. "
  return (
    <div className="App">
      <h1 className="Title"> Tic Tac Toe Game</h1>
      <p>Tic Tac Toe, also known as "Noughts and Crosses," is a two-player game where 
        the objective is to be the first to get three of your own symbols in a row,
         either horizontally, vertically, or diagonally, on a 3x3 grid.</p>
         <div className="gameBoard">
        {cells.map((cell, index) =><Cell key={index} id={index} cell={cell} />
        )}
      </div> 
         <h2>Instructions</h2>
         <ListInstructions />

    </div>
  );
}

export default App;
