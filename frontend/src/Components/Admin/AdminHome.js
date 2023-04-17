import React from "react";
import AdminDashBoard from "./AdminDashBoard";
import Footer from "../Common/Footer";

function AdHome() {
  var user = JSON.parse(localStorage.getItem("AdminInfo"));

  return (
    <>
      <div>
        <AdminDashBoard></AdminDashBoard>

        <main>
          <div className="container-fluid px-4">
            <br />
            <br />
            <br />
            <h1 className="mt-4">Welcome {user.fullname} !!</h1>

            <img id="logo" src={require("../Common/images/logo.png")} />
          </div>
        </main>

        <Footer></Footer>
      </div>
    </>
  );
}

export default AdHome;
