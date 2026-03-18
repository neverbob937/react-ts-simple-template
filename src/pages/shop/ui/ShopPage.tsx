import { useContext } from "react";
import Button from "../../../shared/ui/Button";
import FlexContainer from "../../../shared/ui/FlexContainer";
import Panel from "../../../shared/ui/Panel";
import Text from "../../../shared/ui/Text";
import { PageContext } from "../../../app/contexts/PageContext";
import { GoldContext } from "../../../app/contexts/GoldContext";
import { MoneyContext } from "../../../app/contexts/MoneyContext";
import { PickaxeContext } from "../../../app/contexts/PickaxeContext";

export default function ShopPage(){

    const { setPage } = useContext(PageContext)
    const {gold, removeGold} = useContext(GoldContext)
    const {money, addMoney, removeMoney} = useContext(MoneyContext)
    const {pickaxe, addPickaxeLVL,demagePickaxe} = useContext(PickaxeContext)
    const PickaxePrise = pickaxe*pickaxe*100

    function sellGoldHandle(){
        if(gold>0){
            removeGold(1)
            addMoney(10)
        }
    }

    function PickaxeUPD(){
        if(money >= PickaxePrise){
            addPickaxeLVL(1)
            removeMoney(PickaxePrise)
            demagePickaxe(1)
        }
    }

    return <Panel>
        <FlexContainer>
            <Text size={30}>Магазин</Text>
            <Text>Золото: {gold}</Text>
            <Text>Деньги: {money}$</Text>
            <Text>ЛВЛ кирки: {pickaxe}</Text>
            <FlexContainer>
                <Button clickAction={sellGoldHandle}>Продать золото</Button>
                <Button clickAction={PickaxeUPD}> Улучшить кирку : {PickaxePrise}</Button>
                <Button clickAction={()=>{setPage(0)}}>В шахту</Button>
            </FlexContainer>
        </FlexContainer>
        </Panel>
}