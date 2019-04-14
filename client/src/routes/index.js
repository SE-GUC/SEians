import React, { Component } from 'react';
import { BrowserRouter , Route, Link } from "react-router-dom";
import home from './home';
import admin from './AdminPortal/Staff/Admin/admin';
import LawyerHome from './LawyerPortal/LawyerHome';
import ReviewerHome from './ReviewerPortal/ReviewerHome';
import AdminHome from './AdminPortal/AdminHome';
import InvestorHome from './InvestorPortal/InvestorHome';
import Staff from './AdminPortal/Staff/Staff';
import SSCApplication from  './InvestorPortal/Forms/SSCApplication';
import CreateReviewer from './AdminPortal/Staff/Reviewer/CreateReviewer';
import GetReviewer from './AdminPortal/Staff/Reviewer/GetReviewer';
import CreationSuccess from './AdminPortal/Staff/Reviewer/CreationSuccess';
import handleReviewer from './AdminPortal/Staff/Reviewer/handleReviewer';
import UpdateSuccess from './AdminPortal/Staff/Reviewer/UpdateSuccess';
import DeletionSuccess from './AdminPortal/Staff/Reviewer/DeletionSuccess';
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
    <Route path ="/" exact component={home}/>
    <Route path ="/CreateReviewer" exact component={CreateReviewer}/>
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
    <Route path ="/DeletionSuccess" exact component={DeletionSuccess}/>
    </div>
    
    </BrowserRouter>
)
