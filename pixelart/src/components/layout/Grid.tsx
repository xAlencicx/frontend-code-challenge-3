import React from 'react'
import GRID_SIZE from '../../enums/GRID_SIZE'

type Props = {
  gridSizeSetting: GRID_SIZE
  children: React.ReactNode[]
}


const Grid = ({ children, gridSizeSetting: gridSize }: Props) => {
  return (
    <div
   
      style={{
        backgroundColor: 'black',
        border: '1px solid black',
        display: "grid",
        gap: 1,
        gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
        gridTemplateRows: `repeat(${gridSize}, 1fr)`,
      }}>
      {children}
    </div>
  );
}

export default Grid