import {Button, Tabs} from "antd";
import {RouteContext} from "./App";
import {useContext} from "react";

const {TabPane} = Tabs
export const Tab2 = () => {
    const {activeKey, setActiveKey} = useContext(RouteContext)
    return (
        <>
            <Tabs activeKey={activeKey} onTabClick={(key)=> setActiveKey(key)}>
                <TabPane tab={"Tab 1"} key={"1"}>

                    <Button>Hello</Button>
                </TabPane>
                <TabPane tab={"Tab 2"} key={"2"}>
                    This is tab2 <br/>
                    <Button>Hello</Button>
                </TabPane>
            </Tabs>
        </>
    );
}