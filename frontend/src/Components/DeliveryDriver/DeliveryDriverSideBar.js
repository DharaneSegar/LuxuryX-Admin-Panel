import React from "react";

function DeliveryDriverSideBar(){
    return(
        <div>
        <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                           
                            <a className="nav-link">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                <a className="nav-link" href="./viewdd" >View Profile</a>
                            </a>

                            <a class="nav-link collapsed"  data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                <div className="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                                Apply leaves
                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                            </a>
                            <div class="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                                <nav class="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                    <a class="nav-link" href="./applydd" >Apply for leave</a>
                                        
                                    <a className="nav-link" href="./leadd">View leaves</a>
                                        
                                    <div class="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                        
                                    </div>
                                </nav>
                            </div>
                            <a class="nav-link collapsed"  data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                <div className="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                                Delivery
                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                            </a>
                            <div class="collapse" id="collapseExample" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                                <nav class="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                    <a class="nav-link" href="" >My Deliveries</a>
                            
                                </nav>
                            </div>

                            

                            
                            
                          
                    </div>
                   
        </div>
        </nav>
        </div>
        </div>
        </div>

    )
}

export default DeliveryDriverSideBar;