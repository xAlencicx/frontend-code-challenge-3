import RESOLUTION from "../../../enums/RESOLUTION";
import ExportSettings from "../../../models/ExportSettings";
import { TileInfo } from "../../../types/TileInfo";

export default class CanvasToImage {


    exportCanvas(tiles: TileInfo[], exportSettings: ExportSettings) {
        const canvasElement = this.initializeCanvasElement(exportSettings);
        const scaledTiles = this.scaleTilesToExportResolution(tiles, exportSettings);
        this.drawTilesOnCanvas(canvasElement, scaledTiles);
        this.downloadImage(canvasElement, exportSettings);
    }


    private scaleToExportResolution(valueInPixels: number, resolution: RESOLUTION) {
        if(resolution === RESOLUTION.DPI_72) {
        return valueInPixels;
        }
        const valueInInches = valueInPixels / RESOLUTION.DPI_72; //default 72dpi is used for screen resolution
        const valueInExportResolution = valueInInches * resolution;
        return valueInExportResolution;
    }

    private initializeCanvasElement(exportSettings: ExportSettings) {
        const canvasElement = document.createElement('canvas');
        canvasElement.width = this.scaleToExportResolution(exportSettings.width, exportSettings.resolution);
        canvasElement.height = this.scaleToExportResolution(exportSettings.height, exportSettings.resolution);
        return canvasElement;
    }

    private scaleTilesToExportResolution(tilesToScale: TileInfo[], exportSettings: ExportSettings) {
        return tilesToScale.map(tile => {
            return {
                ...tile,
                x: this.scaleToExportResolution(tile.x, exportSettings.resolution),
                y: this.scaleToExportResolution(tile.y, exportSettings.resolution),
                width: this.scaleToExportResolution(tile.width, exportSettings.resolution),
                height: this.scaleToExportResolution(tile.height, exportSettings.resolution),
            }
        });
    }

    private drawTilesOnCanvas(canvasElement: HTMLCanvasElement, scaledTiles: TileInfo[]) {
        const ctx = canvasElement.getContext('2d');
        if (ctx === null) {
            throw new Error("Canvas context is null");
        }
        scaledTiles.forEach(tile => {
            ctx.fillStyle = tile.color;
            ctx.fillRect(tile.x, tile.y, tile.width, tile.height);
        });
    }

    private downloadImage(canvasElement: HTMLCanvasElement, exportSettings: ExportSettings) {
        const MIME_TYPE = exportSettings.exportAs;

        const imgURL = canvasElement.toDataURL(MIME_TYPE);

        var dlLink = document.createElement('a');
        dlLink.download = this.getFileNameFromExportSettings(exportSettings);
        dlLink.href = imgURL;
        dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(':');

        document.body.appendChild(dlLink);
        dlLink.click();
        document.body.removeChild(dlLink);
    }

    private getFileNameFromExportSettings(exportSettings: ExportSettings) {
        return `${exportSettings.fileName}.${exportSettings.exportAs.replace("image/", "")}`;
    }


}