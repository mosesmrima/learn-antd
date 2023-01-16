import {Routes, Route, Link} from "react-router-dom";
import FormComp from "./Form"
import "antd/dist/antd.css"
import "./App.css"
import Home from "./Home"
import RouteMe from "./RouteMe";
import AntTable from "./Table";
import EditUser from "./EditUser"

 function App () {
     return (
                <>
                    <nav>
                        <ul>
                            <li> <Link to={"/"}>Home</Link> </li>
                            <li> <Link to={"/routeme"} > Routeme </Link> </li>
                            <li> <Link to={"/form"}>Form</Link> </li>
                            <li> <Link to={"/table"}>Table</Link> </li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route path={"/"} element={<Home/>}/>
                        <Route path={"/routeme"} element={<RouteMe/>}/>
                        <Route path={"/form"} element={ <FormComp/>} />
                        <Route path={"/table"} element={ <AntTable/> } />
                        <Route path={"/sample"} element={ <EditUser/> }/>
                    </Routes>
                    </>
        )
    }
    export default App