import React from "react";
import Footer from "../Footer";
import DeliveryDriverDashBoard from "./DeliveryDriverDashBoard";
import MarkAttendance from "../Common/MarkAttendance"

function MarkAttendanceDD(){
    return(
        <div> 
            <DeliveryDriverDashBoard></DeliveryDriverDashBoard>
            <MarkAttendance></MarkAttendance>
            <Footer></Footer>
           
        </div>
  
            

    )
}

export default MarkAttendanceDD;