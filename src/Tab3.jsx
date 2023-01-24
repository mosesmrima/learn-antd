import {Button, Tabs} from "antd";

const {TabPane} = Tabs
export const Tab3 = (props) => {
    return (
        <>
            <Tabs defaultActiveKey={"1"} onChange={()=>console.log("change")} onTabClick={()=>console.log("change")}>
                <TabPane tab={"Tab 1"} key={"1"}>
                    <Button>Hello</Button>
                </TabPane>
                <TabPane tab={"Tab 2"} key={"2"}>
                    <Button>Hello</Button>
                </TabPane>
            </Tabs>
        </>
    );
}
