import {Button, Tabs} from "antd";
import {useNavigate} from "react-router-dom";

const {TabPane} = Tabs
export const Tab3 = () => {
    const navigate = useNavigate()
    return (
        <>
            <Tabs defaultActiveKey={"1"} onChange={()=>console.log("change")} onTabClick={()=>console.log("change")}>
                <TabPane tab={"Tab 1"} key={"1"}>

                    <Button onClick={()=>navigate("/tab1")}>Hello fom 3</Button>
                </TabPane>
                <TabPane tab={"Tab 2"} key={"2"}>
                    <Button>Hello</Button>
                </TabPane>
            </Tabs>
        </>
    );
}
