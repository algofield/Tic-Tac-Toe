import React from 'react';

const BoardRow = ({ row, rowIndex, onClick }) => {

  return (
    <React.Fragment>
      {
        row.map((n, i) => (
          <div onClick={() => onClick([rowIndex, i])} class="square" key={i}>{n}</div>
        ))
      }
    </React.Fragment>
  )
}

export default BoardRow;