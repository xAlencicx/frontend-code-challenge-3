export type ToolbarItem = {
    name : string
    icon? : React.ReactNode
    selected : boolean
    onClick : (e : React.MouseEvent) => void
}

export type ColorToolbarItem = ToolbarItem & {
    color : string
}