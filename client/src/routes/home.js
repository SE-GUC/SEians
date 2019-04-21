import React  from 'react';
import {Link} from 'react-router-dom'
export default ()=><div>
    <Link to="/ReviewerHome"className="btn btn-lg btn-info mr-2">ReviewerHome</Link>{' '}
    <Link to="/LawyerHome"className="btn btn-lg btn-info mr-2">LawyerHome</Link>{' '}
    <Link to="/AdminHome"className="btn btn-lg btn-info mr-2">AdminHome</Link>{' '}
    <Link to="/InvestorHome"className="btn btn-lg btn-info mr-2">InvestorHome</Link>{' '}
    {/* <Link to="/login2" className="btn btn-lg btn-info mr-2">login</Link>{' '}
    <Link to="/register2" className="btn btn-lg btn-info mr-2">Sign Up</Link> */}

</div>;