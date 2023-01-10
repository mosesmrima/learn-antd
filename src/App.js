import './App.css';
import "antd/dist/antd.css"
import React from "react";
import {Form, Input, Icon, Button, Table} from "antd"


let count = 1;
class FormDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
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

               <Table columns={columns} dataSource={this.state.data} rowKey={(record)=>record.key}></Table>
           </div>
        )
    }
}

const App = Form.create({name: "my_form"})(FormDemo)
export default App;
