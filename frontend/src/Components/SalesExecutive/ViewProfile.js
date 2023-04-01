import React from "react";
import SalesExecutiveDashBoard from "./SalesExecutiveDashBoard";
import Footer from "./Footer";

function ViewProfileSE(){
    return(
        <div>
            <SalesExecutiveDashBoard></SalesExecutiveDashBoard><br/><br/><br/>
        <div className="container mt-4 mb-4 p-3 d-flex justify-content-center" > 
<div className="card p-4"> 
<div className=" image d-flex flex-column justify-content-center align-items-center"> 
<h1 style={{color:"red"}}>Welcome</h1>
<h3>Full Name:dede</h3>
<h3>Email:dede</h3>
<h3>Address:dede</h3>
<h3>Contact No:ede</h3>
<h3>Gender:ecd</h3>
<h3>Qualification:ded</h3>
  </div> 
</div>
  </div>
  <br/><br/><br/><br/><br/><br/>
  <Footer></Footer>
  </div>
 
    )
}

export default ViewProfileSE;