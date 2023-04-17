import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Header from "../common/Header";
import AdminSideBar from "../Admin/AdminSidebar";
import Footer from "../common/Footer";

export default function SearchSupplierTransaction() {
    const { InvoiceNo } = useParams();
    const [supplierTransactions, setsupplierTransactions] = useState([]);

    useEffect(() => {
       
        function getSupplierTransaction() {
            axios.get(`http://localhost:8070/supplierTransaction/getsupplierTransaction/${InvoiceNo}`).then((res) => {
                console.log(res.data);
                setsupplierTransactions(res.data.SupplierTransaction);
            
                console.log(supplierTransactions);
            }).catch((err) => {
                alert(err.message)
            })
        }






        getSupplierTransaction();
    }, [])

    return (

        <div>
        <Header></Header>

        <div className="containerf">
            <AdminSideBar></AdminSideBar>

        <div className="container">
            <table className="table">
                <tr>
                    <th>Invoice No</th>
                    <th>Supplied Date</th>
                    <th>Supplier</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Amount </th>
                    <th>Operations</th>

                </tr>

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
                                    <button className="btn btn-success" onClick={() => {
                                        window.location.replace(`http://localhost:3000/updatesupplierTransaction/${supplierTransaction._id}`)
                                    }}>Update</button>

                                    <button className="btn btn-danger" onClick={() => {
                                        window.location.replace(`http://localhost:3000/deletesupplierTransaction/${supplierTransaction._id}`)
                                    }}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>

            <a href="/supplierTransaction" type="button" class="btn btn-secondary float-right" style={{ marginRight: "40px", width: "8%" }}>back</a>
        </div>
        </div>
        <Footer></Footer>
        </div>

    )
}