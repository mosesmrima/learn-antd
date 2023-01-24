import {Routes, Route, Link} from "react-router-dom";
import FormComp from "./Form"
import "antd/dist/antd.css"
import "./App.css"
import Home from "./Home"
import RouteMe from "./RouteMe";
import AntTable from "./Table";
import EditUser from "./EditUser"
import Charts from "./Charts"
import {Tab1} from "./Tab1";

function App () {
     return (
                <>
                    <nav>
                        <ul className={"nav-bar"}>
                            <li> <Link to={"/"}>Home</Link> </li>
                            <li> <Link to={"/routeme"} > Routeme </Link> </li>
                            <li> <Link to={"/form"}>Form</Link> </li>
                            <li> <Link to={"/patients"}>Patients</Link> </li>
                            <li> <Link to={"/ant-charts"}>AntD Charts</Link> </li>
                            <li> <Link to={"/tab1"}>Tabs</Link> </li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route path={"/"} element={<Home/>}/>
                        <Route path={"/routeme"} element={<RouteMe/>}/>
                        <Route path={"/form"} element={ <FormComp/>} />
                        <Route path={"/patients"}>
                            <Route index element={ <AntTable/> }/>
                            <Route path={":pnumber"} element={ <EditUser/> }/>
                        </Route>
                        <Route path={"/ant-charts"} element={ <Charts/> }/>
                        <Route path={"/tab1"} element={ <Tab1/> }/>
                    </Routes>
                    </>
        )
    }
    export default App