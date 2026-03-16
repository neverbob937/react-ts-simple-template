import Button from "../../../shared/ui/Button";
import FlexContainer from "../../../shared/ui/FlexContainer";
import Panel from "../../../shared/ui/Panel";
import Text from "../../../shared/ui/Text";

export default function MinePage(){
    return <Panel>
        <FlexContainer>
            <Text size={30}>Шахты</Text>
            <Text>Золото: 0</Text>
            <FlexContainer>
                <Button>Копать</Button>
                <Button>Магазин</Button>
            </FlexContainer>
        </FlexContainer>
        </Panel>
}