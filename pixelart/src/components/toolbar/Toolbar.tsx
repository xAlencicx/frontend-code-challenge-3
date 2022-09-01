import DIRECTION from '../../enums/DIRECTION'
import ToolbarButton from './ToolbarButton'


type Props = {
    title?: string|null
    direction?: DIRECTION
    toolbarItems: any[]
}

const Toolbar = ({ title, direction = DIRECTION.HORIZONTAL, toolbarItems }: Props) => {
    return (
        <div className='flex flex-col items-center overflow-x-auto max-w-[100vw] drop-shadow-sm shadow-black px-2'>
            {title && <h3 className='font-mono text-sm'>{title}</h3>}
            <div className={`flex ${direction === DIRECTION.HORIZONTAL ? "flex-row" : "flex-col"} justify-center items-center flex-auto flex-wrap gap-1`}>
                {toolbarItems.map((item, index) => 
                <ToolbarButton key={index} item={item}  />  )}
            </div>
        </div>
    )
}

export default Toolbar