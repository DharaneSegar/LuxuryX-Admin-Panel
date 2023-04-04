import React from "react";

function AdminSideBar(){
    return(
        <div>
        <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                           
                            <a className="nav-link">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                <a className="nav-link" ><b>Menu</b></a>
                            </a>
                            
                            <a className="nav-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                               Orders
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <a className="nav-link" href="/test" >Add Orders</a>
                                    <a className="nav-link" href="">View Orders</a>
                                </nav>
                            </div>

                            <a class="nav-link collapsed"  data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                <div className="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                                Products
                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                            </a>
                            <div class="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                                <nav class="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                    <a class="nav-link" href="" >Add products</a>
                                        
                                    <a className="nav-link" href="">View products</a>
                                        
                                    <div class="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                        
                                    </div>
                                </nav>
                            </div>
                            <a class="nav-link collapsed"  data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                <div className="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                                Customers
                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                            </a>
                            <div class="collapse" id="collapseExample" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                                <nav class="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                    <a class="nav-link" href="" >All Customers</a>
                                        
                                    <a className="nav-link" href="">Registered Customers</a>

                                    <a className="nav-link" href="">Login</a>
                              
                                </nav>
                            </div>

                            <a class="nav-link collapsed"  data-bs-toggle="collapse" data-bs-target="#collapsesup" aria-expanded="false" aria-controls="collapsePages">
                                <div className="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                                Suppliers
                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                            </a>
                            <div class="collapse" id="collapsesup" aria-labelledby="headingThree" data-bs-parent="#sidenavAccordion">
                                <nav class="sb-sidenav-menu-nested nav accordion" >
                                    <a class="nav-link" href="" >Add Suppliers</a>                             
                                    <a className="nav-link" href="">View Suppliers</a>
                                    <a class="nav-link" href="" >Add Stock</a>                             
                                    <a className="nav-link" href="">View Stock</a>
     
                                    <div class="collapse" id="pagesCollapseError" aria-labelledby="headingThree" data-bs-parent="#sidenavAccordionPages">
                                        
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
                                    <a class="nav-link" href="" >View Delivery Drivers</a>
                                        
                                    <a className="nav-link" href="">Add Delivery</a>

                                    <a className="nav-link" href="">View Delivery</a>
         
                                </nav>
                            </div>

                                <a className="nav-link">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                <a className="nav-link" ><b>Business</b></a>
                            </a>

                            <a class="nav-link collapsed"  data-bs-toggle="collapse" data-bs-target="#collapsesu" aria-expanded="false" aria-controls="collapsePages">
                                <div className="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                                Employees
                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                            </a>
                            <div class="collapse" id="collapsesu" aria-labelledby="headingFour" data-bs-parent="#sidenavAccordion">
                                <nav class="sb-sidenav-menu-nested nav accordion" >
                                    <a class="nav-link" href="/addse" >Add Sales Executive</a>                             
                                    <a className="nav-link" href="/allse">View Sales Executive</a>
                                    <a class="nav-link" href="/adddd" >Add Delivery Driver</a>                             
                                    <a className="nav-link" href="/alldd">View Delivery Driver</a>
                                    <a className="nav-link" href="/allleave">View Leave Applications</a>
                                    <a className="nav-link" href="/addsalary">Add salary transaction</a>
                                    <a className="nav-link" href="allsalary">View Salary transaction</a>
     
                                    <div class="collapse" id="pagesCollapseError" aria-labelledby="headingFour" data-bs-parent="#sidenavAccordionPages">
                                        
                                    </div>
                                </nav>
                                </div>

                                <a class="nav-link collapsed"  data-bs-toggle="collapse" data-bs-target="#collapses" aria-expanded="false" aria-controls="collapsePages">
                                <div className="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                                Finance
                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                            </a>
                            <div class="collapse" id="collapses" aria-labelledby="headingFive" data-bs-parent="#sidenavAccordion">
                                <nav class="sb-sidenav-menu-nested nav accordion" >
                                    <a class="nav-link" href="" >Profit</a>                             
                                    <a className="nav-link" href="">Income</a>
                                    <a class="nav-link" href="" >Transfer</a>                             
                                    <a className="nav-link" href="">Spend</a>

                                    <div class="collapse" id="pagesCollapseError" aria-labelledby="headingFive" data-bs-parent="#sidenavAccordionPages">
                                        
                                    </div>
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

export default AdminSideBar;