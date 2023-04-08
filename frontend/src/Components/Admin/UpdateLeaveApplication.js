import axios from "axios";
import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import AdminDashBoard from './AdminDashBoard';
import Footer from '../Common/Footer';

function UpdateLeave(){
    const[Id,setId] = useState();
    const [eid,setEid] = useState("");
    const [fullname,setFullname]  = useState("");
    const [title,setTitle] = useState("");
    const [days,setDays] = useState("");
    const [startdate,setStartDate] = useState("");
    const [enddate,setEndDate] = useState("");
    const [reason,setReason] = useState("");
    const [status,setStatus] = useState();

    const {id} = useParams();

    useEffect(() =>{
        function GET(){
            axios.get(`http://localhost:8070/leave/getId/${id}`).then((res) => {    
                setId(res.data.la._id);
                setEid(res.data.la.eid);
                setFullname(res.data.la.fullname);
                setTitle(res.data.la.title);
                setDays(res.data.la.days);
                setStartDate(res.data.la.startdate);
                setEndDate(res.data.la.enddate);
                setReason(res.data.la.reason);
                setStatus(res.data.la.status);

            
        }).catch((err) => {
            alert(err.message);
        })

        }
       
        GET();
    },[]);

    async function updateData(e){
        e.preventDefault();

        const newStatus = {status}

        await axios.put(`http://localhost:8070/leave/update/${Id}`,newStatus).then(()=> {
            alert("Leave Application status updated");
            window.location.replace("/allleave"); 
        }).catch((err)=>{
            alert(err)
        })
    }

 
    return(
        <>
        <div> 
        <AdminDashBoard></AdminDashBoard>
        <div> 
      
        <div className="container1" >
                        <div className="row justify-content-center">
                            <div className="col-lg-5" >
                                <br/><br/><br/>
                                <div className="card shadow-lg border-0 rounded-lg mt-5">
                                    <div className="card-header"><h3 className="text-center font-weight-light my-4">Update Status</h3></div>
                                    <div className="card-body">
                                        <form method="post">
                                        <div className="form-floating mb-3">
                                                <label>Employee Id :</label><br/><br/>
                                                <input className="form-control"  type="text"  value = {eid} pattern="[S/D][0-9][0-9][0-9]" />
                                               
                                            </div>

                                            <div className="form-floating mb-3">
                                                <label>Full name :</label><br/><br/>
                                                <input className="form-control"  value = {fullname} type="text" />
                                               
                                            </div>
                                            <div className="form-floating mb-3">
                                                <label>Title :</label><br/><br/>
                                                <input className="form-control"  value = {title} type="text" />
                                               
                                            </div>

                                            <div className="form-floating mb-3">
                                                <label>Period of Leave :</label><br/><br/>
                                                <input type="number" pattern="^[0-9]" title='Only Number' value = {days} min="1" step="1"  className="form-control" required="required" id="period" name="period"/>
        
                                            </div>

                                            <div className="form-floating mb-3">
                                                <label>Start-Date :</label><br/><br/>
                                                <input className="form-control"  type="date" name="start_date" value = {startdate} id="start_date" />
                                    
                                            </div>

                                            <div className="form-floating mb-3">
                                                <label>End-Date :</label><br/><br/>
                                                <input className="form-control"  type="date" name="start_date"  value= {enddate}id="start_date" />
                                    
                                            </div>

                                            <div className="form-floating mb-3" >
                                            <label>Reason for Leave:</label><br/><br/>
                                            <input className="form-control" type="textarea" id="reason" value = {reason}name="reason" />
                                            {/* <textarea className="form-control"  id="reason" style={"resize: none"} name="reason" rows={"5"} cols={"60"}/> */}
                                            </div>

                                            <div >
                                            <label>Status : &nbsp;</label>
                                                <input type="radio" id="a" name="status" value="Accepted" onChange={(e)=> {setStatus(e.target.value);}} required></input>
                                                <label htmlFor="m"> &nbsp;&nbsp;Accepted &nbsp;</label>
                                                <input type="radio" id="d" name="status" value="Denied" onChange={(e)=> {setStatus(e.target.value);}} required></input>
                                                <label htmlFor="f"> &nbsp;&nbsp;Denied</label><br/>
                                            </div><br/>

                                                <div className="d-grid">
                                                    <button className="btn btn-primary btn-block" type="submit" onClick={updateData}>Update</button><br/>
                                                    
                                                </div>
                                                
                                           
                                        </form>
                                    </div>
                                   
                                </div>
                            </div>
           </div>
           </div>
           
           </div>
        <Footer></Footer>
        </div>
        </>
    

    )
}

export default UpdateLeave;