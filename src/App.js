import React from "react"
import {dataArr} from "./data";
import {Table, Tag, Button} from "antd"
import {useState, useEffect} from "react";
import { Routes, Route} from "react-router-dom";
import {useNavigate} from "react-router"
import FormComp from "./Form"
import Modal from "./Popup"
import "antd/dist/antd.css"
import "./App.css"
import RouteMe from "./RouteMe";


 function App () {
    let [userData, setUserData] = useState([])
     useEffect(()=>{
         setUserData(dataArr)
     }, [])

     const nav = useNavigate()
     const handleClick = () => {
        console.log("hey")
        nav("routeme")
     }


     const columns = [
            {
                title: '',
                dataIndex: 'portrait_data',
                render:  (text, record) => <Modal src={record.portrait_data}/>,
                width: "4%"
            },
            {
                title: "Patient No",
                dataIndex: "patient_number",
                key: "patient_number"
            },
            {
                title: "Patient Name",
                dataIndex: "alias_name",
                key: "alias_name"
            },
            {
                title: "Primary Contact",
                dataIndex: "primary_contact",
                key: "primary_contact"
            },
            {
                title: "Residence",
                dataIndex: "residence",
                key: "residence"
            },
            {
                title: "Status",
                dataIndex: "status",
                key: "status",
                render: (text, record) =>  <Tag style={{verticalAlign: "middle"}} color={`${record.status==="Active"?"green":"red"}`}>{record.status}</Tag>
            }
        ]
        return (
                <div>
                    <Routes>
                        <Route>
                            <Route path={"routeme"} element={<RouteMe/>}/> 
                        </Route>
                    </Routes>
                    <Table dataSource={userData} columns={columns} rowKey={record => record.patient_number} size={"small"}></Table>
                    <FormComp/>
                    <Button onClick={handleClick}>nav</Button>
                </div>
        )
    }
    export default App