import React, { Component } from 'react';
import { BrowserRouter , Route, Link } from "react-router-dom";
import home from './home';
import admin from './AdminPortal/Staff/Admin/admin';
import LawyerHome from './LawyerPortal/LawyerHome';
import ReviewerHome from './ReviewerPortal/ReviewerHome';
import AdminHome from './AdminPortal/AdminHome';
import InvestorHome from './InvestorPortal/InvestorHome';
import Staff from './AdminPortal/Staff/Staff';
import Companies from './AdminPortal/Companies/Companies';
import CreateCompany from './AdminPortal/Companies/CreateCompany';
import GetCompany from './AdminPortal/Companies/GetCompany';
import CreatedSuccessfully from './AdminPortal/Companies/CreatedSuccessfully';
import SSCApplication from  './InvestorPortal/Forms/SSCApplication'

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
    <Route path ="/CreatedSuccessfully" exact component={CreatedSuccessfully}/>
    </div>
    <div>
    <Route path ="/SSCApplication" exact component={SSCApplication}/>
    </div>
    </BrowserRouter>
)
