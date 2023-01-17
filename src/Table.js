import {Button, Table, Tag} from "antd";
import React, {useEffect, useState} from "react";
import {dataArr} from "./data";
import Modal from "./Popup"
import {useNavigate} from "react-router-dom";



export default function AntTable() {
        let [userData, setUserData] = useState([])
    useEffect(()=>{
        setUserData(dataArr)
    }, [])
    const navigate = useNavigate();
    const handleEdit = record => navigate(`/patients/${record.patient_number}`, {state: {data: record}},  {replace: true})
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
        },
        {
            title: "Action",
            key: "action",
            render: (text, record) => <Button onClick={() => handleEdit(record)}>Edit</Button>
        }
        ]
    return(
        <Table dataSource={userData} columns={columns} rowKey={record => record.patient_number} size={"small"}></Table>
    );
}