import React from 'react'
import { BorderPaneProps } from '../../types/BorderPaneProps'


const BorderPane = ({ top = null, left = null, center = null, right = null, bottom = null }: BorderPaneProps) => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-auto justify-center items-center p-8'>{top}</div>
      <div className='flex flex-row items-start justify-between'>
        {left}
        {center}
        {right}
      </div>
      <div className='flex flex-auto justify-center items-center'>{bottom}</div>
    </div>
  )
}

export default BorderPane