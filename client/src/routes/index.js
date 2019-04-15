
import React, { Component } from 'react';
import { BrowserRouter , Route, Link } from "react-router-dom";
import home from './home';
import admin from './AdminPortal/Staff/Admin/admin';
import LawyerHome from './LawyerPortal/LawyerHome';
import ReviewerHome from './ReviewerPortal/ReviewerHome';
import AdminHome from './AdminPortal/AdminHome';
import InvestorHome from './InvestorPortal/InvestorHome';
import Staff from './AdminPortal/Staff/Staff';
import CreateReviewer from './AdminPortal/Staff/Reviewer/CreateReviewer';
import GetReviewer from './AdminPortal/Staff/Reviewer/GetReviewer';
import UpdateReviewer from './AdminPortal/Staff/Reviewer/UpdateReviewer';
import CreationSuccess from './AdminPortal/Staff/Reviewer/CreationSuccess';
import handleReviewer from './AdminPortal/Staff/Reviewer/handleReviewer';
import UpdateSuccess from './AdminPortal/Staff/Reviewer/UpdateSuccess';
import DeletionSuccess from './AdminPortal/Staff/Reviewer/DeletionSuccess';
import Companies from './AdminPortal/Companies/Companies';
import CreateCompany from './AdminPortal/Companies/CreateCompany';
import GetCompany from './AdminPortal/Companies/GetCompany';
import UpdateCompany from './AdminPortal/Companies/UpdateCompany';
import CreatedSuccessfully from './AdminPortal/Companies/CreatedSuccessfully';
import SSCApplication from  './InvestorPortal/Forms/SSCApplication'
import UpdateInvestor from '../routes/InvestorPortal/UpdateInvestor'
import DeleteInvestor from '../routes/InvestorPortal/DeleteInvestor'
import Login from '../routes/InvestorPortal/Login'
import Register from '../routes/InvestorPortal/Register'
import SearchInvestor from '../routes/InvestorPortal/SearchInvestor'
import EditAdmin from './AdminPortal/Staff/Admin/UpdateAdmin';
import SscCase from  '../components/SscCase';
import getSingleCase from  './LawyerPortal/getSingleCase';
import SpcCreate from './InvestorPortal/Forms/SpcCreate';
import SpcSearch from './InvestorPortal/Forms/SpcSearch';
import SpcDelete from './InvestorPortal/Forms/SpcDelete';
import SpcUpdate from './InvestorPortal/Forms/SpcUpdate';



export default ()=>(
    <BrowserRouter>
    <div>
    <Route path ="/" exact component={home}/>
    <Route path ="/admin" exact component={admin}/>
    </div>
    <div>
    <Route path ="/" exact component={home}/>
    <Route path ="/ReviewerHome" exact component={ReviewerHome}/>
    </div>
    <div>
    <Route path ="/" exact component={home}/>
    <Route path ="/LawyerHome" exact component={LawyerHome}/>
    </div>
    <div>
    <Route path ="/AdminHome" exact component={AdminHome}/>
    </div>
    <div>
    <Route path ="/InvestorHome" exact component={InvestorHome}/>
    </div>
    <div>
    <Route path ="/Staff" exact component={Staff}/>
    </div>
    <div>
    <Route path ="/Companies" exact component={Companies}/>
    </div>
    <div>
    <Route path ="/CreateCompany" exact component={CreateCompany}/>
    </div>
    <div>
    <Route path ="/GetCompany" exact component={GetCompany}/>
    </div>
    <div>
    <Route path ="/UpdateCompany" exact component={UpdateCompany}/>
    </div>
    <div>
    <Route path ="/CreatedSuccessfully" exact component={CreatedSuccessfully}/>
    </div>
    <div>
    <Route path ="/SSCApplication" exact component={SSCApplication}/>
    </div>
    <div>
    <Route path ="/Register" exact component={Register}/>
    </div>
    <div>
    <Route path ="/Login" exact component={Login}/>
    </div>
    <div>
    <Route path ="/SearchInvestor" exact component={SearchInvestor}/>
    </div>
    <div>
    <Route path ="/UpdateInvestor" exact component={UpdateInvestor}/>
    </div>
    <div>
    <Route path ="/DeleteInvestor" exact component={DeleteInvestor}/>
    </div>
    <div>
    <Route path ="/SscCase" exact component={SscCase}/>
    <Route path ="/getSingleCase" exact component={getSingleCase}/>
    <Route path ="/SpcCreate" exact component={SpcCreate}/>
    <Route path ="/SpcSearch" exact component={SpcSearch}/>
    <Route path ="/SpcUpdate" exact component={SpcUpdate}/>
    <Route path ="/SpcDelete" exact component={SpcDelete}/>
    </div>
  <div>
    <Route path ="/handleReviewer" exact component={handleReviewer}/>
    </div>
    <div>
    <Route path ="/GetReviewer" exact component={GetReviewer}/>
    </div>
    <div>
    <Route path ="/SSCApplication" exact component={SSCApplication}/>
    </div>
    <div>
    <Route path ="/CreationSuccess" exact component={CreationSuccess}/>
    </div>
    <div>
    <Route path ="/UpdateSuccess" exact component={UpdateSuccess}/>
    </div>
    <div>
    <Route path ="/UpdateReviewer" exact component={UpdateReviewer}/>
    </div>
    <div>
    <Route path ="/DeletionSuccess" exact component={DeletionSuccess}/>
    </div>
    </BrowserRouter>
)
