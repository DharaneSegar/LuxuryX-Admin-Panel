import React from "react";
import DeliveryDriverDashBoard from "./DeliveryDriverDashBoard";
import ViewLeave from "../Common/ViewLeave"
import Footer from "./Footer";

function ViewLeaveDD(){
    return(
        <div>
            <DeliveryDriverDashBoard></DeliveryDriverDashBoard>
            <ViewLeave></ViewLeave>
            <Footer></Footer>
        </div>

    )
}

export default ViewLeaveDD;