import { useEffect, useState } from "react"
import style from "./homePage.module.css"
import axios from 'axios'
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
const Edituser = ()=>{

    let obj = useParams()
    console.log(obj);
    let [name,setName] = useState("")
    let [salary,setSalary] = useState("")
    let [company,setCompany] = useState("")
    let navigate = useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:3000/userData/${obj.xyz}`)
        .then((response)=>{
            setName(response.data.eName);
            setSalary(response.data.eSalary);
            setCompany(response.data.eCompany);
        })
        .catch(()=>{console.log("errorr");})
    },[])

    let namedata = (e)=>{
        setName(e.target.value)
    }
    let salarydata=(e)=>{
        setSalary(e.target.value)
    }
    let companydata=(e)=>{
        setCompany(e.target.value)
    }
    let formHandle=(e)=>{
        e.preventDefault()
        let payload={
            eName:name,
            eSalary:salary,
            eCompany:company
        }
        axios.put(`http://localhost:3000/userData/${obj.xyz}`,payload)
        .then(()=>{console.log("Updated...");})
        .catch(()=>{console.log("Errorrr...");})

        navigate("/users")
    }

    return(
        <div id={style.createUser}>
            <form action="">
                <h5>EDIT USER</h5>
                <label htmlFor="">Name</label>
                <input type="text" value={name} onChange={namedata} /> <br />
                <label htmlFor="">Salary</label>
                <input type="text" value={salary} onChange={salarydata}/> <br />
                <label htmlFor="">Company</label>
                <input type="text" value={company} onChange={companydata}/> <br />
                <button onClick={formHandle}>Submit</button>
            </form>
        </div>
    )
}
export default Edituser