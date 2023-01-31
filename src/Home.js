import React from "react";
import "./App.css"
import {Button} from "antd";
import {useNavigate, useLocation} from "react-router-dom";
import {AiOutlineHighlight} from "react-icons/ai"
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";



export default function Home() {
    const createPDF = async () => {
        const pdf = new jsPDF("portrait", "pt", "a4");
        const data = await html2canvas(document.querySelector(".resume"));
        const img = data.toDataURL("image/png");
        const imgProperties = pdf.getImageProperties(img);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
        pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("shipping_label.pdf");
    }
    const navigate = useNavigate();
    const handleEdit = (current) => {
        navigate("/stepform", {state: {current: current}})
    }
    const {state} = useLocation()
    const hobbies = Object.entries(state).filter(([key, value]) => key.startsWith("hobby"));
    const hobbyValues = hobbies.map(([key, value]) => value);

    return (
        <>
            <div className={"res-title"}>
                <h2>Resume Preview</h2>
            </div>
            <div className={"resume"}>
                <div className={"left"}>
                    <div className={"biodata"}>
                        <span className={"edit"}>
                            <h2>Bio Data</h2>
                            <p onClick={()=>handleEdit(0)}><AiOutlineHighlight color={"green"} size={17}/>{" edit"}</p>
                        </span>
                        <p>Name: {state.name}</p>
                        <p>Email: {state.email}</p>
                        <p>Phone: {state.phone}</p>
                        <p>D.O.B: {state.dob}</p>
                    </div>
                    <div className={"education"}>
                        <span className={"edit"}>
                            <h2>Education</h2>
                            <p onClick={()=>handleEdit(1)}><AiOutlineHighlight color={"green"} size={17}/>{" edit"}</p>
                        </span>
                        <p>School: {state.school}</p>
                        <p>Degree: {state.degree}</p>
                        <p>from: {state["edu-period"][0]} To: {state["edu-period"][0]}</p>
                    </div>
                </div>
                <div className={"right"}>
                    <div className={"experience"}>
                        <span className={"edit"}>
                            <h2>Experience</h2>
                            <p onClick={()=>handleEdit(2)}><AiOutlineHighlight color={"green"} size={17}/>{" edit"}</p>
                        </span>
                        <p>Company:{state.company}</p>
                        <p>Position: {state.position}</p>
                        <p>from: {state["work-period"][0]} To: {state["work-period"][0]}</p>
                    </div>
                    <div className={"hobbies"}>
                        <span className={"edit"}>
                            <h2>Hobbies</h2>
                            <p onClick={()=>handleEdit(3)}><AiOutlineHighlight color={"green"} size={17}/>{" edit"}</p>
                        </span>
                        {hobbyValues.map(el => <p>{el}</p>)}
                    </div>
                </div>
            </div>
            <div className={"buttons"}>
                <Button onClick={createPDF} style={{background: "green", color: "black", border: "none"}}>Generate PDF</Button>
            </div>
        </>
    );
}