import FILL_TOOL from "../../../enums/FILL_TOOL";
import FillToolSetting from "../../../models/FillToolSetting";
import { TileInfo } from "../../../types/TileInfo";

export default class FillTool {

  private onTilesFilledCallback: (tiles: TileInfo[]) => void;
  private tiles: TileInfo[] = [];
  constructor(tiles: TileInfo[], onTilesFilledCallback: (tiles: TileInfo[]) => void) {
    this.onTilesFilledCallback = onTilesFilledCallback;
    this.tiles = tiles;
  }

  fillTiles(selectedTile: TileInfo, fillToolSetting: FillToolSetting) {

    console.log("fillTiles", selectedTile, fillToolSetting);


    switch (fillToolSetting.fillTool) {
      case FILL_TOOL.PEN:
        this.updateTileColor([selectedTile], fillToolSetting.color);
        break;
      case FILL_TOOL.FILL:
        //cache for base case. if a tile was already checked, due to being the neighboring tile of another tile, don't recheck it.
        const tilesCache: TileInfo[] = []
        //these are the tiles to be filled which match the background color of the clicked tile
        const neighboringTiles = this.findNeighboringTiles(selectedTile, tilesCache)
        //fill the tiles with selected color
        this.updateTileColor(neighboringTiles, fillToolSetting.color);

        break;
      case FILL_TOOL.ERASE:
        this.updateTileColor([selectedTile], "white");
        break;
      case FILL_TOOL.CLEAR:
        this.updateTileColor(this.tiles, "white");
        break;
    }


    this.onTilesFilledCallback([...this.tiles]);
     
  }

  private updateTileColor(tilesToUpdate: TileInfo[], color: string) {
    tilesToUpdate.forEach(tileInfo => {
      this.tiles[tileInfo.index] = { ...tileInfo, color: color }
    })

    console.log("filled %i tiles",tilesToUpdate.length);
  }

  private findNeighboringTiles(tileInfo: TileInfo, tilesCache: TileInfo[]): TileInfo[] {


    const neighboringTiles: TileInfo[] = []
    const leftTile = this.tiles.find(t => t.x === tileInfo.x - 1 && t.y === tileInfo.y);
    const rightTile = this.tiles.find(t => t.x === tileInfo.x + 1 && t.y === tileInfo.y);
    const topTile = this.tiles.find(t => t.x === tileInfo.x && t.y === tileInfo.y - 1);
    const bottomTile = this.tiles.find(t => t.x === tileInfo.x && t.y === tileInfo.y + 1);
    const topLeftTile = this.tiles.find(t => t.x === tileInfo.x - 1 && t.y === tileInfo.y - 1);
    const topRightTile = this.tiles.find(t => t.x === tileInfo.x + 1 && t.y === tileInfo.y - 1);
    const bottomLeftTile = this.tiles.find(t => t.x === tileInfo.x - 1 && t.y === tileInfo.y + 1);
    const bottomRightTile = this.tiles.find(t => t.x === tileInfo.x + 1 && t.y === tileInfo.y + 1);

    if (leftTile !== undefined && tileInfo.color == leftTile.color && !tilesCache.some(t => t.index === leftTile.index)) neighboringTiles.push(leftTile);
    if (rightTile !== undefined && tileInfo.color == rightTile.color && !tilesCache.some(t => t.index === rightTile.index)) neighboringTiles.push(rightTile);
    if (topTile !== undefined && tileInfo.color == topTile.color && !tilesCache.some(t => t.index === topTile.index)) neighboringTiles.push(topTile);
    if (bottomTile !== undefined && tileInfo.color == bottomTile.color && !tilesCache.some(t => t.index === bottomTile.index)) neighboringTiles.push(bottomTile);
    if (topLeftTile !== undefined && tileInfo.color == topLeftTile.color && !tilesCache.some(t => t.index === topLeftTile.index)) neighboringTiles.push(topLeftTile);
    if (topRightTile !== undefined && tileInfo.color == topRightTile.color && !tilesCache.some(t => t.index === topRightTile.index)) neighboringTiles.push(topRightTile);
    if (bottomLeftTile !== undefined && tileInfo.color == bottomLeftTile.color && !tilesCache.some(t => t.index === bottomLeftTile.index)) neighboringTiles.push(bottomLeftTile);
    if (bottomRightTile !== undefined && tileInfo.color == bottomRightTile.color && !tilesCache.some(t => t.index === bottomRightTile.index)) neighboringTiles.push(bottomRightTile);


    if (tilesCache.some(t => t.index === tileInfo.index)) {
      return neighboringTiles;
    }


    tilesCache.push(tileInfo);

    return [tileInfo, ...neighboringTiles.flatMap(t => this.findNeighboringTiles(t, tilesCache))];
  }

}