import React, { Component } from 'react';
import {Link} from 'react-router-dom'
export default ()=><div>
    {/* <a href="/AdminLogin">Admin Login</a><br/>
    <a href="/ReviewerHome">ReviewerHome</a><br/>
    <a href="/LawyerHome">LawyerHome</a><br/>
    <a href="/InvestorHome">InvestorHome</a><br/> */}
    <Link to="/AdminLogin" className="btn btn-lg btn-light">AdminLogin</Link>{' '}
    <Link to="/ReviewerHome" className="btn btn-lg btn-light">ReviewerHome</Link>{' '}
    {/* <Link to="/LawyerHome" className="btn btn-lg btn-light">LawyerHome</Link>{' '} */}
    <Link to="/InvestorHome" className="btn btn-lg btn-light">InvestorHome</Link>{' '}
    <Link to="/login2" className="btn btn-lg btn-light">LawyerLogin</Link>{' '}
    <Link to="/register2" className="btn btn-lg btn-light">LawyerRegister</Link>{' '}
    
</div>;