import {Tabs, Button} from "antd"

const {TabPane} = Tabs
export const Tab1 = () => {
    return (
        <>
            <Tabs defaultActiveKey={"1"}>
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