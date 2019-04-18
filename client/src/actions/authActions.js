import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import {GET_ERRORS, SET_CURRENT_USER} from './types'
import jwt_decode from 'jwt-decode';
  //register user 

   export const registerUser = (userData,history)=> dispatch =>{
      axios
        .post('/api/Admins/register',userData)
        .then(res=>history.push('/login'))
        .catch(err=>
            dispatch({
                type:GET_ERRORS,
                payload:err.response.data
        })
    );
};

//LOG IN GET THE TOKEN  
export const loginUser = userData => dispatch =>{
    axios.post('/api/Admins/login',userData)
    .then(res => {
        //now save the token to a local storage
     const {token} = res.data ;   
     //now setting the token to local storage 
     localStorage.setItem('jwtToken',token);
     // set token to Auth header
     setAuthToken(token);
     // now we have the user data so to decode this we need to install module (jwt decode ) 
     //decode token to get the user 
     const decoded =jwt_decode(token);
     // now decoded has the user data 
     //set the current user 
     dispatch(setCurrentUser(decoded));
    })
    .catch(err=>
        dispatch({
            type:GET_ERRORS,
            payload:err.response.data
    })
    );
};

//SET LOGGED IN USER 
export const setCurrentUser = ( decoded )=>{
    return {
        type:SET_CURRENT_USER,
        payload:decoded
    }
}

// LOG USER OUT 
export const logoutUser = ()=>
    dispatch=>{
        //remove the token from local storage 
        localStorage.removeItem('jwtTokent');
        //remove the auth header for coming requests 
        setAuthToken(false)
        //set the current user to {} an empty object 
        dispatch(setCurrentUser({}))
    }
