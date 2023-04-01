import React from "react";
import DeliveryDriverDashBoard from "./DeliveryDriverDashBoard";
import Footer from "../Common/Footer";
import {useLocation,useNavigate} from 'react-router-dom'

function DeliveryDriverHome(){
    const location = useLocation();
    return(
        <>
        <div>

        <DeliveryDriverDashBoard></DeliveryDriverDashBoard>
            
            <main>
                <div className="container-fluid px-4">
                    <br/><br/><br/>
                    <h1 className="mt-4">Welcome {location.state.id}!!!</h1>
        
                    <img id="logo" src={require('../Common/images/logo.png')}/>
                    <br/><br/><br/>

                
                </div>
            </main>
                    
                    
                    
                    
        
        <Footer></Footer>
        </div>
        </>
    )
    }


export default DeliveryDriverHome;