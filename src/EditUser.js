import {useLocation, useNavigate} from 'react-router-dom';
import {Button, Form, Input} from "antd";

const {Item} = Form
export default function User() {
    const navigate = useNavigate();
    const location = useLocation();
    const layout = {
        labelCol: { xs: { span: 24 }, sm: { span: 24 }, md: { span: 8 }, lg: { span: 8 } },
        wrapperCol: { xs: { span: 24 }, sm: { span: 24 }, md: { span: 12 }, lg: { span: 8 } }
    };
    const handleClick = () => {
        navigate(-1);
    }
    return (
      <Form>
          <Item {...layout}>
              <Button onClick={handleClick}>Back</Button>
          </Item>
          <Item name={"patient_number"} label={"Patient Number"} {...layout}>
              <Input defaultValue={location.state.data.patient_number}/>
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
      </Form>
    );
}