import React, { useState } from 'react';
import '../styles/style.css';
import Board from './Board';
const App = (props) => {

  const X_VALUE = 'X';
  const O_VALUE = 'O';
  let [grid, setGrid] = useState(Array.from({ length: 3 }, (_, i) => Array.from({ length: 3 }, (_, k) => '')))
  let [xIsUp, setXIsUp] = useState(true);
  let [history, setHistory] = useState([Array.from({ length: 3 }, (_, i) => Array.from({ length: 3 }, (_, k) => ''))])
  
  const clickHandler = ([rowIndex, colIndex] = coordinate) => {
    console.log([rowIndex, colIndex]);
    let gridSlice = [grid[0].slice(), grid[1].slice(), grid[2].slice()];
    if (!gridSlice[rowIndex][colIndex]) {
      gridSlice[rowIndex][colIndex] = xIsUp ? X_VALUE : O_VALUE;
      let hist = history.slice();
      hist.push(gridSlice);
      setGrid(gridSlice);
      setXIsUp(!xIsUp);
      setHistory(hist);
      console.log(hist);
    }
  };
  const clickHistory = (e) => {
    if (history.length > 1) {
      let hist = history.slice();
      hist.pop();
      const lastMove = hist[hist.length - 1];
      setGrid(lastMove);
      setHistory(hist);
      setXIsUp(!xIsUp);
    }
  };
  const clickNew = (e) => {
    setXIsUp(true);
    setGrid(Array.from({ length: 3 }, (_, i) => Array.from({ length: 3 }, (_, k) => '')));
    setHistory([Array.from({ length: 3 }, (_, i) => Array.from({ length: 3 }, (_, k) => ''))]);
  };

  return (
    <div className="page-container">
      <div className="container">
        <div className="sub-container">
          <h1 className='page-title'><span className="page-title blue-text">Tic</span> Tac <span className="page-title brown-text">Toe</span></h1>
          <div className="btn-container">
            <button className="btn" onClick={(e) => clickNew(e)}>New</button>
            <button className="btn" onClick={(e) => clickHistory(e)}>Undo</button>
          </div>
        </div>
        <Board onClick={clickHandler} grid={grid} />
      </div>
    </div>
  )
}

export default App;