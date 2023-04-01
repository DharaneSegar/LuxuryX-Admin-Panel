import React from "react";
import DeliveryDriverDashBoard from "./DeliveryDriverDashBoard";
import ViewAttendance from "../Common/ViewAttendance"
import Footer from "./Footer";

function ViewAttendanceDD(){
    return(
        <div> 
            
        <DeliveryDriverDashBoard></DeliveryDriverDashBoard>
        <ViewAttendance></ViewAttendance>
        <Footer></Footer>     
        </div>
 
    )
}

export default ViewAttendanceDD;