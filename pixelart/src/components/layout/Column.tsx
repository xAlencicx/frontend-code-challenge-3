import React, { Children } from 'react'

type Props = {
    children: React.ReactNode[]
}

const Column = ({ children }: Props) => {
    return (
        <div className='flex flex-col justify-center items-center gap-y-4'>
            {
                children
            }
        </div>
    )
}

export default Column