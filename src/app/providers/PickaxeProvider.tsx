import { ReactNode, useState } from "react";
import { PickaxeContext, IPickaxeContext } from "../contexts/PickaxeContext";

interface IPickaxeProvideProps{
    children : ReactNode
}

export default function PickaxeProvider({children} : IPickaxeProvideProps){
    const [currentPickaxe, setCurrentPickaxe] = useState<number>(1)
    const [currentDemage, setCurrentDemage] = useState<number>(1)
    function addPickaxeLVL(value : number){
        setCurrentPickaxe(currentPickaxe + 1)
    }

    function demagePickaxe(value : number){
        setCurrentDemage(currentDemage * 2)
    }

    const contextValue : IPickaxeContext = {
        damage : currentDemage,
        pickaxe : currentPickaxe,
        addPickaxeLVL : addPickaxeLVL,
        demagePickaxe : demagePickaxe
    }

    return (
        <PickaxeContext value={contextValue}>
            {children}
        </PickaxeContext>
    )
}