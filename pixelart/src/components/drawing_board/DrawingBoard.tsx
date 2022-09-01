import React, { useCallback, useLayoutEffect, useState } from 'react'
import DIRECTION from '../../enums/DIRECTION';
import EXPORT_AS from '../../enums/EXPORT_AS';
import GRID_SIZE from '../../enums/GRID_SIZE';
import RESOLUTION from '../../enums/RESOLUTION';
import FillToolSetting from '../../models/FillToolSetting';
import { TileInfo } from '../../types/TileInfo';
import { ToolbarItem } from '../../types/ToolbarItem';
import Column from '../layout/Column';
import Toolbar from '../toolbar/Toolbar';
import Grid from '../layout/Grid';
import Tile from './Tile';
import CanvasToImage from './tools/CanvasToImage';
import useFillTool from '../../hooks/UseFillTool';
import useToolbar from '../../hooks/UseToolbar';
import Row from '../layout/Row';
import FILL_TOOL from '../../enums/FILL_TOOL';
// ## 1. Objective

// The goal is to implement an application for creating Pixel Arts. The task is divided into the following sub-tasks / functions.

// 1. Base grid 8x8 rendering √
// 2. Possibility of choosing colors from a palette √
// 3. Grid size can be chosen
//    - 8x8 √
//    - 12x12 √ 
//    - 16x16 √
//    - 32x32 √
// 4. Download option (JPG / PNG / GIF)
// 5. Paint bucket / fill tool
//    - Fills in neighboring pixels whose color value corresponds to the pixels you click on √


const DrawingBoard = () => {

  //grid will orient itself on this size. tiles will be this size / tile count
  const size = (Math.max(window.innerWidth / 2, window.innerHeight) / 2);

  //tiles to render on the grid
  const [tiles, setTiles] = React.useState<TileInfo[]>([]);

  const [gridSizeSetting, setGridSizeSetting] = useState(GRID_SIZE.EIGHT_BY_EIGHT);
  const [fillToolSetting, setFillToolSetting] = useState<FillToolSetting>({ fillTool: FILL_TOOL.PEN, color: "white" });

  const { initGridSizeToolbarItems, initFillToolToolbarItems, initColorToolbarItems } = useToolbar();
  const [resolutionSetting, setResolutionSetting] = useState<RESOLUTION>(RESOLUTION.DPI_150);

  //initialize new filltool which will handle the fill tool logic such as bucket fill, finding neighboring tiles
  const { fillTool } = useFillTool(tiles, setTiles);

  const { initResolutionToolbarItems, initExportToolbarItems } = useToolbar();

  //init tiles before render
  useLayoutEffect(() => {
    setTiles(Array(gridSizeSetting * gridSizeSetting).fill(0).map((_, i) => {
      const tileSize = size / gridSizeSetting
      const tileInfo = {
        index: i,
        x: i % gridSizeSetting,
        y: Math.floor(i / gridSizeSetting),
        column: i % gridSizeSetting * tileSize,
        row: Math.floor(i / gridSizeSetting) * tileSize,
        width: tileSize,
        height: tileSize,
        color: "white",

      }
      return tileInfo
    }));

  }, [gridSizeSetting])

  const onClickedTileCallback = useCallback((e: React.MouseEvent) => {

    const tileInfo = JSON.parse((e.target as HTMLDivElement).dataset['tileInfo'] as string) as TileInfo;

    fillTool.fillTiles(tileInfo, fillToolSetting);

  }, [tiles, fillToolSetting])


  const onExportClicked = useCallback((exportAs: EXPORT_AS) => {
    const canvasToImage = new CanvasToImage()
    canvasToImage.exportCanvas(tiles, {
      fileName: `pixelart`,
      exportAs: exportAs,
      width: size,
      height: size,
      resolution: resolutionSetting,
    })
  }, [tiles, resolutionSetting])



  return (
    <Column>


      <Row>
        <Toolbar title={"Grid Size"} toolbarItems={initGridSizeToolbarItems(gridSizeSetting, setGridSizeSetting)} />
        <Toolbar title={"Fill Tool"} toolbarItems={initFillToolToolbarItems(fillToolSetting, setFillToolSetting)} />
      </Row>
      <Toolbar toolbarItems={initColorToolbarItems(fillToolSetting, setFillToolSetting)} />
      <Grid gridSizeSetting={gridSizeSetting}>
        {tiles.map(tileInfo => <Tile key={tileInfo.index} tileInfo={tileInfo} onClick={onClickedTileCallback} />)}
      </Grid>


      <Row>
        <Toolbar title={"Output Resolution [DPI]"} toolbarItems={initResolutionToolbarItems(resolutionSetting, setResolutionSetting)} />
        <Toolbar title={"Export"} toolbarItems={initExportToolbarItems(onExportClicked)} />
      </Row>
    </Column>
  )
}

export default DrawingBoard