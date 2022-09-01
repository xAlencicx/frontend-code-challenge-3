import FillTool from "../components/drawing_board/tools/FillTool";
import { TileInfo } from "../types/TileInfo";

function useFillTool(tiles : TileInfo[], callback : (tiles:TileInfo[])=>void ){

//initialize new filltool which will handle the fill tool logic such as bucket fill, finding neighboring tiles
    const fillTool = new FillTool(tiles, callback);

    return {
        fillTool
    }
}

export default useFillTool;