import React, { useState, useEffect } from "react";
import CreateIcon from "@mui/icons-material/Create";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import axios from "axios";
import AdminDashBoard from "./AdminDashBoard";
import Footer from "../Common/Footer";

export default function AllDeliveryDriver() {
  const [image, setImage] = useState("");

  function GET(id) {
    axios
      .get(`http://localhost:8070/deliverydriver/getDid/${id}`)
      .then((res) => {
        setImage(res.data.dd.image);
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  const [deliverydrivers, setDeliveryDrivers] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    function getDD() {
      axios
        .get(`http://localhost:8070/deliverydriver/getdd`)
        .then((res) => {
          console.log(res.data);
          setDeliveryDrivers(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    getDD();
  }, []);

  function modal() {
    var pdf = document.getElementById("pdf").value;
    pdf.fadeIn().css("display", "flex");
  }

  return (
    <div>
      <AdminDashBoard></AdminDashBoard>
      <div className="mt-5">
        <div className="container">
          <div className="add_btn mt-2 mb-2">
            <br />
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
              <div className="input-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Type Did/Name here"
                  aria-label="Search for..."
                  aria-describedby="btnNavbarSearch"
                  onChange={(e) => {
                    setQuery(e.target.value);
                  }}
                />
              </div>
            </form>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a className="btn btn-primary" href="http://localhost:3000/adddd">
              Add Delivery Driver
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              className="btn btn-primary"
              href="http://localhost:3000/reportdd"
              id="pdf"
              onClick={modal}
            >
              Generate Report
            </a>
          </div>
          <br />

          <table className="table">
            <thead>
              <tr className="table-dark">
                <th scope="col">id</th>
                <th scope="col">Fullname</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Address</th>
                <th scope="col">Phone</th>
                <th scope="col">Age</th>
                <th scope="col">License No</th>
                <th scope="col">Vehicle No</th>
                <th scope="col">NIC</th>
                <th scope="col">Basic Salary</th>
                <th scope="col">Operations</th>
              </tr>
            </thead>
            <tbody>
              {deliverydrivers
                .filter(
                  (d) =>
                    d.did.toLowerCase().includes(query) ||
                    d.fullname.toLowerCase().includes(query)
                )
                .map((deliverydriver) => (
                  <tr>
                    <th scope="row">{deliverydriver.did}</th>
                    <td>{deliverydriver.fullname}</td>
                    <td>{deliverydriver.email}</td>
                    <td>{deliverydriver.password}</td>
                    <td>{deliverydriver.address}</td>
                    <td>{deliverydriver.phone}</td>
                    <td>{deliverydriver.age}</td>
                    <td>{deliverydriver.licenseno}</td>
                    <td>{deliverydriver.vehicleno}</td>
                    <td>{deliverydriver.nic}</td>
                    <td>{deliverydriver.basicsalary}</td>
                    <td className="d-flex justify-content-between">
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          window.location.replace(
                            `/updatedd/${deliverydriver.did}`
                          );
                        }}
                      >
                        <CreateIcon />
                      </button>
                      <button
                        className="btn"
                        onClick={(e) => GET(deliverydriver.did)}
                        data-toggle="modal"
                        data-target="#myModal"
                      >
                        <RemoveRedEyeIcon />
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          axios.delete(
                            `http://localhost:8070/deliverydriver/deletedd/${deliverydriver._id}`
                          );
                          axios
                            .delete(
                              `http://localhost:8070/t/delete/${deliverydriver.did}`
                            )
                            .then((res) => {
                              if (res.data === "success") {
                                alert("Delivery Driver deleted successfully");
                                window.location.replace("/alldd");
                              } else if (res.data === "error") {
                                alert("Error in deleting Delivery Driver");
                              }
                            })
                            .catch((err) => {
                              alert(err);
                            });
                        }}
                      >
                        <DeleteOutlineIcon />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer></Footer>
      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <img id="pic1" src={image} data-dismiss="modal" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
