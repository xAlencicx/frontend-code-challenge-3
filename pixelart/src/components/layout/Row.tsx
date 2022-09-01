import React from 'react'

type Props = {
    children : React.ReactNode[]
}

const Row = ({children}: Props)  => {
  return (
    <div className='flex flex-row justify-between w-full flex-wrap'>
        {
            children
        }
    </div>
  )
}

export default Row