import React, { ReactNode } from 'react'



type Props = {
  children : ReactNode
}

const Center = (props: Props) => {
  return (
    <div className='flex justify-center items-center w-full h-full'>
        {props.children}
    </div>
  )
}



export default Center