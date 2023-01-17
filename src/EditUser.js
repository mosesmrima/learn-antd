import {useLocation, useNavigate} from 'react-router-dom';
import {Button, Form, Input, Card} from "antd";

const {Item} = Form
 function User(props) {
    const {getFieldDecorator} = props.form
    const navigate = useNavigate();
    const location = useLocation();
    const layout = {
        labelCol: { xs: { span: 24 }, sm: { span: 24 }, md: { span: 8 }, lg: { span: 8 } },
        wrapperCol: { xs: { span: 24 }, sm: { span: 24 }, md: { span: 12 }, lg: { span: 8 } }
    };
    const handleClick = () => {
        navigate(-1);
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        props.form.validateFields((err, val) => {
            if (!err) {
                console.log(val)
            }
        })
    }
    return (
        <Card>
            <Form onSubmit={handleSubmit} >
                <Item {...layout}>
                    <Button onClick={handleClick}>Back</Button>
                </Item>
                <Item name={"patient_number"} label={"Patient Number"} {...layout}>
                    {getFieldDecorator("patient_number",
                        {
                            initialValue: location.state.data.patient_number,
                            rules: [{required: true, message: "patient number is required"}]
                        }) (<Input/>)}
                </Item>
                <Item name={"patient_name"} label={"Patient Name"}  {...layout}>
                    <Input defaultValue={location.state.data.alias_name}/>
                </Item>
                <Item name={"primary_contact"} label={"Primary Contact"}  {...layout}>
                    <Input defaultValue={location.state.data.primary_contact}/>
                </Item>
                <Item name={"residence"}  label={"Residence"}  {...layout}>
                    <Input defaultValue={location.state.data.residence}/>
                </Item>
                <Item name={"status"} label={"Status"}  {...layout}>
                    <Input defaultValue={location.state.data.status}/>
                </Item>
                <Item {...layout}>
                    <Button htmlType={"submit"}>Submit</Button>
                </Item>
            </Form>
        </Card>
    );
}

const WrapperForm = Form.create({name: "EditUser"})(User)
export default WrapperForm;