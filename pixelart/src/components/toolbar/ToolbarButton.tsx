import React from 'react'
import { ColorToolbarItem, ToolbarItem } from '../../types/ToolbarItem'

type Props = {

    item : any
}

const ToolbarButton = ({item}: Props) => {
  return (
    <button onClick={item.onClick} style={{ backgroundColor: item.color }} className={`font-mono p-1 hover:opacity-80 rounded-md text-[0.6rem] !h-10 !w-10 sm:text-xs sm:!h-12 sm:!w-12 ${item.selected ? item.color == undefined ? "bg-gray-800 text-white" : "border-solid border-2 border-black" : "bg-gray-200"} `}>{item.color == undefined && item.name}</button>
  )
}

export default ToolbarButton