import React, { useState, useEffect } from "react";
import CreateIcon from "@mui/icons-material/Create";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import axios from "axios";
import AdminDashBoard from "./AdminDashBoard";
import Footer from "../Common/Footer";
import { NavLink, Link } from "react-router-dom";

export default function AllSalary() {
  const [transactions, setTransaction] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    function get() {
      axios
        .get("http://localhost:8070/salary/getsalary")
        .then((res) => {
          console.log(res.data);
          setTransaction(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    get();
  }, []);


  return (
    <>
      <div>
        <AdminDashBoard></AdminDashBoard>
        <div className="mt-5">
          <div className="container">
            <div className="add_btn mt-2 mb-2">
              <br />
              <br />
              <br />
              
                <div className="col-xl-3 col-md-6">
                  <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                    <input
                      className="search-box2"
                      type="text"
                      placeholder="Search here"
                      aria-label="Search for..."
                      aria-describedby="btnNavbarSearch"
                      onChange={(e) => {
                        setQuery(e.target.value);
                      }}
                    />
                  </form>
                </div>
                <br/>
                
                <div className="row1">
                <div class="col-xl-3 col-md-0"> </div>
                  
                <div class="col-xl-3 col-md-0">
                <Link
                to={`http://localhost:3000/reportt/${query}`}
                className="btn btn-primary"
              >
                Yearly Report
              </Link>
                </div>

                <div class="col-xl-3 col-md-6">
                <Link
                to={`http://localhost:3000/reportt/${query}`}
                className="btn btn-primary"
              >
                Monthly Report
              </Link>
                </div>

                <div class="col-xl-3 col-md-6">
                <Link
                to={`http://localhost:3000/reportt/${query}`}
                className="btn btn-primary"
              >
                Daily Report
              </Link>
                </div>
              </div>
            </div>

            <br />

            <table className="table">
              <thead>
                <tr className="table-dark">
                  <th scope="col">Transaction Id</th>
                  <th scope="col">Eid</th>
                  <th scope="col">Employee type</th>
                  <th scope="col">Basic Salary</th>
                  <th scope="col">OT Hours</th>
                  <th scope="col">OT Rate</th>
                  <th scope="col">Net Salary</th>
                  <th scope="col">Payment Date</th>
                  <th scope="col">Operations</th>
                </tr>
              </thead>

              <tbody>
                {transactions
                  .filter(
                    (t) =>
                      t.paydate.slice(5, 7).includes(query) ||
                      t.paydate.slice(0, 7).includes(query) ||
                      t.paydate.includes(query)
                  )
                  .map((t) => (
                    <tr>
                      <th scope="row">{t.Id}</th>
                      <td>{t.eid}</td>
                      <td>{t.type}</td>
                      <td>{t.basicsalary}</td>
                      <td>{t.othrs}</td>
                      <td>{t.otrate}</td>
                      <td>{t.netsalary}</td>
                      <td>{t.paydate}</td>
                      <td className="d-flex justify-content-between">
                        <NavLink to={`/updatet/${t.Id}`}>
                          <button className="btn btn-primary">
                            <CreateIcon />
                          </button>
                        </NavLink>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            axios
                              .delete(
                                `http://localhost:8070/salary/deletet/${t._id}`
                              )
                              .then((res) => {
                                if (res.data === "success") {
                                  alert("Transaction deleted successfully");
                                  window.location.replace("/allsalary");
                                } else if (res.data === "error") {
                                  alert("Error in deleting transaction");
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
      </div>
      <Footer></Footer>
    </>
  );
}
