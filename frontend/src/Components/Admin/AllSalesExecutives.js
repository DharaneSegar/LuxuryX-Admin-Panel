import React,{useState,useEffect} from 'react';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import axios from 'axios';
import AdminDashBoard from './AdminDashBoard';
import Footer from '../Common/Footer';
import { useNavigate,NavLink } from 'react-router-dom';

export default function AllSalesExecutive(){

    const [salesexecutives,setSalesExecutives] = useState([]);
    const [search,setSearch]  =useState("");

    useEffect(()=>{
        function getSE(){
            axios.get("http://localhost:8070/salesexecutive/getse").then((res) => {
            console.log(res.data);
            setSalesExecutives(res.data);
        }).catch((err) => {
            alert(err.message);
        })
    }

    getSE();
},[])

const handleSearch = async(e)=>{
    e.preventDefault();
     return await axios.get(`http://localhost:8070/salesexecutive/getSid/${search}`).then((response) => {
        console.log(`Saerch is ${search}`);
        console.log(response.data)
        setSalesExecutives(response.data);
        setSearch("");

     }).catch((err)=>{
        console.log(err);
     })
}


    return(
        <>
        <div>
        <AdminDashBoard></AdminDashBoard>
<div className="mt-5">
                <div className="container">
                    <div className="add_btn mt-2 mb-2">
                        <br/><br/><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a className="btn btn-primary" href='/addse'>Add Sales Executive</a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        
                        <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                <div className="input-group">
                    <input className="form-control" type="text" placeholder="Search" aria-label="Search for..." aria-describedby="btnNavbarSearch" onChange={(e) =>{
                        setSearch(e.target.value);
                    }}/>
                        <input type = "submit" className="btn btn-primary" id="btnNavbarSearch" value = "Search" onClick={handleSearch}></input>
        
                </div>


            </form>
                    </div>

                    <table className="table">
                        <thead>
                            <tr className="table-dark">
                                <th scope="col">id</th>
                                <th scope="col">Fullname</th>
                                <th scope="col">Email</th>
                                <th scope="col">Password</th>
                                <th scope="col">Address</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Age</th>
                                <th scope="col">Qualification</th>
                                <th scope="col">Basic Salary</th>
                                <th scope="col">Gender</th>
                                <th scope='col'>Operations</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                salesexecutives.map((salesexecutive) => (
                                
                               
                                    <tr>
                                    <th scope='row'>{salesexecutive.sid}</th>
                                    <td>{salesexecutive.fullname}</td>
                                    <td>{salesexecutive.email}</td>
                                    <td>{salesexecutive.password}</td>
                                    <td>{salesexecutive.address}</td>
                                    <td>{salesexecutive.phone}</td>
                                    <td>{salesexecutive.age}</td>
                                    <td>{salesexecutive.qualification}</td>
                                    <td>{salesexecutive.basicsalary}</td>
                                    <td>{salesexecutive.gender}</td>
                                    <td className='d-flex justify-content-between'>
                                        <NavLink to  ={`/updatese/${salesexecutive.sid}`}><button className='btn btn-primary' ><CreateIcon/></button></NavLink>
                                        <button className='btn btn-danger' onClick={() =>{
                                             axios.delete(`http://localhost:8070/salesexecutive/deletese/${salesexecutive._id}`)
                                            .then((res) => {
                                                if(res.data === "success"){
                                                    alert("Sales Executive deleted successfully")
                                                    window.location.replace("/allse");
                                                }else if(res.data === "error"){
                                                    alert("Error in deleting sales executive")
                                                }
                                            }).catch((err) => {
                                                alert(err);
                                            })
                                        }}><DeleteOutlineIcon/></button>
                                    </td>
                                    </tr>

                                
                                ))}


                         
                            </tbody>
                            
                        </table>
    </div>
    
</div>

</div>
<Footer></Footer>
</>
    )
}