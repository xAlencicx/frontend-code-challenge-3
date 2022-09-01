

import React, { ReactNode } from 'react'

type Props = {
  children : ReactNode
}

const Page = (props: Props) => {
  return (
    <div className='flex w-screen h-screen bg-gray-100'>
        {props.children}
    </div>
  )
}


export default Page