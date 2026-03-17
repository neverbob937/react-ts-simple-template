import { useContext } from "react";
import Button from "../../../shared/ui/Button";
import FlexContainer from "../../../shared/ui/FlexContainer";
import Panel from "../../../shared/ui/Panel";
import Text from "../../../shared/ui/Text";
import { PageContext } from "../../../app/contexts/PageContext";
import { GoldContext } from "../../../app/contexts/GoldContext";
import { MoneyContext } from "../../../app/contexts/MoneyContext";

export default function ShopPage(){

    const { setPage } = useContext(PageContext)
    const {gold, removeGold} = useContext(GoldContext)
    const {money, addMoney} = useContext(MoneyContext)

    function sellGoldHandle(){
        if(gold>0){
            removeGold(1)
            addMoney(10)
        }
        
    }

    return <Panel>
        <FlexContainer>
            <Text size={30}>Магазин</Text>
            <Text>Золото: {gold}</Text>
            <Text>Деньги: {money}$</Text>
            <FlexContainer>
                <Button clickAction={sellGoldHandle}>Продать золото</Button>
                <Button>Улучшить кирку</Button>
                <Button clickAction={()=>{setPage(0)}}>В шахту</Button>
            </FlexContainer>
        </FlexContainer>
        </Panel>
}