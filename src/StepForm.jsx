import {Steps, Button, message} from "antd";
import {useState} from "react";


export const StepForm = () => {
    const [current, setCurrent] = useState(0)
    const steps = [
        {
            title: "Bio Data",
            content: "step 1"
        },
        {
            title: "Education",
            content: "step 2"
        },
        {
            title: "Experience",
            content: "step 3"
        }
    ]
    const handlePrevious = () => setCurrent(prevState => prevState - 1)
    const handleNext = () => setCurrent(prevState => prevState + 1)
    const handleFinish = () => message.success("Submitted Successfully")
    return (
        <div>
            <Steps current={current}>
                {
                    steps.map((el ,index)=> <Steps.Step key={index} title={el.title}/>)
                }
            </Steps>
            {
                steps[current].content
            }
            {
                current > 0 && <Button type={"primary"} onClick={handlePrevious} style={{margin: 8}}>Previous</Button>
            }
            {
                current < steps.length - 1 && <Button type="primary" onClick={handleNext} style={{margin: 8}}>Next</Button>
            }
            {
                current === steps.length - 1 && <Button type={"primary"} onClick={handleFinish} style={{margin: 8}}>Finish</Button>
            }

        </div>
    );
}