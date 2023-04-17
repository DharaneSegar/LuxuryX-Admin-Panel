import SalesExecutiveDashBoard from "./SalesExecutiveDashBoard";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Footer from "../Common/Footer";

function ViewLeaveSE() {
  var user = JSON.parse(localStorage.getItem("SEInfo"));
  const [leaves, setLeaves] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    function get() {
      axios
        .get(`http://localhost:8070/leave/getEid/${user.sid}`)
        .then((res) => {
          console.log(res.data);
          setLeaves(res.data);
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
        <SalesExecutiveDashBoard></SalesExecutiveDashBoard>
        <div className="mt-5">
          <div className="container">
            <div className="add_btn mt-2 mb-2">
              <br />
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                <div className="input-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Type Leave title here"
                    aria-label="Search for..."
                    aria-describedby="btnNavbarSearch"
                    onChange={(e) => {
                      setQuery(e.target.value);
                    }}
                  />
                </div>
              </form>
            </div>
            <br />
            <br />

            <table className="table">
              <thead>
                <tr className="table-dark">
                  <th scope="col">Title</th>
                  <th scope="col">Days</th>
                  <th scope="col">Start Date</th>
                  <th scope="col">End Date</th>
                  <th scope="col">Reason</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              {leaves
                .filter((e) => e.title.toLowerCase().includes(query))
                .map((e) => (
                  <tbody>
                    <tr>
                      <td>{e.title}</td>
                      <td>{e.days}</td>
                      <td>{e.startdate}</td>
                      <td>{e.enddate}</td>
                      <td>{e.reason}</td>
                      <td>{e.status}</td>
                    </tr>
                  </tbody>
                ))}
            </table>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default ViewLeaveSE;
