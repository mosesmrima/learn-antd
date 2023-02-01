import {Steps, Button, Form, Input, DatePicker} from "antd";
import {useState, useEffect, useContext} from "react";
import {useNavigate, useLocation} from "react-router-dom";
import moment from "moment";
import {ResumeContext} from "./App";
import "./App.css"


const StepForm = (props) => {
    const {state} = useLocation()
    const{resumeData, setResumeData} = useContext(ResumeContext)
    const navigate =  useNavigate()
    const layout = {
        labelCol: { xs: { span: 24 }, sm: { span: 24 }, md: { span: 8 }, lg: { span: 8 } },
        wrapperCol: { xs: { span: 24 }, sm: { span: 24 }, md: { span: 12 }, lg: { span: 8 } }
    };
    const {getFieldDecorator} = props.form
    const [current, setCurrent] = useState(0)
    const [hobbies, setHobbies] = useState([1]);
    useEffect(() => {
        if (state) {
            setCurrent(state.current)
        }
    }, [])
    const [values, setValue] = useState(resumeData?resumeData:{
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
    }, [current])
    const addHobby = () => {
        const nextHobbies = [...hobbies, hobbies.length + 1];
        setHobbies(nextHobbies);
    }

    const removeHobby = index => {
        const dynamicKey = `hobby${index}`
        let {[dynamicKey]:_, ...rest} = values;
        setValue(rest)
        setHobbies(hobbies.filter((hobby, i) => i !== index));
    };

    const handlePersist = value => {
        setValue({...values, ...value})
    }
    const handlePrevious = () => {
        setCurrent(prevState => prevState - 1)

    }
    const handleNext = () => {
        const vals = props.form.getFieldsValue()
        setCurrent(prevState => prevState + 1)
        props.form.setFieldsValue(vals)
    }
    const handleFinish = (e) => {
        e.preventDefault()
        props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                setResumeData(values)
                const state = {...values, dob: moment(values.dob).format("DD-MM-YYYY"), "edu-period": values["edu-period"].map(el => moment(el).format("DD-MM-YYYY")), "work-period": values["work-period"].map(el => moment(el).format("DD-MM-YYYY"))}
                navigate("/preview", {state, replace: false})
            }
        })
    }

    const steps = [
        {
            title: "Bio Data",
            content: <>
                <Form.Item label="Name" {...layout}>
                    {
                        getFieldDecorator("name",{
                            initialValue: values.name,
                            rules: [{required: true}]})(
                            <Input onChange={ e => handlePersist({name: e.target.value})}/>
                        )
                    }
                </Form.Item>
                <Form.Item label="Email" {...layout}>
                    {
                        getFieldDecorator("email", {
                            initialValue: values.email
                            ,rules: [{required: true, type: "email"}]})(
                            <Input onChange={ e => handlePersist({email: e.target.value})}/>
                        )
                    }
                </Form.Item>
                <Form.Item label="Phone" {...layout}>
                    {
                        getFieldDecorator("phone", {initialValue: values.phone,rules: [{required: true, pattern: new RegExp(/^[0-9]+$/), message: "Enter a valid number"}]})(
                            <Input onChange={ e => handlePersist({phone: e.target.value})}/>
                        )
                    }
                </Form.Item>
                <Form.Item label="D.O.B" {...layout}>
                    {
                        getFieldDecorator("dob",{initialValue:values.dob, rules: [{required: true}]})(
                            <DatePicker onChange={ e => handlePersist({"dob": e})}/>
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
            title: "Hobbies",
            content: <>
                {hobbies.map((hobby, index) => {
                    let name = `hobby${hobby}`
                    return (<Form.Item  key={hobby} {...layout} label={`hobby ${hobby}`}>
                        {getFieldDecorator(name, {
                            initialValue: values[name],
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
         <div className={"step-form"}>
             <Steps direction={"vertical"} current={current} className={"steps"}>
                 {
                     steps.map((el ,index)=> <Steps.Step key={index} title={el.title}/>)
                 }
             </Steps>
             <Form onSubmit={handleFinish} className={"form"}>
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
                         >Preview</Button>)
                 }
             </Form>
         </div>
        </>
    );
}

const Resume = Form.create({name: "Resume"})(StepForm)
export default Resume