import React, { useState } from "react";
import axios from "axios";
import Footer from "../Common/Footer";
import SalesExecutiveDashBoard from "./SalesExecutiveDashBoard";

function ApplyForLeaveSE() {
  const [title, setTitle] = useState("");
  const [days, setDays] = useState("");
  const [startdate, setStartDate] = useState("");
  const [enddate, setEndDate] = useState("");
  const [reason, setReason] = useState("");
  const [status, setStatus] = useState("");

  var user = JSON.parse(localStorage.getItem("SEInfo"));

  const eid = user.sid;
  const fullname = user.fullname;
  async function sendData(e) {
    e.preventDefault();

    setStatus("");

    if (!title || !days || !startdate || !enddate || !reason) {
      alert("Fields can't be empty");
    } else {
      await axios
        .post("http://localhost:8070/leave/addlase", {
          eid,
          fullname,
          title,
          days,
          startdate,
          enddate,
          reason,
          status,
        })
        .then((res) => {
          if (res.data === "Success") {
            alert("Leave application submitted successfully");
          } else if (res.data === "No id") {
            alert("Couldn't find id");
          } else {
            alert("Error in submitting");
          }
        })
        .catch((msg) => {
          alert(msg);
        });
    }
  }
  return (
    <>
      <div>
        <SalesExecutiveDashBoard></SalesExecutiveDashBoard>
        <div>
          <div className="container1">
            <div className="row justify-content-center">
              <div className="col-lg-5">
                <br />
                <br />
                <br />
                <div className="card shadow-lg border-0 rounded-lg mt-5">
                  <div className="card-header">
                    <h3 className="text-center font-weight-light my-4">
                      Leave Application
                    </h3>
                  </div>
                  <div className="card-body">
                    <form method="post">
                      <div className="form-floating mb-3">
                        <label>Employee Id :</label>
                        <br />
                        <br />
                        <input
                          className="form-control"
                          type="text"
                          value={user.sid}
                          readOnly
                        />
                      </div>

                      <div className="form-floating mb-3">
                        <label>Full name :</label>
                        <br />
                        <br />
                        <input
                          className="form-control"
                          type="text"
                          value={user.fullname}
                          readOnly
                        />
                      </div>
                      <div className="form-floating mb-3">
                        <label>Title :</label>
                        <br />
                        <br />
                        <input
                          className="form-control"
                          type="text"
                          onChange={(e) => {
                            setTitle(e.target.value);
                          }}
                        />
                      </div>

                      <div className="form-floating mb-3">
                        <label>Period of Leave :</label>
                        <br />
                        <br />
                        <input
                          type="number"
                          pattern="^[0-9]"
                          title="Only Number"
                          min="1"
                          step="1"
                          className="form-control"
                          onChange={(e) => {
                            setDays(e.target.value);
                          }}
                          required="required"
                          id="period"
                          name="period"
                        />
                      </div>

                      <div className="form-floating mb-3">
                        <label>Start-Date :</label>
                        <br />
                        <br />
                        <input
                          className="form-control"
                          type="date"
                          name="start_date"
                          id="start_date"
                          onChange={(e) => {
                            setStartDate(e.target.value);
                          }}
                        />
                      </div>

                      <div className="form-floating mb-3">
                        <label>End-Date :</label>
                        <br />
                        <br />
                        <input
                          className="form-control"
                          type="date"
                          name="start_date"
                          id="start_date"
                          onChange={(e) => {
                            setEndDate(e.target.value);
                          }}
                        />
                      </div>

                      <div className="form-floating mb-3">
                        <label>Reason for Leave:</label>
                        <br />
                        <br />
                        <input
                          className="form-control"
                          type="textarea"
                          id="reason"
                          name="reason"
                          onChange={(e) => {
                            setReason(e.target.value);
                          }}
                        />
                        {/* <textarea className="form-control"  id="reason" style={"resize: none"} name="reason" rows={"5"} cols={"60"}/> */}
                      </div>

                      <div className="d-grid">
                        <button
                          className="btn btn-primary btn-block"
                          type="submit"
                          onClick={sendData}
                        >
                          Apply Leave
                        </button>
                        <br />
                      </div>
                      <div className="d-grid">
                        <button
                          className="btn btn-primary btn-block"
                          type="reset"
                        >
                          Reset
                        </button>
                        <br />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default ApplyForLeaveSE;
