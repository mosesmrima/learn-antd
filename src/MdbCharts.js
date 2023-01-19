import { MDBChart, MDBCol } from 'mdb-react-ui-kit';
import {vals} from "./data2"

export default function MdbCharts() {
    return (
       <>
           <MDBCol>
               <MDBChart
                   type={"bar"}
                   data={{
                       labels: vals.map(el => el.year),
                       datasets: [
                           {
                               label: "GDP",
                               data: vals.map(el => el.value)
                           }
                       ]
                   }}
               />
           </MDBCol>
       </>
    );
}