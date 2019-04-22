
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
import MySpcs from '../routes/InvestorPortal/Forms/MySpcs'
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
import AdminLogin from '../components/Admin Components/AdminLogin'
import UpdateME from '../components/Admin Components/UpdateME';
import AdminLogout from '../components/Admin Components/Logout';
import { StaffAdm } from './AdminPortal/Staff/StaffAdm';
import StaffRev from './AdminPortal/Staff/StaffRev';
import StaffForms from './AdminPortal/Staff/StaffForms';
import StaffLaw from './AdminPortal/Staff/StaffLaw';
import AllLogins from '../components/AllLogins'
import withAuth from './InvestorPortal/withAuth';
import LogoutInv from './InvestorPortal/LogoutInv';
import Profile from './InvestorPortal/Profile';
import CreateLawyer from './AdminPortal/Staff/Lawyer/CreateLawyer';
import GetLawyer from './AdminPortal/Staff/Lawyer/GetLawyer';
import UpdateLawyer from './AdminPortal/Staff/Lawyer/UpdateLawyer';
import CreationSuccess1 from './AdminPortal/Staff/Lawyer/CreationSuccess1';
import handleLawyer from './AdminPortal/Staff/Lawyer/handleLawyer';
import UpdateSuccess1 from './AdminPortal/Staff/Lawyer/UpdateSuccess1';
import DeletionSuccess1 from './AdminPortal/Staff/Lawyer/DeletionSuccess1';
import UpdateInfo from './LawyerPortal/UpdateInfo'


export default ()=>(
    <BrowserRouter>
    <div>
    
    <Route path ="/" exact component={home}/>
    <Route path ="/AdminHome/CreateAdmin" exact component={CreateAdmin}/>
    <Route path ="/AdminHome/EditAdmin" exact component={EditAdmin}/>
    <Route path ="/AdminHome/Admins" exact component={admin}/>
    <Route path ="/AdminHome" exact component={AdminHome}/>
    <Route path ="/ReviewerHome" exact component={ReviewerHome}/>
    <Route path ="/LawyerHome" exact component={LawyerHome}/>
    <Route path ="/InvestorHome" exact component={withAuth(InvestorHome)}/>
    <Route path ="/Staff" exact component={Staff}/>
    <Route path ="/SSCApplication" exact component={SSCApplication}/>
    <Route path ="/Companies" exact component={Companies}/>
    <Route path ="/CreateCompany" exact component={CreateCompany}/>
    <Route path ="/GetCompany" exact component={GetCompany}/>
    <Route path ="/UpdateCompany" exact component={UpdateCompany}/>
    <Route path ="/CreatedSuccessfully" exact component={CreatedSuccessfully}/>
    <Route path ="/CreateReviewer" exact component={CreateReviewer}/>
    <Route path ="/SSCApplication" exact component={SSCApplication}/>
    <Route path ="/Register" exact component={Register}/>
    <Route path ="/Login" exact component={Login}/>
    <Route path ="/SearchInvestor" exact component={withAuth(SearchInvestor)}/>
    <Route path ="/UpdateInvestor" exact component={withAuth(UpdateInvestor)}/>
    <Route path ="/DeleteInvestor" exact component={withAuth(DeleteInvestor)}/>
    <Route path ="/MySpcs" exact component={withAuth(MySpcs)}/>
    <Route path ="/SscCase" exact component={SscCase}/>
    <Route path ="/getSingleCase" exact component={getSingleCase}/>
    <Route path ="/SpcCreate" exact component={SpcCreate}/>
    <Route path ="/SpcSearch" exact component={SpcSearch}/>
    <Route path ="/SpcUpdate" exact component={SpcUpdate}/>
    <Route path ="/SpcDelete" exact component={SpcDelete}/>
    <Route path ="/handleReviewer" exact component={handleReviewer}/>
    <Route path ="/GetReviewer" exact component={GetReviewer}/>
    <Route path ="/SSCApplication" exact component={SSCApplication}/>
    <Route path ="/CreationSuccess" exact component={CreationSuccess}/>
    <Route path ="/UpdateSuccess" exact component={UpdateSuccess}/>
    <Route path ="/UpdateReviewer" exact component={UpdateReviewer}/>
    <Route path ="/DeletionSuccess" exact component={DeletionSuccess}/>
    <Route path ="/AllLogins" exact component={AllLogins}/>
    <Route path ="/LogoutInv" exact component={withAuth(LogoutInv)}/>
    <Route path ="/Profile" exact component={withAuth(Profile)}/>

  
    <Route path ="/AdminLogin" exact component={AdminLogin}/>
    <Route path ="/EditProfile" exact component={UpdateME}/>
    <Route path ="/AdmLoggedout" exact component={AdminLogout}/>

    <Route path ="/Staff/Admins" exact component={StaffAdm}/>
    <Route path ="/Staff/Reviewers" exact component={StaffRev}/>
    <Route path ="/Staff/Forms" exact component={StaffForms}/>
    <Route path ="/Staff/Lawyers" exact component={StaffLaw}/>


    <div>
    <Route path ="/handleLawyer" exact component={handleLawyer}/>
    </div>
    <div>
    <Route path ="/CreateLawyer" exact component={CreateLawyer}/>
    </div>
    <div>
    <Route path ="/GetLawyer" exact component={GetLawyer}/>
    </div>
    <div>
    <Route path ="/CreationSuccess1" exact component={CreationSuccess1}/>
    </div>
    <div>
    <Route path ="/UpdateSuccess1" exact component={UpdateSuccess1}/>
    </div>
    <div>
    <Route path ="/UpdateLawyer" exact component={UpdateLawyer}/>
    </div>
    <div>
    <Route path ="/DeletionSuccess1" exact component={DeletionSuccess1}/>
    </div>
    <div>
    <Route path ="/UpdateInfo" exact component={UpdateInfo}/>
    </div>



  
    </div>
    
  
  
    </BrowserRouter>
)
