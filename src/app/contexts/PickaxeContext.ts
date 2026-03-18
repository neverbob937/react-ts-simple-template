import { createContext } from "react"

export interface IPickaxeContext{
    readonly pickaxe : number,
    readonly damage : number,
    addPickaxeLVL : (value : number) => void,
    demagePickaxe : (value : number) => void
}

export const PickaxeContext = createContext<IPickaxeContext>(
    {
        pickaxe: 0,
        damage: 0,
        addPickaxeLVL: () => {},
        demagePickaxe: () => {}
    }
)