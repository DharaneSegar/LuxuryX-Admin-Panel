import { Form, Button } from "react-bootstrap";
import axios from "axios";
import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import AdminDashBoard from './AdminDashBoard';
import Footer from '../Common/Footer';


function UpdateLeave1(){
    const[Id,setId] = useState();
    const[status,setStatus] = useState("");
    const {id} = useParams();

    useEffect(() =>{
        function GET(){
            axios.get(`http://localhost:8070/leave/getId/${id}`).then((res) => {    
                setId(res.data.la._id);
            
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
        <Form onSubmit={updateData}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Status"
                    name="name"
                    value={status}
                    onChange={(e)=> setStatus(e.target.value)}
                    required
                />
            </Form.Group>
           
            <Button variant="success" type="submit" block>
                Edit Status
            </Button>
        </Form>
      
        </div>
        <Footer></Footer>
        </div>
        </>
    

    )
}

export default UpdateLeave1;
