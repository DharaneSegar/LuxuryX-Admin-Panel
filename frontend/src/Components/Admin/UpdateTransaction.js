import React,{useState,useEffect} from 'react';
import axios from "axios";
import AdminDashBoard from "./AdminDashBoard";
import Footer from "../Common/Footer";
import { useParams } from 'react-router-dom';

export default function UpdateSalary(){

    const [Id,setId] = useState("");
    const [type,setType] = useState("");
    const[eid,setEid] = useState("");
    const[basicsalary,setBasicSalary] = useState("");
    const[othrs,setOTHrs] = useState("");
    const[otrate,setOTRate] = useState("");
    const [paydate,setPaydate] = useState("");
    var[netsalary,setNetSalary] = useState("");

    const {id} = useParams();

    useEffect(()=>{
        function GET(){
            axios.get(`http://localhost:8070/salary/get/${id}`).then((res) => {
            setId(res.data.t._id)
            setEid(res.data.t.eid)
            setBasicSalary(res.data.t.basicsalary);
            setOTHrs(res.data.t.othrs)
            setOTRate(res.data.t.otrate)
            setPaydate(res.data.t.paydate)
            setNetSalary(res.data.t.netsalary)
        }).catch((err) => {
            alert(err.message);
        })
    }

    GET();
},[])


     async function updateData(e){
        e.preventDefault();

        await axios.put(`http://localhost:8070/salary/updatet/${Id}`,{
        othrs,
        otrate,
        paydate,
        netsalary
        }).then((res)=>{
            if(res.data === "Done" ){
                alert("Transaction updated successfully ");
                window.location.replace("/allse");
            }else{
                alert("Couldn't update transaction");
            window.location.replace("/allse");

            }
            
        }).catch((msg)=>{
            alert(msg);
        })
     }

     function Calculation(){
        const r = Number(otrate);
        const b = Number(basicsalary);
        const h = Number(othrs);
        var val = (r/100) * b;
        netsalary = b + (h*val);
        setNetSalary(netsalary);

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
                                    <div className="card-header"><h3 className="text-center font-weight-light my-4">Add Salary</h3></div>
                                    <div className="card-body">
                                        <form>
                                            <br/>

                                        <div >
                                        &nbsp;&nbsp;<label>Employee type : &nbsp;&nbsp;&nbsp;</label>
                                        <input className="form-control"  type="text" />
                                                
                                            </div>

                                        <div className="form-floating mb-3">
                                                <label>Employee Id :</label><br/><br/>
                                                <input className="form-control"  type="text" />
                                               
                                            </div>

                                            <div className="form-floating mb-3">
                                                <label>Basic Salary :</label><br/><br/>
                                                <input className="form-control"  type="text" />
                                               
                                            </div>
                                            <div className="form-floating mb-3">
                                                <label>OT Hrs :</label><br/><br/>
                                                <input className="form-control"  type="text" onChange={(e) => {setOTHrs(e.target.value)}} />
                                               
                                            </div>

                                            <div className="form-floating mb-3">
                                                <label>OT Rate :</label><br/><br/>
                                                <input type="text"  className="form-control" onChange={(e) => {setOTRate(e.target.value)}}/>
        
                                            </div>

                                            <div className="form-floating mb-3">
                                                <label>Payment Date:</label><br/><br/>
                                                <input className="form-control"  type="date" onChange={(e) => {setPaydate(e.target.value)}}/>
                                    
                                            </div>

                                            <div className="form-floating mb-3">
                                                <label>Net Salary :</label><br/><br/>
                                                <input className="form-control"  type="text" value = {netsalary}/>
                                    
                                            </div>

                                            
                                        
                                                <div className="d-grid">
                                                    <button className="btn btn-primary btn-block"  onClick={Calculation}>Calculate Salary</button><br/>
                                                    
                                                </div>
                                                <form>
                                                <div className="d-grid">
                                                    <button className="btn btn-primary btn-block" type="submit" onClick={updateData}>Add transaction</button><br/>
                                                    
                                                </div>
                                                </form>
                                           
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