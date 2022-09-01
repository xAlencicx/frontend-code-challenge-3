import EXPORT_AS from "../enums/EXPORT_AS"
import RESOLUTION from "../enums/RESOLUTION"

type ExportSettings = {
    fileName : string
    exportAs : EXPORT_AS
    width : number
    height : number
    resolution : RESOLUTION
}

export default ExportSettings;