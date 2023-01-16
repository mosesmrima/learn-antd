import React from "react";
import { Form, Row, Col, Input, Button, Select} from 'antd'



const {Item} = Form
const {Option} = Select
const layout = {
    labelCol: { xs: { span: 24 }, sm: { span: 24 }, md: { span: 8 }, lg: { span: 8 } },
    wrapperCol: { xs: { span: 24 }, sm: { span: 24 }, md: { span: 12 }, lg: { span: 8 } }
};

const colLayout = {
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24
}


export default function FormComp () {

    return(
        <Form >
            <Row gutter={16}>
                <Col{...colLayout}>
                 <Item label={"Title"}  {...layout}>
                     <Input placeholder="Input 1" />
                 </Item>
                </Col>
            </Row>
            <Row gutter={16}>

                <Col{...colLayout} >
                    <Item label="Surname" {...layout}>
                        <Input placeholder="Input 1" />
                    </Item>
                </Col>
                <Col{...colLayout}>
                    <Item label="First Name" {...layout}>
                        <Select placeholder="Select 1">
                            <Option value="option1">Option 1</Option>
                            <Option value="option2">Option 2</Option>
                        </Select>
                    </Item>
                </Col>
                <Col{...colLayout}>
                    <Item label="Middle Name" {...layout}>
                        <Select placeholder="Select 2">
                            <Option value="option3">Option 3</Option>
                            <Option value="option4">Option 4</Option>
                        </Select>
                    </Item>
                </Col>
                <Col{...colLayout}>
                    <Item label="Gender" {...layout}>
                        <Input placeholder="Input 2" />
                    </Item>
                </Col>
                <Col{...colLayout}>
                    <Item label={"Marital Status"} {...layout}>
                        <Input></Input>
                    </Item>
                </Col>
                <Col{...colLayout}>
                    <Item label="D.O.B" {...layout}>
                        <Input placeholder="Input 4" />
                    </Item>
                </Col>
                <Col {...colLayout}>
                    <Item label={"Email"} {...layout}>
                        <Input placerholder={"selct date"}></Input>
                    </Item>
                </Col>
                <Col{...colLayout}>
                    <Item label={"Tel No."} {...layout}>
                        <Input placeholder={"Tel "}></Input>
                    </Item>
                </Col>
                <Col{...colLayout}>
                    <Item label={"Mobile No."} {...layout}>
                        <Input placeholder={"mobile no"}/>
                    </Item>
                </Col>
                <Col {...colLayout}>
                    <Item label={"Country"} {...layout}>
                        <Input placeholder={"country"}/>
                    </Item>
                </Col>
                <Col{...colLayout}>
                    <Item label={"Town"} {...layout}>
                        <Input/>
                    </Item>
                </Col>
                <Col{...colLayout}>
                    <Item label={"Postal Code"} {...layout}>
                        <Input></Input>
                    </Item>
                </Col>
                <Col {...colLayout}>
                    <Item label={"Department"} {...layout}>
                        <Input/>
                    </Item>
                </Col>
                <Col{...colLayout}>
                    <Item label={"Employee Category"} {...layout}>
                        <Input></Input>
                    </Item>
                </Col>
                <Col{...colLayout}>
                    <Item label={"Specialization"} {...layout}>
                        <Input/>
                    </Item>
                </Col>
                <Col {...colLayout}>
                    <Item label={"Staff Number"} {...layout}>
                        <Input/>
                    </Item>
                </Col>
                <Col{...colLayout}>
                    <Item label={"License No."} {...layout}>
                        <Input/>
                    </Item>
                </Col>
                <Col{...colLayout}>
                    <Item label={"Facility"} {...layout}>
                        <Input/>
                    </Item>
                </Col>
                <Col{...colLayout}>

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