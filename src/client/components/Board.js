import React from 'react';
import BoardRow from './BoardRow';

const Board = ({ grid, onClick }) => {

  return (
    <div className='board'>
      {
        grid.map((row, i) => (
          <BoardRow onClick={onClick} rowIndex={i} row={row} key={i} />
        ))
      }
    </div>
  )
}

export default Board;