import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./homePage.module.css"
import {Link} from "react-router-dom"

const Users=()=>{
    let [content, setContent] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/userData")
        .then((response)=>{
            // console.log("GOT THE DATA");
            setContent(response.data);
        })
        .catch(()=>{console.log("EERROORR");})
    },[])
    let deleteuser=(x)=>{
        axios.delete(`http://localhost:3000/userData/${x}`)
        window.location.assign('/users')
    }
    return(
        <div id={style.userHome}>
            {
                content.map((e)=>{
                    return(
                        <div>
                            <table>
                                <tr>
                                    <th colSpan={2}>Employee {e.id}</th>
                                </tr>
                                <tr>
                                    <td>Name :</td>
                                    <td>{e.eName}</td>
                                </tr>
                                <tr>
                                    <td>Salary :</td>
                                    <td>{e.eSalary}</td>
                                </tr>
                                <tr>
                                    <td>Company :</td>
                                    <td>{e.eCompany}</td>
                                </tr>
                                <tr>
                                    <td><button><Link to={`/edit/${e.id}`}>Edit</Link></button></td>
                                    <td><button onClick={()=>{deleteuser(e.id)}}><Link>Delete</Link></button></td>
                                </tr>
                            </table>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default React.memo(Users)