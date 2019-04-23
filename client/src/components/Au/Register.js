import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
// import axios from 'axios';
import classnames from 'classnames';
import { connect } from 'react-redux';
import {registerUser} from '../../actions/authActions'
class Register extends Component {
    constructor(){
        super();
        this.state={
          firstname:'',
          middlename:'',
          lastname:'',
          username:'',
          
          birthDate:'',
          gender:'',
          address:'',
          yearsOfExperience:'',
          salary:'',
          ssn:'',
          phone:'',
          
          email:'',
          password:'',
          password2:'',
          errors:{}
        }
    }

    componentDidMount(){
      if(this.props.auth.isAuthenticated){
         this.props.history.push('./dashboard');
      }
    }

      componentWillReceiveProps(nextProps){
        if(nextProps.errors){
          this.setState({errors:nextProps.errors})
        }
      }

     onChange = (e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmit = (e)=>{
        e.preventDefault();
        const newUser = {
          name:this.state.name,
          email:this.state.email,
          password:this.state.password,
          password2:this.state.password2,

          firstname:this.state.firstname,
          middlename:this.state.middlename,
          lastname:this.state.lastname,
          username:this.state.username,
          
          birthDate:this.state.birthDate,
          gender:this.state.gender,
          address:this.state.address,
          yearsOfExperience:this.state.yearsOfExperience,
          salary:this.state.salary,
          ssn:this.state.ssn,
          phone:this.state.phone,
          
          email:this.state.email,
          password:this.state.password,
          password2:this.state.password2,

        }
        this.props.registerUser(newUser,this.props.history);
        
    }
  render() {

    const { errors } = this.state;
    
    return (
        <div className="register">
        
    <div className="container">
      <div className="row">
        <div className="col-md-8 m-auto">
          <h1 className="display-4 text-center">Sign Up</h1>
          <p className="lead text-center">Create your  account</p>

          <form noValidate onSubmit={this.onSubmit}>


              <div className="form-group">
                  <input type="text" className={classnames('form-control form-control-lg',{'is-invalid':errors.firstname
                  })} placeholder="firstname" name="firstname" value={this.state.firstname}
                  onChange={this.onChange}
                  />
                  {/* {errors.firstname &&(<div className="invalid-feedback">{errors.firstname}</div>)} */}
              </div>



              <div className="form-group">
                  <input type="text" className={classnames('form-control form-control-lg',{'is-invalid':errors.middlename
                  })} placeholder="middlename" name="middlename" value={this.state.middlename}
                  onChange={this.onChange}
                  />
                  {/* {errors.middlename &&(<div className="invalid-feedback">{errors.middlename}</div>)} */}
              </div>



              <div className="form-group">
                  <input type="text" className={classnames('form-control form-control-lg',{'is-invalid':errors.lastname
                  })} placeholder="lastname" name="lastname" value={this.state.lastname}
                  onChange={this.onChange}
                  />
                  {/* {errors.lastname &&(<div className="invalid-feedback">{errors.lastname}</div>)} */}
              </div>



              <div className="form-group">
                  <input type="text" className={classnames('form-control form-control-lg',{'is-invalid':errors.username
                  })} placeholder="username" name="username" value={this.state.username}
                  onChange={this.onChange}
                  />
                  {/* {errors.username &&(<div className="invalid-feedback">{errors.username}</div>)} */}
              </div>



              <div className="form-group">
                  <input type="date" className={classnames('form-control form-control-lg',{'is-invalid':errors.birthDate
                  })} placeholder="birthDate" name="birthDate" value={this.state.birthDate}
                  onChange={this.onChange}
                  />
                  {/* {errors.birthDate &&(<div className="invalid-feedback">{errors.birthDate}</div>)} */}
              </div>



              <div className="form-group">
                  <input type="text" className={classnames('form-control form-control-lg',{'is-invalid':errors.gender
                  })} placeholder="gender" name="gender" value={this.state.gender}
                  onChange={this.onChange}
                  />
                  {/* {errors.gender &&(<div className="invalid-feedback">{errors.gender}</div>)} */}
              </div>



              <div className="form-group">
                  <input type="text" className={classnames('form-control form-control-lg',{'is-invalid':errors.address
                  })} placeholder="address" name="address" value={this.state.address}
                  onChange={this.onChange}
                  />
                  {/* {errors.address &&(<div className="invalid-feedback">{errors.address}</div>)} */}
              </div>



              <div className="form-group">
                  <input type="number" className={classnames('form-control form-control-lg',{'is-invalid':errors.yearsOfExperience
                  })} placeholder="yearsOfExperience" name="yearsOfExperience" value={this.state.yearsOfExperience}
                  onChange={this.onChange}
                  />
                  {/* {errors.yearsOfExperience &&(<div className="invalid-feedback">{errors.yearsOfExperience}</div>)} */}
              </div> 



              <div className="form-group">
                  <input type="email" className={classnames('form-control form-control-lg',{'is-invalid':errors.email
                  })} placeholder="Email Address" name="email" value={this.state.email} 
                  onChange={this.onChange}
                  />
                  {/* {errors.email &&(<div className="invalid-feedback">{errors.email}</div>)} */}
                  <small className="form-text text-muted">This site uses Gravatar so if you want a profile image, use a Gravatar email</small>
              </div>



              <div className="form-group">
                  <input type="password" className={classnames('form-control form-control-lg',{'is-invalid':errors.password
                  })} placeholder="Password" name="password" value={this.state.password}
                  onChange={this.onChange}
                  />
                  {/* {errors.password &&(<div className="invalid-feedback">{errors.password}</div>)} */}
              </div>


            
              
              <div className="form-group">
                  <input type="password" className={classnames('form-control form-control-lg',{'is-invalid':errors.password2
                  })} placeholder="Confirm Password" name="password2" value={this.state.password2}
                  onChange={this.onChange}
                  />
                  {/* {errors.password2 &&(<div className="invalid-feedback">{errors.password2}</div>)} */}
               </div>



               <div className="form-group">
                  <input type="number" className={classnames('form-control form-control-lg',{'is-invalid':errors.salary
                  })} placeholder="salary" name="salary" value={this.state.salary}
                  onChange={this.onChange}
                  />
                  {/* {errors.salary &&(<div className="invalid-feedback">{errors.salary}</div>)} */}
               </div>



               <div className="form-group">
                  <input type="number" className={classnames('form-control form-control-lg',{'is-invalid':errors.ssn
                  })} placeholder="ssn" name="ssn" value={this.state.ssn}
                  onChange={this.onChange}
                  />
                  {/* {errors.ssn &&(<div className="invalid-feedback">{errors.ssn}</div>)} */}
               </div>



               <div className="form-group">
                  <input type="number" className={classnames('form-control form-control-lg',{'is-invalid':errors.phone
                  })} placeholder="phone" name="phone" value={this.state.phone}
                  onChange={this.onChange}
                  />
                  {/* {errors.phone &&(<div className="invalid-feedback">{errors.phone}</div>)} */}
               </div>

               

            <input type="submit" className="btn btn-lg btn-light" value ="SIGNUP" />
          </form>
        </div>
      </div>
    </div>
  </div>
    )
  }
}
Register.propTypes = {
  registerUser:PropTypes.func.isRequired,
  auth:PropTypes.object.isRequired
  // errors:PropTypes.object.isRequired
}

const mapStateToProps = (state)=>({
  auth:state.auth,
  errors:state.errors

});


export default connect(mapStateToProps,{registerUser})(withRouter(Register));



//////////////////////// staaaaaaaaaaart 














