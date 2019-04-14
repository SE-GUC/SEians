import React, { Component } from 'react';
import { BrowserRouter , Route, Link } from "react-router-dom";
import home from './home';
import admin from './AdminPortal/Staff/Admin/admin';
import CreateAdmin from './AdminPortal/Staff/Admin/CreateAdmin'
import LawyerHome from './LawyerPortal/LawyerHome';
import ReviewerHome from './ReviewerPortal/ReviewerHome';
import AdminHome from './AdminPortal/AdminHome';
import InvestorHome from './InvestorPortal/InvestorHome';
import Staff from './AdminPortal/Staff/Staff';
import SSCApplication from  './InvestorPortal/Forms/SSCApplication'
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
    <Route path ="/AdminHome/CreateAdmin" exact component={CreateAdmin}/>
    <Route path ="/AdminHome/EditAdmin" exact component={EditAdmin}/>
    <Route path ="/AdminHome/Admins" exact component={admin}/>
    <Route path ="/AdminHome" exact component={AdminHome}/>
    <Route path ="/ReviewerHome" exact component={ReviewerHome}/>
    <Route path ="/LawyerHome" exact component={LawyerHome}/>
    <Route path ="/InvestorHome" exact component={InvestorHome}/>
    <Route path ="/Staff" exact component={Staff}/>
    <Route path ="/SSCApplication" exact component={SSCApplication}/>
    
    <Route path ="/SscCase" exact component={SscCase}/>
    <Route path ="/getSingleCase" exact component={getSingleCase}/>
    <Route path ="/SpcCreate" exact component={SpcCreate}/>
    <Route path ="/SpcSearch" exact component={SpcSearch}/>
    <Route path ="/SpcUpdate" exact component={SpcUpdate}/>
    <Route path ="/SpcDelete" exact component={SpcDelete}/>

    </div>
    

    </BrowserRouter>
)