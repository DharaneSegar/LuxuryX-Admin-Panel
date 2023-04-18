import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Login from './Components/Common/Login';
import SignUp from './Components/Admin/SignUp';
import AddSalesExecutive from './Components/Admin/AddSalesExecutive';
import AddDeliveryDriver from './Components/Admin/AddDeliveryDriver';
import SalesExecutiveHome from './Components/SalesExecutive/SalesExecutiveHome';
import DeliveryDriverHome from './Components/DeliveryDriver/DeliveryDriverHome';
import AdminHome from './Components/Admin/AdminHome';
import AllSalesExecutive from './Components/Admin/AllSalesExecutives';
import UpdateSalesExecutive from './Components/Admin/UpdateSalesExecutive';
import AllDeliveryDriver from './Components/Admin/AllDeliveryDrivers';
import UpdateDeliveryDriver from './Components/Admin/UpdateDeliveryDriver';
import ApplyForLeaveSE from './Components/SalesExecutive/ApplyForLeaveSE';
import ApplyForLeaveDD from './Components/DeliveryDriver/ApplyForLeaveDD';
import AllLeave from './Components/Admin/AllLeaves';
import AddSalary from './Components/Admin/AddSalary';
import AllSalary from './Components/Admin/AllTransactions';
import UpdateSalary from './Components/Admin/UpdateTransaction';
import ViewProfileDD from './Components/DeliveryDriver/DeliveryDriverViewProfile';
import ViewProfileSE from './Components/SalesExecutive/SalesExecutiveViewProfile';
import ViewLeaveSE from './Components/SalesExecutive/SalesExecutiveViewLeave';
import ViewLeaveDD from './Components/DeliveryDriver/DeliveryDriverViewLeave';
import SalesExecutiveReport from './Components/Admin/SalesExecutiveReport';
import DeliveryDriverReport from './Components/Admin/DeliveryDriverReport';
import LeaveReport from './Components/Admin/LeaveApplicationReport';
import TransactionReport from './Components/Admin/TransactionReport';
import ViewSalarySE from './Components/SalesExecutive/SalesExecutiveSalary';
import ViewSalaryDD from './Components/DeliveryDriver/DeliveryDriverSalary';


import AddSupplier  from './Components/Supplier/AddSupplier';
import AllSuppliers from './Components/Supplier/AllSuppliers';
import UpdateSupplier from './Components/Supplier/UpdateSupplier';
import DeleteSupplier from './Components/Supplier/DeleteSupplier';
import AddSupplierTransaction from './Components/Supplier/AddSupplierTransaction';
import AllSupplierTransactions from './Components/Supplier/AllSupplierTransactions';
import UpdateSupplierTransaction from './Components/Supplier/UpdateSupplierTransaction';
import DeleteSupplierTransaction from './Components/Supplier/DeleteSupplierTransaction';
import SupplierTransactionReport from './Components/Supplier/SupplierTransactionReport';
import SupplierReport from './Components/Supplier/SupplierReport';

import RegCustomers from './Components/Admin/RegCustomers';

import AddProducts from "./Components/Admin/Products/AddProducts";
import EditProducts from "./Components/Admin/Products/EditProducts";
import ViewProducts from "./Components/Admin/Products/ViewPeoducts";

import Delivery from './Components/Admin/AddDelivery';
import DeliveryList from './Components/Admin/DeliveryList';
import UpdateDelivery from './Components/Admin/UpdateDelivery';
import DeliveryDriverView from './Components/DeliveryDriver/DeliveryDriverView';





function App() {
  return (
    
    <div>
     
      <Router> 
        <Routes>
        <Route exact path="/" element = {<SignUp/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path = "/addse" element={<AddSalesExecutive/>}/>
        <Route exact path = "/adddd" element={<AddDeliveryDriver/>}/>
        <Route exact path='/sehome' element={<SalesExecutiveHome/>}/>
        <Route exact path='/ddhome' element={<DeliveryDriverHome/>}/>
        <Route exact path = '/adhome' element = {<AdminHome/>}/>
        <Route exact path='/allse' element={<AllSalesExecutive/>}/>
        <Route exact path ='/updatese/:id' element={<UpdateSalesExecutive/>}/>
        <Route exact path = '/alldd' element = {<AllDeliveryDriver/>}/>
        <Route exact path = '/updatedd/:id' element = {<UpdateDeliveryDriver/>}/>
        <Route exact path = '/applyse' element = {<ApplyForLeaveSE/>}/>
        <Route exact path = '/applydd' element = {<ApplyForLeaveDD/>}/>
        <Route exact path = '/allleave' element = {<AllLeave/>}/>
        <Route exact path = '/addsalary' element = {<AddSalary/>}/>
        <Route exact path = '/updatet/:id' element = {<UpdateSalary/>}/>
        <Route exact path = '/allsalary' element = {<AllSalary/>}/>
        <Route exact path = '/viewse' element = {<ViewProfileSE/>}/>
        <Route exact path = '/viewdd' element = {<ViewProfileDD/>}/>
        <Route exact path = '/leavese' element = {<ViewLeaveSE/>}/>
        <Route exact path = '/leavedd' element = {<ViewLeaveDD/>}/>
        <Route exact path = '/reportse' element = {<SalesExecutiveReport/>}/>
        <Route exact path = '/reportdd' element = {<DeliveryDriverReport/>}/>
        <Route exact path = '/reportle' element = {<LeaveReport/>}/>
        <Route exact path = '/reportt/:query' element = {<TransactionReport/>}/>
        <Route exact path = '/viewsalse' element = {<ViewSalarySE/>}/>
        <Route exact path = '/viewsaldd' element = {<ViewSalaryDD/>}/>
        <Route path="/supplier" element={<AllSuppliers/>} exact />
        <Route path="/addsupplier" element={<AddSupplier/>} exact />
        <Route path="/updatesupplier/:id" element={<UpdateSupplier/>} exact />
        <Route path="/deletesupplier/:id" element={<DeleteSupplier/>} exact />
        <Route path="/addsupplierTransaction" element={<AddSupplierTransaction/>} exact />
        <Route path="/supplierTransaction" element={<AllSupplierTransactions/>} exact />
        <Route path="/updatesupplierTransaction/:id" element={<UpdateSupplierTransaction/>} exact />
        <Route path="/deletesupplierTransaction/:id" element={<DeleteSupplierTransaction/>} exact />
      
        <Route path="/supplierTransactionReport" element={<SupplierTransactionReport/>} exact />
        <Route path="/supplierReport" element={<SupplierReport/>} exact />
        <Route exact path = "/customer" element = {<RegCustomers/>}/>
        <Route exact path="/AddProducts" element={<AddProducts />} />
        <Route exact path="/EditProducts" element={<EditProducts />} />
        <Route exact path="/ViewProducts" element={<ViewProducts />} />

        <Route exact path = '/addd' element = {<Delivery/>}/>
        <Route exact path = '/DeliveryList' element = {<DeliveryList/>}/>
        <Route exact path = '/UpdateDelivery/:id' element = {<UpdateDelivery/>}/>
        <Route exact path = '/deliveryDriverView' element = {<DeliveryDriverView/>}/>

        





        
        </Routes>
        
  </Router>

    </div>
   
  );
}

export default App;
