import React from "react";
import SalesExecutiveDashBoard from "./SalesExecutiveDashBoard";
import ViewAttendance from "../Common/ViewAttendance";
import Footer from "./Footer";

function ViewAttendanceSE(){
    return(
        <div> 
            
        <SalesExecutiveDashBoard></SalesExecutiveDashBoard>
        <ViewAttendance></ViewAttendance>
        <Footer></Footer>    
        </div>
 
    )
}

export default ViewAttendanceSE;