import React from 'react'
import { ColorToolbarItem, ToolbarItem } from '../../types/ToolbarItem'

type Props = {
    key? : React.Key|null
    item : any
}

const ToolbarButton = ({item,key=null}: Props) => {
  return (
    <button onClick={item.onClick} style={{ backgroundColor: item.color }} key={key} className={`font-mono p-1 hover:opacity-80 rounded-md text-[0.6rem] !h-10 !w-10 sm:text-xs sm:!h-12 sm:!w-12 ${item.color == undefined && item.selected ? "bg-gray-800 text-white" : "bg-gray-200"} `}>{item.color == undefined && item.name}</button>
  )
}

export default ToolbarButton