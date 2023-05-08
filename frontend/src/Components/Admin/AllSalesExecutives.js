import React, { useState, useEffect } from "react";
import CreateIcon from "@mui/icons-material/Create";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import axios from "axios";
import AdminDashBoard from "./AdminDashBoard";
import Footer from "../Common/Footer";
import { NavLink } from "react-router-dom";

export default function AllSalesExecutive() {
  const [image, setImage] = useState("");

  function GET(id) {
    axios
      .get(`http://localhost:8070/salesexecutive/getSid/${id}`)
      .then((res) => {
        setImage(res.data.se.image);
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  const [salesexecutives, setSalesExecutives] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    function getSE() {
      axios
        .get("http://localhost:8070/salesexecutive/getse")
        .then((res) => {
          console.log(res.data);
          setSalesExecutives(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    getSE();
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
            
            <div className="row justify-content-center"><h2 style={{ marginLeft: "200px" }}>Sales Executive List</h2></div>
            <br />
            <div>
              <input
                type="text"
                id="searchDelivery"
                style={{ marginLeft: "250px" }}
                placeholder="Type Sid/Name here"
                onChange={(e) => setQuery(e.target.value)}
              />
              <a
                className="btn btn-primary"
                href="http://localhost:3000/addse"
                style={{ marginLeft: "120px" }}
              >
                Add Sales Executive
              </a>

              <a
                className="btn btn-primary"
                href="http://localhost:3000/reportse"
                style={{ marginLeft: "120px" }}
                onClick={modal}
              >
                Generate Report
              </a>
            </div>

            <br />
          </div>
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
                <th scope="col">Qualification</th>
                <th scope="col">Basic Salary</th>
                <th scope="col">Gender</th>
                <th scope="col">Operations</th>
              </tr>
            </thead>
            <tbody>
              {salesexecutives
                .filter(
                  (s) =>
                    s.sid.toLowerCase().includes(query) ||
                    s.fullname.toLowerCase().includes(query)
                )
                .map((salesexecutive) => (
                  <tr>
                    <th scope="row">{salesexecutive.sid}</th>
                    <td>{salesexecutive.fullname}</td>
                    <td>{salesexecutive.email}</td>
                    <td>{salesexecutive.password}</td>
                    <td>{salesexecutive.address}</td>
                    <td>{salesexecutive.phone}</td>
                    <td>{salesexecutive.age}</td>
                    <td>{salesexecutive.qualification}</td>
                    <td>{salesexecutive.basicsalary}</td>
                    <td>{salesexecutive.gender}</td>
                    <td className="d-flex justify-content-between">
                      <NavLink to={`/updatese/${salesexecutive.sid}`}>
                        <button className="btn btn-primary">
                          <CreateIcon />
                        </button>
                      </NavLink>
                      <button
                        className="btn"
                        onClick={(e) => GET(salesexecutive.sid)}
                        data-toggle="modal"
                        data-target="#myModal"
                      >
                        <RemoveRedEyeIcon />
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          axios.delete(
                            `http://localhost:8070/salesexecutive/deletese/${salesexecutive._id}`
                          );
                          axios
                            .delete(
                              `http://localhost:8070/t/delete/${salesexecutive.sid}`
                            )
                            .then((res) => {
                              if (res.data === "success") {
                                alert("Sales Executive deleted successfully");
                                window.location.replace("/allse");
                              } else if (res.data === "error") {
                                alert("Error in deleting sales executive");
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
