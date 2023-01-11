// import './App.css';
// import "antd/dist/antd.css"
// import React from "react";
// import {Form, Input, Icon, Button, Table} from "antd"
//
//
// let count = 1;
// class FormDemo extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             data: [],
//             page:1,
//             pageSize: 2,
//             totalElements: 0
//         };
//     }
//
//
//     handleSubmit = e => {
//         e.preventDefault();
//         this.props.form.validateFields( (err, val) => {
//             if(!err) {
//                 count++;
//                 val = {...val, key:count}
//                 this.state.data.push(val)
//                 this.setState({data: this.state.data})
//             }
//         });
//     }
//
//     handleDel =  record => {
//         // eslint-disable-next-line array-callback-return
//         let newData = this.state.data.filter(obj => {
//             if (record.key !== obj.key) return obj
//         })
//         this.setState({data: newData})
//     }
//
//
//     handlePageChange = (data) => {
//         let current = data;
//
//         console.log("new pages conf", current)
//         this.setState({page: current});
//     }
//
//
//     render() {
//         const {getFieldDecorator} = this.props.form;
//         const columns = [
//             {
//                 title: "First Name",
//                 dataIndex: "fname",
//                 key: "fname"
//             },
//             {
//                 title: "Last Name",
//                 dataIndex: "lname",
//                 key: "lname"
//             },
//             {
//                 title: "Action",
//                 dataIndex: "key",
//                 key: "key",
//                 render: (text, record) =>  (
//                     (<Button onClick={ ()=>this.handleDel(record)}>Delete Record</Button>)
//                 )
//             }
//         ]
//
//         const pagination = {
//             page: this.state.page,
//             pageSize: this.state.pageSize,
//             total: this.state.data.length,
//             showSizeChanger: true,
//             pageSizeOptions: ["2", '10', '20', '30'],
//             onShowSizeChange: (page, size) => {
//                 this.setState({page: page})
//                 this.setState({pageSize: size})
//             }
//         }
//
//
//         return (
//             <div className={"demo"}>
//                 <Form onSubmit={this.handleSubmit} layout={"inline"}>
//                     <Form.Item label={"First Name"}>
//                         {getFieldDecorator('fname', {rules: [{ required: true, message: 'Please input your firstname!'}]})
//                         (
//                             <Input prefix={<Icon type={"user"}/>} placeholder={"Enter first name"}></Input>
//                         )}
//                     </Form.Item>
//                     <Form.Item label={"Last Name"}>
//                         {
//                             getFieldDecorator("lname", {rules: [{required: true, message: 'Please input your firstname!'}]})
//                             (
//                                 <Input prefix={<Icon type={"user"}/>} placeholder={"Enter last name"}></Input>
//                             )
//                         }
//                     </Form.Item>
//                     <Form.Item>
//                         <Button type={"primary"} htmlType={"submit"}>Add</Button>
//                     </Form.Item>
//                 </Form>
//
//                 <Table columns={columns} pagination={pagination} dataSource={this.state.data} onChange={this.handlePageChange} rowKey={(record)=>record.key} ></Table>
//             </div>
//         )
//     }
// }
//
// const App = Form.create({name: "my_form"})(FormDemo)
// export default App;



//Fetch from axios


// import React from "react";
// import axios from "axios";
// import {Table} from "antd";
// import "antd/dist/antd.css"
// import "./App.css"
// class App extends React.Component {
//     constructor(props, context) {
//         super(props, context);
//         this.state = {
//             data: [],
//             page: 1,
//             pageSize: 10,
//             total: 0
//         }
//     }
//
//     componentDidMount() {
//         axios({
//             method: "get",
//             url: "https://jsonplaceholder.ir/users"
//         })
//             .then(res => {
//                 let newData = res.data.map(user => {
//                     return (({id,name, username, email}) => ({ id, name, username, email }))(user); //destructure received data
//                 });
//                 this.setState({data: newData})
//                 this.setState({total: newData.length})
//             }).catch(err => console.log("an error occurred"))
//     }
//
//
//     render () {
//         let data = this.state.data
//         const cols = [
//             {
//                 title: "Name",
//                 dataIndex: "name",
//                 key: "name"
//             },
//             {
//                 title: "Username",
//                 dataIndex: "username",
//                 key: "username"
//             },
//             {
//                 title: "Email",
//                 dataIndex: "email",
//                 key: "email"
//             }
//         ]
//         const pagination = {
//             page: this.state.page,
//             pageSize: this.state.pageSize,
//             total: this.state.data.length,
//             showSizeChanger: true,
//             pageSizeOptions: ["2", '10', '20', '30'],
//             onShowSizeChange: (page, size) => {
//                 this.setState({page: page})
//                 this.setState({pageSize: size})
//             }
//         }
//
//         return(
//             <div className={"demo"}>
//                 <Table dataSource={data} columns={cols} pagination={pagination} rowKey={record => record.id}></Table>
//             </div>
//         );
//     }
// }
//
// export default App;