import { ReactNode, useContext } from "react";
import MinePage from "./pages/mine/ui/MinePage";
import Panel from "./shared/ui/Panel";
import Text from "./shared/ui/Text";
import { PageContext } from "./app/contexts/PageContext";
import ShopPage from "./pages/shop/ui/ShopPage";

function App() {
    const {page, setPage} = useContext(PageContext)

    const pages : ReactNode[] =[
        <MinePage/>,
        <ShopPage/>
    ]
    return (
        <>
        {pages[page]}
        </>                                      
    );
}

export default App;
