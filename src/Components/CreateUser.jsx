import React, { useState } from "react";
import style from "./homePage.module.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";
const CreateUser=()=>{
    let [names,setNames] = useState("")
    let [company,setCompany] = useState("") 
    let [sal,setSal] = useState("")
   
    let navigate = useNavigate()

    let userName = (e)=>{
        // console.log(e.target.value);
        setNames(e.target.value)
    }
    let userCompany = (e)=>{
        // console.log(e.target.value);
        setCompany(e.target.value)
    }
    let userSal = (e)=>{
        // console.log(e.target.value);
        setSal(e.target.value)
    }
    let Handles=(e)=>{
        e.preventDefault()
        // console.log(names,sal,company);
        let payload = {
            eName:names,
            eSalary:sal,
            eCompany:company
        }
        axios.post("http://localhost:3000/userData",payload)
        .then((response)=>{console.log("Data has been Stored");})
        .catch(()=>{console.log("ERRRooRRRR");})

        navigate("/users")
    }
    return(
        <div id={style.createUser}>
            <form action="">
                <h5>CREATE USER</h5>
                <label htmlFor="">Name</label>
                <input type="text" value={names} onChange={userName}/> <br />
                <label htmlFor="">Salary</label>
                <input type="text" value={sal} onChange={userSal}/> <br />
                <label htmlFor="">Company</label>
                <input type="text" value={company} onChange={userCompany}/> <br />
                <button onClick={Handles}>Submit</button>
            </form>
        </div>
    )
}
export default React.memo(CreateUser)