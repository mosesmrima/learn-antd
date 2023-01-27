import {Steps, Button, message, Form, Input, DatePicker} from "antd";
import {useState, useEffect} from "react";
import {set} from "mdb-ui-kit/src/js/mdb/perfect-scrollbar/lib/css";


const StepForm = (props) => {
    const layout = {
        labelCol: { xs: { span: 24 }, sm: { span: 24 }, md: { span: 8 }, lg: { span: 8 } },
        wrapperCol: { xs: { span: 24 }, sm: { span: 24 }, md: { span: 12 }, lg: { span: 8 } }
    };
    const {getFieldDecorator, getFieldValue} = props.form
    const [current, setCurrent] = useState(0)
    const [hobbies, setHobbies] = useState([1]);

    const [values, setValue] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        school: "",
        degree: "",
        "edu-period": [],
        company: "",
        position: "",
        "work-period": []
    })
    useEffect(()=>{
        console.log(props.form.getFieldsValue())
    }, [current])
    const addHobby = () => {
        const nextHobbies = [...hobbies, hobbies.length + 1];
        setHobbies(nextHobbies);
    }

    const removeHobby = index => {
        setHobbies(hobbies.filter((hobby, i) => i !== index));
    };

    const handlePersist = value => {
        setValue({...values, ...value})
    }
    const handlePrevious = (e) => {
        props.form.setFieldsValue(props.form.getFieldsValue())
        setCurrent(prevState => prevState - 1)
    }
    const handleNext = (e) => {
        setCurrent(prevState => prevState + 1)
    }
    const handleFinish = (e) => {
        e.preventDefault()
        props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log(values)
            }
        })
    }

    const steps = [
        {
            title: "Bio Data",
            content: <>
                <Form.Item label="Name" {...layout}>
                    {
                        getFieldDecorator("name",{rules: [{required: true}]})(
                            <Input />
                        )
                    }
                </Form.Item>
                <Form.Item label="Email" {...layout}>
                    {
                        getFieldDecorator("email", {initialValue: values.email,rules: [{required: true}]})(
                            <Input onChange={ e => handlePersist({email: e.target.value})}/>
                        )
                    }
                </Form.Item>
                <Form.Item label="Phone" {...layout}>
                    {
                        getFieldDecorator("phone", {initialValue: values.phone,rules: [{required: true}]})(
                            <Input onChange={ e => handlePersist({phone: e.target.value})}/>
                        )
                    }
                </Form.Item>
            </>
        },
        {
            title: "Education",
            content: <>
                <Form.Item label="School" {...layout}>
                    {
                        getFieldDecorator("school", {initialValue: values.school, rules: [{required: true}]})(
                            <Input onChange={ e => handlePersist({school: e.target.value})}/>
                        )
                    }
                </Form.Item>
                <Form.Item label="Degree" {...layout}>
                    {
                        getFieldDecorator("degree", {initialValue: values.degree,rules: [{required: true}]})(
                            <Input onChange={ e => handlePersist({degree: e.target.value})}/>
                        )
                    }
                </Form.Item>
                <Form.Item label="Duration" {...layout}>
                    {
                        getFieldDecorator("edu-period", {initialValue: values["edu-period"], rules: [{ type: 'array', required: true, message: 'Please select time!' }]})(
                            <DatePicker.RangePicker onChange={ e => handlePersist({"edu-period": e})}/>
                        )
                    }
                </Form.Item>

            </>
        },
        {
            title: "Experience",
            content: <>
                <Form.Item label="Company" {...layout}>
                    {
                        getFieldDecorator("company", {initialValue: values.company, rules: [{required: true}]})(
                            <Input onChange={ e => handlePersist({company: e.target.value})}/>
                        )
                    }
                </Form.Item>
                <Form.Item label="Position" {...layout}>
                    {
                        getFieldDecorator("position", {initialValue: values.position, rules: [{required: true}]})(
                            <Input onChange={ e => handlePersist({position: e.target.value})}/>
                        )
                    }
                </Form.Item>
                <Form.Item label="Duration" {...layout}>
                    {
                        getFieldDecorator("work-period", {initialValue: values["work-period"], rules: [{ type: 'array', required: true, message: 'Please select time!' }]})(
                            <DatePicker.RangePicker onChange={ e => handlePersist({"work-period": e})}/>
                        )
                    }
                </Form.Item>
            </>
        },
        {
            title: "sample",
            content: <>
                {hobbies.map((hobby, index) => {
                    let name = `hobby${hobby}`
                    return (<Form.Item  key={hobby} {...layout} label={`hobby ${hobby}`}>
                        {getFieldDecorator(name, {
                            rules: [{ required: true, message: 'Please input your hobby!' }],
                        })(<Input style={{width: "60%", marginRight: 8}} onInput={(e)=> handlePersist({[name]: e.target.value})} />)}
                        <Button type="danger" size={"small"} onClick={() => removeHobby(index)}>Remove</Button>
                    </Form.Item>)
                })}
                <Form.Item style={{marginLeft:"auto", marginRight: "auto"}} >
                    <Button type="dashed" onClick={addHobby} style={{marginLeft:"auto", marginRight: "auto"}}>
                        Add another hobby
                    </Button>
                </Form.Item>
            </>
        }
    ]

    return (
        <>
            <Steps current={current} style={{width: "90%", marginRight: "auto", marginLeft: "auto"}}>
                {
                    steps.map((el ,index)=> <Steps.Step key={index} title={el.title}/>)
                }
            </Steps>
                <Form onSubmit={handleFinish} style={{width: "90%", marginLeft: "auto", marginRight: "auto"}}>
                    {
                        steps[current].content
                    }
                    {
                       ( current > 0) && (<Button
                            type={"primary"}
                            onClick={(e) => handlePrevious(e)}
                            style={{margin: 8}}
                        >Previous</Button>)
                    }
                    {
                        (current < steps.length - 1 ) && (
                            <Button
                            type="primary"
                            onClick={(e) => handleNext(e)}
                            style={{marginLeft: "80%"}}
                            >Next</Button>)
                    }
                    {
                        (current === steps.length - 1 ) && (
                            <Button
                            htmlType={"submit"}
                            onClick={(e) => handleFinish(e)}
                            style={{marginLeft: "80%"}}
                        >Finish</Button>)
                    }
                </Form>
        </>
    );
}

const Resume = Form.create({name: "Resume"})(StepForm)
export default Resume