import { Line } from '@ant-design/plots';
import {useState, useEffect} from "react";
import {gdp} from "./data2";
import "./App.css"
export default function Charts() {
    const [data, setGdpData] = useState([])
    useEffect(() => setGdpData(gdp), [])

    const config = {
        data,
        xField: 'year',
        yField: 'gdp',
        seriesField: 'name',
        xAxis: {
            title: {
                text: "years"
            }
        },
        yAxis: {
            title: {
                text: "GDP in dolllars"
            }
        },
    };
    const china = data.filter(el => {
       return el.name === "China";
    })
    console.log(china)
    return (
        <div className={"plots-line"}>
            <h1>GDP (antd)</h1>
            <Line {...config}/>
            <h1>GDP (mdbb)</h1>
        </div>
    );
}