import React,{useState,useEffect} from 'react';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import axios from 'axios';
import AdminDashBoard from './AdminDashBoard';
import Footer from '../Common/Footer';
import { NavLink } from 'react-router-dom';



export default function AllLeave1(){

    const [status,setStatus] = useState();

    const [leaves,setLeaves] = useState([]);
    
    useEffect(()=>{
        function get(){
            axios.get("http://localhost:8070/leave/getleaves").then((res) => {
            console.log(res.data);
            setLeaves(res.data);
        }).catch((err) => {
            alert(err.message);
        })
    }

    get();
},[])

    return(
        <>
        <div>
        <AdminDashBoard></AdminDashBoard>
<div className="mt-5">
                <div className="container">
                    <div className="add_btn mt-2 mb-2">
                        <br/><br/><br/>
                   
                    </div>

                    <table className="table">
                        <thead>
                            <tr className="table-dark">
                                <th scope="col">id</th>
                                <th scope="col">eid</th>
                                <th scope="col">Fullname</th>
                                <th scope="col">Title</th>
                                <th scope="col">Days</th>
                                <th scope="col">Start Date</th>
                                <th scope="col">End Date</th>
                                <th scope="col">Reason</th>
                                <th scope="col">Status</th>
                                <th scope='col'>Operations</th>

                            </tr>
                        </thead>
                        {
                                leaves.map((l) => (
                        <tbody>
                        
                                    <tr> 
                                    <th scope='row'>{l.Id}</th>
                                    <th>{l.eid}</th>
                                    <td>{l.fullname}</td>
                                    <td>{l.title}</td>
                                    <td>{l.days}</td>
                                    <td>{l.startdate}</td>
                                    <td>{l.enddate}</td>
                                    <td>{l.reason}</td>
                                    <td><input type='text' value = {l.status} onChange={(e)=> {setStatus(e.target.value);}}></input></td>
                                    <td className='d-flex justify-content-between'>
                                    <button className='btn btn-primary' onClick={()=>{
                                         axios.put(`http://localhost:8070/leave/update/${l._id}`,status).then(()=> {
                                            alert("Leave Application status updated");
                                            window.location.replace("/test"); 
                                        }).catch((err)=>{
                                            alert(err)
                                        })
                                    }}><CreateIcon/></button>
                                        <button className='btn btn-danger' onClick={() =>{
                                             axios.delete(`http://localhost:8070/leave/deletela/${l._id}`)
                                            .then((res) => {
                                                if(res.data === "success"){
                                                    alert("Leave application deleted successfully")
                                                    window.location.replace("/allleave");
                                                }else if(res.data === "error"){
                                                    alert("Error in deleting leave application")
                                                }
                                            }).catch((err) => {
                                                alert(err);
                                            })
                                        }}><DeleteOutlineIcon/></button>
                                    </td>
                                    </tr>
                          
                            </tbody>
                            ))
                                    }    
                        </table>
    </div>
    
</div>

</div>
<Footer></Footer>
</>
    )
}