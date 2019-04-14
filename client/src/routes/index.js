import React, { Component } from 'react';
import { BrowserRouter , Route, Link } from "react-router-dom";
import home from './home';
import admin from './AdminPortal/Staff/Admin/admin';
import LawyerHome from './LawyerPortal/LawyerHome';
import ReviewerHome from './ReviewerPortal/ReviewerHome';
import AdminHome from './AdminPortal/AdminHome';
import InvestorHome from './InvestorPortal/InvestorHome';
import Staff from './AdminPortal/Staff/Staff';
import SSCApplication from  './InvestorPortal/Forms/SSCApplication'
import UpdateInvestor from '../routes/InvestorPortal/UpdateInvestor'
import DeleteInvestor from '../routes/InvestorPortal/DeleteInvestor'
import Login from '../routes/InvestorPortal/Login'
import Register from '../routes/InvestorPortal/Register'
import SearchInvestor from '../routes/InvestorPortal/SearchInvestor'


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
    </BrowserRouter>
)