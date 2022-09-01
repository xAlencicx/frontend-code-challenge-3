import EXPORT_AS from "../enums/EXPORT_AS";
import FILL_TOOL from "../enums/FILL_TOOL";
import GRID_SIZE from "../enums/GRID_SIZE";
import RESOLUTION from "../enums/RESOLUTION";
import FillToolSetting from "../models/FillToolSetting";
import { ColorToolbarItem, ToolbarItem } from "../types/ToolbarItem";
import useColors from "./UseColors";
function useToolbar(){

const { colors } = useColors();

function initGridSizeToolbarItems(gridSizeSetting : GRID_SIZE ,callback : (gridSize : GRID_SIZE) => void){
    const gridSizeToolbarItems = Object.keys(GRID_SIZE).filter(key => !isNaN(Number(key))).map(value => {
        const enumValue = parseInt(value);
        const toolbarItem = {
          name: `${value}x${value}`,
          icon: <div className='h-4 w-4 bg-gray-200'></div>,
          selected: gridSizeSetting === enumValue,
          onClick: () => callback(enumValue),
        }
        return toolbarItem as ToolbarItem;
      });
    return gridSizeToolbarItems;
}

function initFillToolToolbarItems(fillToolSetting : FillToolSetting, callback : (fillToolSetting : FillToolSetting) => void){
    const fillToolToolbarItems = Object.keys(FILL_TOOL).filter(key => isNaN(Number(key))).map(value => {
        console.log(value);
        const enumValue = value;
        const toolbarItem = {
          name: value,
          icon: <div className='h-4 w-4 bg-gray-200'></div>,
          selected: fillToolSetting.fillTool === enumValue,
          onClick: () => callback({ fillTool: enumValue as FILL_TOOL, color: fillToolSetting.color }),
        }
        return toolbarItem as ToolbarItem;
      })
      return fillToolToolbarItems;
}

function initResolutionToolbarItems(resolution : RESOLUTION, callback : (resolution : RESOLUTION) => void){
  const resolutionToolbarItems = Object.keys(RESOLUTION).filter(key => !isNaN(Number(key))).map(value => {
      console.log(value);
      const enumValue = parseInt(value);
      const toolbarItem = {
        name: `${value}`,
        icon: <div className='h-4 w-4 bg-gray-200'></div>,
        selected: resolution === enumValue,
        onClick: () => callback(enumValue),
      }
      return toolbarItem as ToolbarItem;
    })
    return resolutionToolbarItems;
}

function initColorToolbarItems(fillToolSetting : FillToolSetting,callback: (fillToolSetting: FillToolSetting) => void)
{  //colors palette
    
    

    const colorToolbarItems = colors.map(color => {
        const toolbarItem = {
          name: color,
          color: color,
          icon: <div className='h-4 w-4 bg-gray-200'></div>,
          selected: color === fillToolSetting.color,
          onClick: () => callback({ fillTool: fillToolSetting.fillTool, color: color }),
        }
        return toolbarItem as ColorToolbarItem;
      })

      return colorToolbarItems;
}

function initExportToolbarItems(callback : (exportAs : EXPORT_AS) => void){
  const exportToolbarItems = Object.keys(EXPORT_AS).filter(key => isNaN(Number(key))).map(value => {
    const enumValue = value;
    const toolbarItem = {
      name: value,
      icon: <div className='h-4 w-4 bg-gray-200'></div>,
      selected: false,
      onClick: () => callback(enumValue as EXPORT_AS),
    }
    return toolbarItem as ToolbarItem;
  })

  

  return exportToolbarItems;
}

return {
    initGridSizeToolbarItems,
    initFillToolToolbarItems,
    initColorToolbarItems,
    initResolutionToolbarItems,
    initExportToolbarItems,
    
}
}
export default useToolbar;