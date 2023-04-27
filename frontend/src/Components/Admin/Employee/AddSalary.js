import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminDashBoard from "../AdminDashBoard";
import Footer from "../../Common/Footer";

export default function AddSalary() {
  const [eid, setEid] = useState("");
  const [basicsalary, setBasicSalary] = useState("");
  const [othrs, setOTHrs] = useState("");
  const [otrate, setOTRate] = useState("");
  const [paydate, setPaydate] = useState("");
  var [netsalary, setNetSalary] = useState("");

  const [search, setSearch] = useState("");
  const [data, setData] = useState("");
  console.log(search);

  useEffect(() => {
    function getSE() {
      axios
        .get(`http://localhost:8070/salesexecutive/getSid/${search}`)
        .then((res) => {
          console.log(res.data);
          setData(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    getSE();
  }, []);

  async function sendData(e) {
    e.preventDefault();
    if (!eid || !basicsalary || !othrs || !otrate || !paydate || !netsalary) {
      alert("Fields can't be empty");
    } else {
      await axios
        .post("http://localhost:8070/salary/addsal", {
          eid,
          basicsalary,
          othrs,
          otrate,
          paydate,
          netsalary,
        })
        .then((res) => {
          if (res.data === "Success") {
            alert("Inserted new salary transaction ");
            //window.location.replace("/alldd");
          } else {
            alert("Error in inserting");
          }
        })
        .catch((msg) => {
          alert(msg);
        });
    }
  }

  function Calculation() {
    var val = otrate * basicsalary;
    netsalary = basicsalary + othrs * val;
    setNetSalary(netsalary);
  }

  return (
    <>
      <div>
        <AdminDashBoard></AdminDashBoard>
        <div>
          <div className="container1">
            <div className="row justify-content-center">
              <div className="col-lg-5">
                <br />
                <br />
                <br />

                <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                  <div className="input-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Search"
                      aria-label="Search for..."
                      aria-describedby="btnNavbarSearch"
                      onChange={(e) => {
                        setSearch(e.target.value);
                      }}
                    />
                    <input
                      type="submit"
                      className="btn btn-primary"
                      id="btnNavbarSearch"
                      value="Search"
                    ></input>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input
                      className="form-control"
                      type="text"
                      placeholder="salary"
                    />
                  </div>
                </form>
                <div className="card shadow-lg border-0 rounded-lg mt-5">
                  <div className="card-header">
                    <h3 className="text-center font-weight-light my-4">
                      Add Salary
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
                          pattern="[S/D][0-9][0-9][0-9]"
                          onChange={(e) => {
                            setEid(e.target.value);
                          }}
                        />
                      </div>

                      <div className="form-floating mb-3">
                        <label>Basic Salary :</label>
                        <br />
                        <br />
                        <input
                          className="form-control"
                          type="text"
                          onChange={(e) => {
                            setBasicSalary(e.target.value);
                          }}
                        />
                      </div>
                      <div className="form-floating mb-3">
                        <label>OT Hrs :</label>
                        <br />
                        <br />
                        <input
                          className="form-control"
                          type="text"
                          onChange={(e) => {
                            setOTHrs(e.target.value);
                          }}
                        />
                      </div>

                      <div className="form-floating mb-3">
                        <label>OT Rate :</label>
                        <br />
                        <br />
                        <input
                          type="text"
                          className="form-control"
                          onChange={(e) => {
                            setOTRate(e.target.value);
                          }}
                        />
                      </div>

                      <div className="form-floating mb-3">
                        <label>Payment Date:</label>
                        <br />
                        <br />
                        <input
                          className="form-control"
                          type="date"
                          onChange={(e) => {
                            setPaydate(e.target.value);
                          }}
                        />
                      </div>

                      <div className="form-floating mb-3">
                        <label>Net Salary :</label>
                        <br />
                        <br />
                        <input
                          className="form-control"
                          type="text"
                          value={netsalary}
                        />
                      </div>

                      <div className="d-grid">
                        <button
                          className="btn btn-primary btn-block"
                          onClick={Calculation}
                        >
                          Calculate Salary
                        </button>
                        <br />
                      </div>
                      <div className="d-grid">
                        <button
                          className="btn btn-primary btn-block"
                          type="submit"
                          onClick={sendData}
                        >
                          Add transaction
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
