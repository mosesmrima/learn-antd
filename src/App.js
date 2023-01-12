import React from "react"
import {dataArr} from "./data";
import {Table, Tag} from "antd"
import {useState, useEffect} from "react";
import Modal from "./Popup"
import "antd/dist/antd.css"
import "./App.css"


 function App () {
    let [userData, setUserData] = useState([])

     useEffect(()=>{
         const dataSource = dataArr.map(el => (({alias_name, portrait_data, residence, status, patient_number, primary_contact}) => ({alias_name, portrait_data, residence, status, patient_number, primary_contact}))(el))
         setUserData(dataSource)
     }, [])


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
                <Table dataSource={userData} columns={columns} rowKey={record => record.patient_number} size={"small"}></Table>
            </div>
        )
    }
    export default App