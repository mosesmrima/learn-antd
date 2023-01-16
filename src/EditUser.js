import {useLocation} from 'react-router-dom';
import {Form, Input} from "antd";

const {Item} = Form
export default function User() {
    const location = useLocation();
    const layout = {
        labelCol: { xs: { span: 24 }, sm: { span: 24 }, md: { span: 8 }, lg: { span: 8 } },
        wrapperCol: { xs: { span: 24 }, sm: { span: 24 }, md: { span: 12 }, lg: { span: 8 } }
    };
    return (
      <Form>
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