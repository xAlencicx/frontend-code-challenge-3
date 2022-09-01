import DIRECTION from '../../enums/DIRECTION'
import ToolbarButton from './ToolbarButton'


type Props = {
    title?: string|null
    direction?: DIRECTION
    toolbarItems: any[]
}

const Toolbar = ({ title, direction = DIRECTION.HORIZONTAL, toolbarItems }: Props) => {
    return (
        <div className='flex flex-col items-center overflow-x-auto max-w-[100vw] drop-shadow-sm shadow-black'>
            {title && <h3 className='font-mono text-sm'>{title}</h3>}
            <div className={`flex ${direction === DIRECTION.HORIZONTAL ? "flex-row gap-x-1" : "flex-col gap-y-1"} justify-center items-center flex-auto`}>
                {toolbarItems.map((item, index) => 
                <ToolbarButton key={index} item={item}  />  )}
            </div>
        </div>
    )
}

export default Toolbar