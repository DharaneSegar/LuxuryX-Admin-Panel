import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useReactToPrint } from "react-to-print";
import AdminDashBoard from "./AdminDashBoard";
import Footer from "../Common/Footer";

function RegCustomers() {
  const conponentPDF = useRef();
  const [userData, setUserdata] = useState([]);
  //using useeffect to show all  the fetched registered customers
  useEffect(() => {
    getUserData();
  }, []);
  //get all the registered users
  const getUserData = async () => {
    const registerUserdata = async () => {
      axios
        .get("http://localhost:8070/user/")
        .then((res) => setUserdata(res.data))
        .catch((error) => console.log(error));
    };
    registerUserdata();
  };
  //function to generate pdf
  const generatePDF = useReactToPrint({
    content: () => conponentPDF.current,
    documentTitle: "RegisteredUsers",
    onAfterPrint: () => alert("Data saved in PDF"),
  });

  //fetch search function from backend
  const searchHandle = async (event) => {
    let key = event.target.value;
    if (key) {
      let result = await fetch(`http://localhost:8070/user/search/${key}`);
      result = await result.json();
      if (result) {
        setUserdata(result);
      }
    } else {
      getUserData();
    }
  };

  return (
    <div>
      <AdminDashBoard></AdminDashBoard>
      <div className="mt-5">
        <div className="container">
          <div className="add_btn mt-2 mb-2">
            <br />
            <br />
            <div class="col-xl-3 col-md-6"></div>
            <h1 style={{ textAlign: "center" }}>All Registered Users</h1>
            <br />

            <div className="row">
              <div className="col-xl-3 col-md-6">
                <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                  <input
                  type = "text"
                    className="search-product-box"
                    placeholder="search registered user"
                    onChange={searchHandle}
                  />
                </form>
              </div>
              <div class="col-xl-3 col-md-6"></div>
              <div class="col-xl-3 col-md-6"></div>

              <div class="col-xl-3 col-md-6">
                <button className="btn btn-dark" onClick={generatePDF}>
                  Generate Report
                </button>
              </div>
            </div>
          </div>
          <br />

          <div ref={conponentPDF} style={{ width: "100%" }}>
            <table className="table">
              <thead>
                <tr className="table-dark">
                  <th>Customer No</th>
                  <th>Customer Name</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Contact</th>
                  <th>Secret Key</th>
                </tr>
              </thead>

              <tbody>
                {userData.map((uData, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{uData.fname}</td>
                    <td>{uData.email}</td>
                    <td>{uData.address}</td>
                    <td>{uData.contact}</td>
                    <td>{uData.question}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default RegCustomers;
