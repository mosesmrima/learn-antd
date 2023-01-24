import {Button, Tabs} from "antd";
import {RouteContext} from "./App";
import {useContext,} from "react";
import {useNavigate} from "react-router-dom";

const {TabPane} = Tabs
export const Tab2 = () => {
    const navigate = useNavigate()
    const {activeKey, setActiveKey} = useContext(RouteContext)
    return (
        <>
            <Tabs activeKey={activeKey} onTabClick={(key)=> setActiveKey(key)}>
                <TabPane tab={"Tab 1"} key={"1"}>

                    <Button>Hello</Button>
                </TabPane>
                <TabPane tab={"Tab 2"} key={"2"}>
                    This is tab2 <br/>
                    <Button onClick={()=>navigate("/tab3")}>Hello</Button>
                </TabPane>
            </Tabs>
        </>
    );
}