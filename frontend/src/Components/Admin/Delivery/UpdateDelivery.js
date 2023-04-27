import React,{useState, useEffect} from 'react';
import axios from "axios";
import { Link, useParams, withRouter } from 'react-router-dom';
import AdminDashBoard from '../AdminDashBoard';
import Footer from '../../Common/Footer';

const UpdateDelivery = (props) => {

    const { id } = useParams()
    const [deliveryid,setdeliveryid] = useState("");
    const [orderid,setorderid] = useState("");
    const [trackingid,settrackingid] = useState("");
    const [did,setdid] = useState("");
    const [deliveryaddress,setdeliveryaddress] = useState("");
    const [deliveryfee,setdeliveryfee] = useState("");

    
    useEffect(() => {
        axios.get(`http://localhost:8070/delivery/get/${id}`).then((res) => {
            console.log(res.data)
            setdeliveryid(res.data.delivery.deliveryid)
            setorderid(res.data.delivery.orderid)
            settrackingid(res.data.delivery.trackingid)
            setdid(res.data.delivery.did)
            setdeliveryaddress(res.data.delivery.deliveryaddress)
            setdeliveryfee(res.data.delivery.deliveryfee)
        })
            .catch((error) => {
                console.log(error.response.data)
            })
    }, [])

    const update = (e) => {
        e.preventDefault() //Like preventing page to refresh

        const Deliveries = {
            deliveryid,
            orderid,
            trackingid,
            did,
            deliveryaddress,
            deliveryfee,
        }

        if (deliveryid === "" || orderid === "" || trackingid === "" || did === "" || deliveryaddress === "" || deliveryfee === "") {
            //So if either any of this is empty the function will alert and return back
            alert("All the fields are mandatory")
            return
        }


        axios.put(`http://localhost:8070/delivery/update/${id}`, Deliveries).then(() => {
            console.log("Delivery updated successfully");
            alert("Delivery Updated Successfully")
            window.location.replace('/DeliveryList')
        })
            .catch((error) => {
                console.log(error.response.data)
            })



    }

    

    return(
        <div>
            <AdminDashBoard></AdminDashBoard>
        <div>
            <div>
                <main >
                    <div className="container1">
                        <div className="row justify-content-center">
                            <div className="col-lg-5">
                                <br/><br/><br/>
                                <div className="card shadow-lg border-0 rounded-lg mt-5">
                                    <div className="card-header"><h3 className="text-center font-weight-light my-4">Update Delivery </h3></div>
                                    <div className="card-body">
                                        <form onSubmit={update}>

                                        <div className="form-floating mb-3">
                                                <label>Delivery Id :</label><br/><br/>
                                                <input className="form-control"  type="number" name = "did" id="deliveryid" placeholder="Type delivery id" aria-required ="true" value={deliveryid} 
                                                onChange={(e)=>{setdeliveryid(e.target
                                                    .value);}} required/>
                                    
                                            </div>
                                            <div className="form-floating mb-3">
                                                <label>Order Id :</label><br/><br/>
                                                <input className="form-control"  type="number" name = "oid" id="orderid" placeholder="Type order id" value={orderid} 
                                                onChange={(e)=> {setorderid(e.target.value);}} required/>
                                            </div>

                                            <div className="form-floating mb-3">
                                                <label>Tracking Id :</label><br/><br/>
                                                <input className="form-control"  type="number" name = "tid" id="trackingid" placeholder="Type tracking id" value={trackingid}
                                                 onChange={(e)=> {settrackingid(e.target.value);}} required/>
                                            </div>

                                            <div className="form-floating mb-3">
                                                <label>Delivery Driver Id :</label><br/><br/>
                                                <input className="form-control"  type="text" name = "did" placeholder="Type Delivery Driver id" value={did} onChange={(e)=> {setdid(e.target.value);}} required/>
                                            </div>

                                            <div className="form-floating mb-3">
                                                <label>Delivery address :</label><br/><br/>
                                                <input className="form-control"  type="text" name = "da" id="deliveryaddress" placeholder="Type delivery address" value={deliveryaddress}
                                                 onChange={(e)=> {setdeliveryaddress(e.target.value);}} required/>
                                            </div>

                                            <div className="form-floating mb-3">
                                                <label>Delivery fee :</label><br/><br/>
                                                <input className="form-control"  type="number" name = "df"  id="deliveryfee" placeholder="Type delivery fee" value={deliveryfee}
                                                onChange={(e)=> {setdeliveryfee(e.target.value);}} required/>
                                            </div>

                                        
                                            <br/>

                                                <div className="d-grid">
                                                    <input type='submit' className="btn btn-primary btn-block" value="update" />
                                                </div>
                                           
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
    );
}


export default UpdateDelivery;