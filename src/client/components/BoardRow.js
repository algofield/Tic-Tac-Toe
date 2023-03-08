import React from 'react';

const BoardRow = ({ row, rowIndex, onClick }) => {

  return (
    <React.Fragment>
      {
        row.map((value, colIndex) => (
          <div onClick={() => onClick([rowIndex, colIndex])} className="square" key={colIndex}>{value}</div>
        ))
      }
    </React.Fragment>
  )
}

export default BoardRow;