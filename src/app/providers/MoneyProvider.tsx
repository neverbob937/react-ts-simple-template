import { ReactNode, useState } from "react";
import { MoneyContext, IMoneyContext } from "../contexts/MoneyContext";

interface IMoneyProvideProps{
    children : ReactNode
}

export default function MoneyProvider({children} : IMoneyProvideProps){
    const [currentMoney, setCurrentMoney] = useState<number>(0)

    function addMoney(value : number){
        setCurrentMoney(currentMoney + value)
    }
    function removeMoney(value : number){
        setCurrentMoney(currentMoney - value)
    }

    const contextValue : IMoneyContext = {
        money : currentMoney,
        addMoney : addMoney,
        removeMoney : removeMoney
    }

    return (
        <MoneyContext value={contextValue}>
            {children}
        </MoneyContext>
    )
}