
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import Header from "../Admin/Header";
import AdminSideBar from "../Admin/AdminSidebar";
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Footer from "../Common/Footer";
import SearchIcon from '@mui/icons-material/Search';

export default function AllSupplierTransaction() {
    
    const [InvoiceNo,setInvoiceNo] = useState("");
    const [supplierTransactions, setSupplierTransaction] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        
        function getSupplierTransaction() {
         
            axios.get("http://localhost:8070/supplierTransaction/supplierTransaction").then((res) => {
                console.log(res.data);
                setSupplierTransaction(res.data);

            }).catch((err) => {
                alert(err.message);
            })
        }

        getSupplierTransaction();
    }, [])

    return (
        <div>
        <Header></Header>



        <div className="containerf">
            <AdminSideBar></AdminSideBar>

        <div className="container" style={{marginTop:"100px"}}>
            <h3>All Supplier Trasactions</h3>



            
                <div >
                    
                <div style={{marginRight:"0px", marginLeft:"auto", width:"30%"}}>
                        <input type="text" id="search" placeholder="Enter Invoice no" onChange={(e) => { setInvoiceNo(e.target.value) }} />
                        <button class="btn btn-primary btnView" style={{ marginTop:"10px",marginLeft:"120px", marginBottom:"10px"}}onClick={() => {
                            window.location.replace(`http://localhost:3000/getsupplierTransaction/${InvoiceNo}`);
                        }}>Search</button>
                        
                    </div>

                    <button style={{marginBottom:"10px", marginLeft:"auto"}} className="btn btn-primary" onClick={() => {
          window.location.replace(`http://localhost:3000/supplierTransactionReport`); }}>Generate Supplier Transaction Report</button>


                       

                   

                </div>
                <div>
                <table class="table ">
                <thead>
                    <tr className="table-dark">

                        <th scope='col'>Invoice No</th>
                        <th scope='col'>Supplied Date</th>
                        <th scope='col'>Supplier</th>
                        <th scope='col'>Product Name</th>
                        <th scope='col'>Quantity</th>
                        <th scope='col'>Amount</th>
                        <th scope='col'>Operations</th>
                       

                    </tr>
                    </thead>

                    <tbody>
                        {
                            
                            supplierTransactions.map((supplierTransaction) => (

                                <tr scope="row">
                                    <td >{supplierTransaction.InvoiceNo}</td>
                                    <td >{supplierTransaction.SuppliedDate}</td>
                                    <td >{supplierTransaction.Supplier}</td>
                                    <td >{supplierTransaction.ProductName}</td>
                                    <td >{supplierTransaction.Quantity}</td>
                                    <td >{supplierTransaction.Amount}</td>
                                    
                                        <td>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <button className="btn btn-primary" style={{ marginRight:"10px" }}onClick={() => {
                                                window.location.replace(`http://localhost:3000/updatesupplierTransaction/${supplierTransaction._id}`);
                                            }}><CreateIcon /></button>
                                        
                                            <button className="btn btn-danger" onClick={() => {
                                                
                                                window.location.replace(`http://localhost:3000/deletesupplierTransaction/${supplierTransaction._id}`);
                                            }}><DeleteOutlineIcon /></button>
                                        </td>
                                    
                                </tr>

                            ))
                        }

                    </tbody>
                    </table>
                </div>
                <a href="/supplierTransaction" type="button" class="btn btn-secondary float-right" style={{width:"100px", marginTop:"120%",marginLeft:"80px"}}>back <i class="fa fa-reply"></i></a>
            

        </div>
        </div>


<Footer></Footer>
</div >
    )
}