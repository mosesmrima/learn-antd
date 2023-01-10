import './App.css';
import "antd/dist/antd.css"
import React from "react";
import {Form, Input, Icon, Button, Table} from "antd"


let count = 1;
class FormDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            page:10,
            pageSize: 2,
            totalElements: 0
        };
    }


    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields( (err, val) => {
            if(!err) {
                count++;
                val = {...val, key:count}
                 this.state.data.push(val)
                this.setState({data: this.state.data})
            }
        });
    }

    handleDel =  record => {
        // eslint-disable-next-line array-callback-return
        let newData = this.state.data.filter(obj => {
            if (record.key !== obj.key) return obj
        })
        this.setState({data: newData})
    }

    handlePageChange = (newPageNumber, newPageSize) => {
        console.log("new pages conf", newPageSize)
            this.setState({page: newPageNumber});
            this.setState({pageSize: newPageSize})
        }




    render() {
        const {getFieldDecorator} = this.props.form;
        const columns = [
            {
                title: "First Name",
                dataIndex: "fname",
                key: "fname"
            },
            {
                title: "Last Name",
                dataIndex: "lname",
                key: "lname"
            },
            {
                title: "Action",
                dataIndex: "key",
                key: "key",
                render: (text, record) =>  (
                    (<Button onClick={ ()=>this.handleDel(record)}>Delete Record</Button>)
                )
            }
        ]

        const pagination = {
            page: this.state.page,
            pageSize: this.state.pageSize,
            total: this.state.data.length,
            showSizeChanger: true,
            pageSizeOptions: ["2", '10', '20', '30'],
            onShowSizeChange: (page, size) => {
                this.setState({page: page})
                this.setState({pageSize: size})
            }
        }


        return (
           <div className={"demo"}>
               <Form onSubmit={this.handleSubmit} layout={"inline"}>
                   <Form.Item label={"First Name"}>
                       {getFieldDecorator('fname', {rules: [{ required: true, message: 'Please input your firstname!'}]})
                       (
                           <Input prefix={<Icon type={"user"}/>} placeholder={"Enter first name"}></Input>
                       )}
                   </Form.Item>
                   <Form.Item label={"Last Name"}>
                       {
                           getFieldDecorator("lname", {rules: [{required: true, message: 'Please input your firstname!'}]})
                           (
                               <Input prefix={<Icon type={"user"}/>} placeholder={"Enter last name"}></Input>
                           )
                       }
                   </Form.Item>
                   <Form.Item>
                       <Button type={"primary"} htmlType={"submit"}>Add</Button>
                   </Form.Item>
               </Form>

               <Table columns={columns} pagination={pagination} dataSource={this.state.data} rowKey={(record)=>record.key} ></Table>
           </div>
        )
    }
}

const App = Form.create({name: "my_form"})(FormDemo)
export default App;
