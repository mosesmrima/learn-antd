import React from "react";
import { Form, Row, Col, Input, Button, Select} from 'antd'



const {Item} = Form
const {Option} = Select
const layout = {
    labelCol: { xs: { span: 24 }, sm: { span: 12 }, md: { span: 8 }, lg: { span: 8 } },
    wrapperCol: { xs: { span: 24 }, sm: { span: 24 }, md: { span: 12 }, lg: { span: 8 } }
};



export default function FormComp () {

    return(
        <Form >
            <Row gutter={16}>
                <Col span={8}>
                 <Item label={"Title"}  {...layout}>
                     <Input placeholder="Input 1" />
                 </Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={8}>
                    <Item label="Surname" {...layout}>
                        <Input placeholder="Input 1" />
                    </Item>
                    <Item label="Gender" {...layout}>
                        <Input placeholder="Input 2" />
                    </Item>
                    <Item label={"Email"} {...layout}>
                        <Input placerholder={"selct date"}></Input>
                    </Item>
                    <Item label={"Country"} {...layout}>
                        <Input placeholder={"country"}/>
                    </Item>
                    <Item label={"Department"} {...layout}>
                        <Input/>
                    </Item>
                    <Item label={"Staff Number"} {...layout}>
                        <Input/>
                    </Item>
                </Col>
                <Col span={8}>
                    <Item label="First Name" {...layout}>
                        <Select placeholder="Select 1">
                            <Option value="option1">Option 1</Option>
                            <Option value="option2">Option 2</Option>
                        </Select>
                    </Item>
                    <Item label="Marital Status" {...layout}>
                        <Input placeholder="Input 3" />
                    </Item>
                    <Item label={"Tel No."} {...layout}>
                        <Input placeholder={"Tel "}></Input>
                    </Item>
                    <Item label={"Town"} {...layout}>
                        <Input/>
                    </Item>
                    <Item label={"Employee Category"} {...layout}>
                        <Input></Input>
                    </Item>
                    <Item label={"License No."} {...layout}>
                        <Input/>
                    </Item>
                </Col>
                <Col span={8}>
                    <Item label="Middle Name" {...layout}>
                        <Select placeholder="Select 2">
                            <Option value="option3">Option 3</Option>
                            <Option value="option4">Option 4</Option>
                        </Select>
                    </Item>
                    <Item label="D.O.B" {...layout}>
                        <Input placeholder="Input 4" />
                    </Item>
                    <Item label={"Mobile No."} {...layout}>
                        <Input placeholder={"mobile no"}/>
                    </Item>
                    <Item label={"Postal Code"} {...layout}>
                        <Input></Input>
                    </Item>
                    <Item label={"Specialization"} {...layout}>
                        <Input/>
                    </Item>
                    <Item label={"Facility"} {...layout}>
                        <Input/>
                    </Item>
                </Col>
            </Row>
            <Row>
                <Col span={12} style={{ textAlign: 'right', margin: "4px"}}>

                    <Button type="primary" htmlType="submit">Submit</Button>
                </Col>
            </Row>
        </Form>
    );
}