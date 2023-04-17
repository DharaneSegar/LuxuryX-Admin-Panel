import React, { useState } from 'react';

import Header from "../Admin/Header";
import AdminSideBar from '../Admin/AdminSidebar';
import Footer from "../Common/Footer";
import axios from "axios";
import React, { useState } from "react";
import axios from "axios";
import AdminDashBoard from "./AdminDashBoard";
import Footer from "../Common/Footer";


export default function AddSupplier() {

    const [name, setname] = useState("");
    const [address, setaddress] = useState("");
    const [contactNumber, setcontactNumber] = useState("");
    const [email, setemail] = useState("");
    const [productsSupplied, setproductsSupplied] = useState("");

    function sendData(e) {
        e.preventDefault();

        const newSupplier = {
            name,
            address,
            contactNumber,
            email,
            productsSupplied
        }

        axios.post("http://localhost:8070/supplier/addsupplier", e = newSupplier).then(() => {
            alert("Supplier details added");
            window.location.replace("http://localhost:3000/supplier");

        }).catch((err) => {
            alert(err)
        })

    }

    return (
        <div>
      <AdminDashBoard></AdminDashBoard>
      <div>
        <div>
          <main>
            <div className="container1">
              <div className="row justify-content-center">
                <div className="col-lg-5">
                  <br />
                  <br />
                  <br />
                  <div className="card shadow-lg border-0 rounded-lg mt-5">
                    <div className="card-header">
                      <h3 className="text-center font-weight-light my-4">
                        Add Sales Executive
                      </h3>
                    </div>
                    <div className="card-body">
                      <form method="post">
                        <div className="form-floating mb-3">
                          <label>Sales executive Id :</label>
                          <br />
                          <br />
                          <input
                            className="form-control"
                            type="text"
                            name="sid"
                            id="sid"
                            pattern="[S][0-9][0-9][0-9]"
                            placeholder="Type employee id"
                            aria-required="true"
                            onChange={(e) => {
                              setSid(e.target.value);
                            }}
                          />
                        </div>
                        <div className="form-floating mb-3">
                          <label>Full name :</label>
                          <br />
                          <br />
                          <input
                            className="form-control"
                            type="text"
                            name="fullname"
                            placeholder="Type full name"
                            onChange={(e) => {
                              setFullname(e.target.value);
                            }}
                            required
                          />
                        </div>

                        <div className="form-floating mb-3">
                          <label>Email :</label>
                          <br />
                          <br />
                          <input
                            className="form-control"
                            type="email"
                            name="email"
                            id="em"
                            placeholder="Type email"
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                            required
                          />
                        </div>

                        <div className="form-floating mb-3">
                          <label>Password :</label>
                          <br />
                          <br />
                          <input
                            className="form-control"
                            type="password"
                            id="pswd"
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                            name="password"
                            placeholder="Type password"
                            onChange={(e) => {
                              setPassword(e.target.value);
                            }}
                            required
                          />
                        </div>

                        <div className="form-floating mb-3">
                          <label>Re-Type Password :</label>
                          <br />
                          <br />
                          <input
                            className="form-control"
                            type="password"
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                            name="repassword"
                            placeholder="Type password"
                            onChange={(e) => {
                              setRePassword(e.target.value);
                            }}
                            required
                          />
                        </div>

                        <div className="form-floating mb-3">
                          <label>Address :</label>
                          <br />
                          <br />
                          <input
                            className="form-control"
                            type="text"
                            name="address"
                            placeholder="Type addresss"
                            onChange={(e) => {
                              setAddress(e.target.value);
                            }}
                            required
                          />
                        </div>

                        <div className="form-floating mb-3">
                          <label>Contact No :</label>
                          <br />
                          <br />
                          <input
                            className="form-control"
                            type="text"
                            id="phone"
                            name="phone"
                            placeholder="Type contact number"
                            pattern="[0-9]{10}"
                            onChange={(e) => {
                              setPhone(e.target.value);
                            }}
                            required
                          ></input>
                        </div>

                        <div className="form-floating mb-3">
                          <label>Age :</label>
                          <br />
                          <br />
                          <input
                            className="form-control"
                            type="number"
                            name="age"
                            placeholder="Type age"
                            onChange={(e) => {
                              setAge(e.target.value);
                            }}
                            required
                          />
                        </div>

                        <div className="form-floating mb-3">
                          <label>Qualification :</label>
                          <br />
                          <br />
                          <input
                            className="form-control"
                            type="text"
                            name="qualification"
                            placeholder="Type qualification"
                            onChange={(e) => {
                              setQualification(e.target.value);
                            }}
                            required
                          />
                        </div>

                        <div className="form-floating mb-3">
                          <label>Basic Salary :</label>
                          <br />
                          <br />
                          <input
                            className="form-control"
                            type="text"
                            name="basicsalary"
                            placeholder="Type basic salary"
                            onChange={(e) => {
                              setBasicSalary(e.target.value);
                            }}
                            required
                          />
                        </div>
                        <br />

                        <div>
                          <label>Gender : &nbsp;</label>
                          <input
                            type="radio"
                            id="m"
                            name="gender"
                            value="Male"
                            onChange={(e) => {
                              setGender(e.target.value);
                            }}
                            required
                          ></input>
                          <label htmlFor="m"> &nbsp;&nbsp;Male &nbsp;</label>
                          <input
                            type="radio"
                            id="f"
                            name="gender"
                            value="Female"
                            onChange={(e) => {
                              setGender(e.target.value);
                            }}
                            required
                          ></input>
                          <label htmlFor="f"> &nbsp;&nbsp;Female</label>
                          <br />
                        </div>

                        <div className="form-floating mb-3">
                          <label>Add Image :</label>
                          <br />
                          <br />
                          <input
                            type="file"
                            placeholder="Add Image"
                            accept="image/"
                            onChange={convert}
                            required
                          />
                        </div>

                        <br />

                        <div className="d-grid">
                          <input
                            type="submit"
                            className="btn btn-primary"
                            onClick={sendData}
                            value="Add"
                          ></input>
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
    )
}