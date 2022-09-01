import React from "react"
import { TileInfo } from "../../types/TileInfo"


type Props = {
  tileInfo : TileInfo
  onClick : (e:React.MouseEvent) => void
}

const Tile = ({tileInfo,onClick} : Props) => {
  return (
    <div className={`text-xl cursor-pointer`} onClick={onClick} style={{backgroundColor:tileInfo.color??"white", width:tileInfo.width,height:tileInfo.height}} data-tile-info={JSON.stringify(tileInfo)}></div>
  )
}

export default Tile