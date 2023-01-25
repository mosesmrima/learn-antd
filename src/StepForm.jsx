import {Steps, Button, message, Form, Input} from "antd";
import {useState} from "react";


const StepForm = (props) => {
    const [current, setCurrent] = useState(0)
    const {getFieldDecorator} = props.form


    const steps = [
        {
            title: "Bio Data",
            content: <div>
                <Form.Item label="Name">
                    {
                        getFieldDecorator("name",{rules: [{required: true}]})(<Input/>)
                    }
                </Form.Item>
                <Form.Item label="Email">
                    {
                        getFieldDecorator("email", {rules: [{required: true}]})(<Input/>)
                    }
                </Form.Item>
                <Form.Item label="Phone">
                    {
                        getFieldDecorator("phone", {rules: [{required: true}]})(<Input/>)
                    }
                </Form.Item>
            </div>
        },
        {
            title: "Education",
            content: <div>
                <Form.Item label="School">
                    {
                        getFieldDecorator("school", {rules: [{required: true}]})(<Input/>)
                    }
                </Form.Item>
                <Form.Item label="Degree">
                    {
                        getFieldDecorator("degree", {rules: [{required: true}]})(<Input/>)
                    }
                </Form.Item>
                <Form.Item label="Year">
                    {
                        getFieldDecorator("eyear", {rules: [{required: true}]})(<Input/>)
                    }
                </Form.Item>
            </div>
        },
        {
            title: "Experience",
            content: <div>
                <Form.Item label="Company">
                    {
                        getFieldDecorator("company", {rules: [{required: true}]})(<Input/>)
                    }
                </Form.Item>
                <Form.Item label="Position">
                    {
                        getFieldDecorator("position", {rules: [{required: true}]})(<Input/>)
                    }
                </Form.Item>
                <Form.Item label="Year">
                    {
                        getFieldDecorator("year", {rules: [{required: true}]})(<Input/>)
                    }
                </Form.Item>
            </div>
        }
    ]
    const handlePrevious = (e) => {
        setCurrent(prevState => prevState - 1)
    }
    const handleNext = (e) => {
        e.preventDefault()
        setCurrent(prevState => prevState + 1)
    }
    const handleFinish = (e) => {
        e.preventDefault()
        props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values)
            }
        })
    }


    return (
        <div>
            <Steps current={current}>
                {
                    steps.map((el ,index)=> <Steps.Step key={index} title={el.title}/>)
                }
            </Steps>
            <Form onSubmit={handleFinish}>
                {
                    steps[current].content
                }
                {
                    current > 0 && <Button type={"primary"} onClick={(e) => handlePrevious(e)} style={{margin: 8}}>Previous</Button>
                }
                {
                    current < steps.length - 1 && <Button type="primary" onClick={(e) => handleNext(e)} style={{margin: 8}}>Next</Button>
                }
                {
                    current === steps.length - 1 && <Button htmlType={"submit"} onClick={(e) => handleFinish(e)} style={{margin: 8}}>Finish</Button>
                }
            </Form>


        </div>
    );
}

const Resume = Form.create({name: "Resume"})(StepForm)
export default Resume