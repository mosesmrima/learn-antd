import React from "react";
import {useState, useEffect} from "react";
import {Table, Form, Button, InputNumber} from "antd";
import axiosInstance from "./axiosInstance";
import "./App.css"

let conf = {
    baseURL: "https://jsonplaceholder.ir/",
    headers: {}
}
let axiosInst = axiosInstance(conf);


export default function Users() {
    let [data, setData] = useState([]);
    let [page, setPage] = useState(1);
    let [pageSize, setPageSize] = useState(5);
    let [userData, setUserData] = useState(null)
    //fetch all users
    useEffect(() => {
        axiosInst.get("/users")
            .then(res => {
                setData(res.data);
            })
            .catch(e => console.log(e.message))
    }, []);

    //fetch one user
    const handleClick = val => {
        axiosInst.get(`/users/${val.userID}`).then( res => {
            setUserData(res.data)
        })
    }

    //delete a user
    const handleDel = record => {
        console.log(record.id)
        axiosInst.delete(`/users/${record.id}`)
            .then( res => {
                let newData = data.filter(user => {
                    return user.id !== record.id
                })
                setData(newData)
            })
    }

    let newData = data.map(user => {
                    return (({id,name, username, email}) => ({ id, name, username, email }))(user); //destructure received data
                });
    let newUserData = userData
    const cols = [
            {
                title: "Name",
                dataIndex: "name",
                key: "name"
            },
            {
                title: "Username",
                dataIndex: "username",
                key: "username"
            },
            {
                title: "Email",
                dataIndex: "email",
                key: "email"
            },
        {
                title: "Action",
                dataIndex: "key",
                key: "key",
                render: (text, record) =>  (
                    (<Button onClick={ ()=>handleDel(record)}>Delete Record</Button>)
                )
            }
        ]

    const pagination = {
            page: page,
            pageSize: pageSize,
            total: newData.length,
            showSizeChanger: true,
            pageSizeOptions: ["2", '10', '20', '30'],
            onShowSizeChange: (page, size) => {
                setPage(page)
                setPageSize(size)
            }
        }
    return (
        <div className={"users"}>
            <div className={"all-users"}>
                <Table dataSource={newData} columns={cols} rowKey={record => record.id} pagination={pagination}></Table>
            </div>
            <div className={"one-user"}>
                <h2> Get Details of a specific user</h2>
                <Form layout={"inline"} onFinish={handleClick}>
                    <Form.Item label={"userID"} name={"userID"} rules={[{ type: 'number', min: 1, max: newData.length, message: 'Age should be between 18 and 99' }]}>
                        <InputNumber type={"number"} min={1} max={newData.length}/>
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType={"submit"} className={"button"} placeholder={"Enter userID"}>Get user Data</Button>
                    </Form.Item>
                </Form>
                {
                    newUserData && <p> name: {newUserData.name} <br/> username: {newUserData.username} <br/> email: {newUserData.email}</p>
                }
            </div>
        </div>

    );
}
