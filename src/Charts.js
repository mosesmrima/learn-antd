import { Line, Bar, Scatter, G2, Area } from '@ant-design/plots';
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

        const { registerTheme } = G2;
        registerTheme('custom-theme', {
            colors10: [
                '#025DF4',
                '#DB6BCF',
                '#2498D1',
                '#BBBDE6',
                '#4045B2',
                '#21A97A',
                '#FF745A',
                '#007E99',
                '#FFA8A8',
                '#2391FF',
            ],
            colors20: [
                '#025DF4',
                '#DB6BCF',
                '#2498D1',
                '#BBBDE6',
                '#4045B2',
                '#21A97A',
                '#FF745A',
                '#007E99',
                '#FFA8A8',
                '#2391FF',
                '#FFC328',
                '#A0DC2C',
                '#946DFF',
                '#626681',
                '#EB4185',
                '#CD8150',
                '#36BCCB',
                '#327039',
                '#803488',
                '#83BC99',
            ],
        });
    return (
        <div className={"plots-line"}>
            <h1>GDP (antd) Line graph</h1>
            <Line {...config}/>
            <h1>GDP (mdbb)</h1>
            <Bar xField={"gdp"}
                 yField={"year"}
                 yScale={-1}
                 data={data}
                 isGroup={true}
                 seriesField={"name"}

            />
            <h1>GDP (antd) Scatter Chart</h1>
            <Scatter
                xField={"year"}
                yField={"gdp"}
                data={data}
                colorField={"name"}
                pointStyle={{
                    fillOpacity: 1
                }}
                padding={"auto"}
                size={8}
                shape={"circle"}
                theme={"custom-theme"}
            />
            <h1>GDP (antd) Stacked Area Chart</h1>
            <Area
                data={data}
                xField={"year"}
                yField={"gdp"}
                seriesField={"name"}
            />
        </div>
    );
}