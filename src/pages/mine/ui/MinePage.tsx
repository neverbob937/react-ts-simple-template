import { useContext } from "react";
import Button from "../../../shared/ui/Button";
import FlexContainer from "../../../shared/ui/FlexContainer";
import Panel from "../../../shared/ui/Panel";
import Text from "../../../shared/ui/Text";
import { PageContext } from "../../../app/contexts/PageContext";
import { GoldContext } from "../../../app/contexts/GoldContext";
import { PickaxeContext } from "../../../app/contexts/PickaxeContext";

export default function MinePage(){

    const {setPage} = useContext(PageContext)
    const {gold, addGold} = useContext(GoldContext)
    const {damage} = useContext(PickaxeContext)

    return(
        <Panel>
            <FlexContainer>
                <Text size={30}>Шахты</Text>
                <Text>Золото: {gold}</Text>
                <Text>текущий урон: {damage}</Text>
                <FlexContainer>
                    <Button clickAction={()=>{addGold(damage)}}>Копать</Button>
                    <Button clickAction={()=>{setPage(1)}}>Магазин</Button>
                </FlexContainer>
            </FlexContainer>
        </Panel>
    );
}