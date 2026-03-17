import { ReactNode, useState } from "react";
import { PickaxeContext, IPickaxeContext } from "../contexts/PickaxeContext";

interface IPickaxeProvideProps{
    children : ReactNode
}

export default function PickaxeProvider({children} : IPickaxeProvideProps){
    const [currentPickaxe, setCurrentPickaxe] = useState<number>(0)

    function addPickaxe(value : number){
        setCurrentPickaxe(currentPickaxe * 2)
    }
    // function PrisePickaxe(value : number){
    //     setCurrentPickaxe(currentPickaxe * 2)
    // }
    // пока не понимаю

    const contextValue : IPickaxeContext = {
        pickaxe : currentPickaxe,
        addPickaxe : addPickaxe,
        PrisePickaxe : PrisePickaxe
    }

    return (
        <PickaxeContext value={contextValue}>
            {children}
        </PickaxeContext>
    )
}