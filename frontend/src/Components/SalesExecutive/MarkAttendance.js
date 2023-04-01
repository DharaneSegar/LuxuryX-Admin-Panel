import React from "react";
import Footer from "./Footer";
import SalesExecutiveDashBoard from "./SalesExecutiveDashBoard";
import MarkAttendance from "../Common/MarkAttendance";

function MarkAttendanceSE(){
    return(
        <div> 
            <SalesExecutiveDashBoard></SalesExecutiveDashBoard>
            <MarkAttendance></MarkAttendance>
            <Footer></Footer>
               
        </div>
  
            

    )
}

export default MarkAttendanceSE;