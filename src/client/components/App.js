import React, { useState } from 'react';
import '../styles/style.css';
import Board from './Board';
const App = (props) => {

  let [count, setCount] = useState(0);
  const X_VALUE = 'X';
  const O_VALUE = 'O';
  let [grid, setGrid] = useState(Array.from({ length: 3 }, (_, i) => Array.from({ length: 3 }, (_, k) => '')))
  let [xIsUp, setXIsUp] = useState(true);
  

  const clickHandler = (coordinate) => {
    console.log(coordinate);
    const [rowIndex, colIndex] = coordinate;
    grid[rowIndex][colIndex] = xIsUp ? X_VALUE : O_VALUE;
    setGrid(grid);
    setXIsUp(!xIsUp);
  }
  return (
    <div className="page-container">
      <div className="container">
        <div className="sub-container">
          <h1 className='page-title'><span className="page-title blue-text">Tic</span> Tac <span className="page-title brown-text">Toe</span></h1>
          <div className="btn-container">
            <button className="btn">Start</button>
          </div>
        </div>
        <Board onClick={clickHandler} grid={grid} />
      </div>
    </div>
  )
}

export default App;