import {Tabs, Button} from "antd"
import {useState, useContext} from "react";
import {Tab2} from "./Tab2";
import {useNavigate} from "react-router-dom";
import {RouteContext} from "./App";

const {TabPane} = Tabs
export const Tab1 = () => {
    const {activeKey, setActiveKey} = useContext(RouteContext)
    const navigate = useNavigate()
    const handleChange = (key)=> {
        setActiveKey(key)
        console.log(activeKey)
    }
    const handleButtonClick = () => {
        if(activeKey === "1") {
            setActiveKey("2")
            navigate("/tab2")
        } else if(activeKey === "2") {
            console.log("nav to tab 2.1")
        }
    }
    return (
        <>
            <Tabs defaultActiveKey={"1"}onTabClick={(key)=>handleChange(key)}>
                <TabPane tab={"Tab 1"} key={"1"}>
                    <Button onClick={()=>handleButtonClick()}>Hello</Button>
                </TabPane>
                <TabPane tab={"Tab 2"} key={"2"}>
                    <Button onClick={handleButtonClick}>Hello2</Button>
                </TabPane>
            </Tabs>
        </>
    );
}