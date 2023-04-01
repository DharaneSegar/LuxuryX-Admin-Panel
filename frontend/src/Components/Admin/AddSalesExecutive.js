import React,{useState} from 'react';
import axios from "axios";
import AdminDashBoard from "./AdminDashBoard";
import Footer from "../Common/Footer";

function AddSalesExecutive(){
    
    const[sid,setSid] = useState("");
    const [fullname,setFullname] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [repassword,setRePassword] = useState("");
    const [address,setAddress] = useState("");
    const [phone,setPhone] = useState("");
    const [age,setAge] = useState("");
    const [qualification,setQualification] = useState("");
    const [basicsalary,setBasicSalary] = useState("");
    const [gender,setGender] = useState("");

    async function sendData(e){
        e.preventDefault();

        var input = document.getElementById("pswd").value;
        input=input.trim();
        var em = document.getElementById("em").value;
        var s = document.getElementById("sid").value;
        s = s.trim();
        em = em.trim();

        if(input.length<8){
            alert("Password should consist atleast 8 chracters")
        }
        else if(!(input.match(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}/))){    
            alert("Password should contain a simple letter,a capital letter,a number and a special character")
        }
        else if(s.startsWith("S") === false){
            alert("did should start with D ")
        }
        else if(s.length !== 4){
            alert("did should consist 4 characters")
        }
        else if(!(em.match( /^[a-z0-9._%+-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/))){
            alert("Email invalid")
       }
        else if (!sid ||!fullname || !email || !password || !repassword|| !address || !phone || !age || !qualification || !basicsalary || !gender){
            alert("Fields can't be empty");
        }

        else if(password !== repassword){
            alert("Password Mismatch")
        }

        else{
        await axios.post("http://localhost:8070/salesexecutive/addse",{sid,
        fullname,
        email,
        address,
        phone,
        password,
        age,
        qualification,
        basicsalary,
        gender
        }).then((res)=>{
            if(res.data === "Taken"){
                alert("User already available provide another email address ");
            }else if(res.data === "Id"){
                alert("User Id already taken please provide another id");
            }else{
                alert("Inserted new Sales Executive");
                window.location.replace("/allse");
            }
            
        }).catch((err)=>{
            alert(err)
        })
    }
    }

    return(
        <div>
            <AdminDashBoard></AdminDashBoard>
        <div>
            <div >
                <main >
                    <div className="container1">
                        <div className="row justify-content-center">
                            <div className="col-lg-5">
                                <br/><br/><br/>
                                <div className="card shadow-lg border-0 rounded-lg mt-5">
                                    <div className="card-header"><h3 className="text-center font-weight-light my-4">Add Sales Executive</h3></div>
                                    <div className="card-body">
                                        <form method = "post">

                                        <div className="form-floating mb-3">
                                                <label>Sales executive Id :</label><br/><br/>
                                                <input className="form-control" type="text" name = "sid" id="sid"pattern="[S][0-9][0-9][0-9]"placeholder="Type employee id" aria-required ="true" onChange={(e)=>{setSid(e.target
                                                    .value);}} />
                                    
                                            </div>
                                            <div className="form-floating mb-3">
                                                <label>Full name :</label><br/><br/>
                                                <input className="form-control"  type="text" name = "fullname" placeholder="Type full name" onChange={(e)=>{setFullname(e.target.value);}} required/>
                                            </div>

                                            <div className="form-floating mb-3">
                                                <label>Email :</label><br/><br/>
                                                <input className="form-control"  type="email" name = "email" id="em"placeholder="Type email" onChange={(e)=> {setEmail(e.target.value);}} required/>
                                            </div>

                                            <div className="form-floating mb-3">
                                                <label>Password :</label><br/><br/>
                                                <input className="form-control"  type="password" id = "pswd" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" name = "password" placeholder="Type password" onChange={(e)=> {setPassword(e.target.value);}} required/>
                                            </div>

                                            <div className="form-floating mb-3">
                                                <label>Re-Type Password :</label><br/><br/>
                                                <input className="form-control"  type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" name = "repassword" placeholder="Type password" onChange={(e)=> {setRePassword(e.target.value);}} required/>
                                            </div>

                                            <div className="form-floating mb-3">
                                                <label>Address :</label><br/><br/>
                                                <input className="form-control"  type="text" name = "address" placeholder="Type addresss" onChange={(e)=>{setAddress(e.target.value);}} required/>
                                            </div>

                                            <div className="form-floating mb-3">
                                                <label>Contact No :</label><br/><br/>
                                                <input className="form-control" type="text" id="phone" name="phone" placeholder="Type contact number" pattern="[0-9]{10}" onChange={(e)=>{setPhone(e.target.value);}} required></input>
                                            </div>

                                            <div className="form-floating mb-3">
                                                <label>Age :</label><br/><br/>
                                                <input className="form-control"  type="number" name = "age" placeholder="Type age" onChange={(e)=> {setAge(e.target.value);}} required/>
                                            </div>

                                            <div className="form-floating mb-3">
                                                <label>Qualification :</label><br/><br/>
                                                <input className="form-control"  type="text" name = "qualification" placeholder="Type qualification" onChange={(e)=> {setQualification(e.target.value);}} required/>
                                            </div>

                                            <div className="form-floating mb-3">
                                                <label>Basic Salary :</label><br/><br/>
                                                <input className="form-control"  type="text" name = "basicsalary" placeholder="Type basic salary" onChange={(e)=> {setBasicSalary(e.target.value);}} required/>
                                            </div>
                                            <br/>

                                            <div >
                                                <label>Gender : &nbsp;</label>
                                                <input type="radio" id="m" name="gender" value="Male" onChange={(e)=> {setGender(e.target.value);}} required></input>
                                                <label htmlFor="m"> &nbsp;&nbsp;Male &nbsp;</label>
                                                <input type="radio" id="f" name="gender" value="Female" onChange={(e)=> {setGender(e.target.value);}} required></input>
                                                <label htmlFor="f"> &nbsp;&nbsp;Female</label><br/>
                                            </div><br/><br/>

                                                <div className="d-grid">
                                                    <input type='submit' className="btn btn-primary"  onClick = {sendData} value = "Add"></input></div>
                                           
                                        </form>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            </div>
            <Footer></Footer>
            </div>
    )
}

export default AddSalesExecutive;