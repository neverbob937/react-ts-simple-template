import { createContext } from "react"

export interface IPickaxeContext{
    readonly pickaxe : number,
    addPickaxe : (value : number) => void,
    PrisePickaxe : (value : number) => void
}

export const PickaxeContext = createContext<IPickaxeContext>(
    {
        pickaxe: 1,
        addPickaxe: () => {},
        PrisePickaxe: () => {}
    }
)