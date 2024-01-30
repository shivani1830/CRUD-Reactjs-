import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import CreateUser from "./Components/CreateUser";
import Users from "./Components/Users";
import Home from "./Components/Home";
import Edituser from "./Components/Edituser";
const App=()=>{
    return(
        <div>
            <BrowserRouter>
                <Home/>
                <Routes>
                    <Route element={<Edituser/>} path="/edit/:xyz"></Route>
                    <Route element={<CreateUser/>} path='/'></Route>
                    <Route element={<Users/>} path="/users"></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default React.memo(App)