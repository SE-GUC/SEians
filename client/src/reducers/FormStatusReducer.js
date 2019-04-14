export default function reducer(state={
    form:{
        approval:false,
        status:"lawyerPending"
    },
    fetching:false,
    created:false,
    creating:false,
    fetching:false,
    accepting:false,
    status:"lawyer Pending",
    error:null
},action ){

    switch(action.type){
        case "CREATING APP SUCCSSEDED":{
            return {...state,creating:true,form:action.payload}
        }
        case"CREATING APP FAILED":{
            return {...state,creating:false, created:false, error:action.payload}
        }
        case"fetching APP FAILED":{
            return {...state, fetching:false, fetched:false, error:action.payload}
        }
        case"fetching APP Succsseded":{
            return {...state, fetching:true,fetched:true, form:action.payload}
        }
        case"APP APPROVED":{
            return {...state, accepting:true,approval:action.payload,form:action.payload}
        }
        case"APP Rejected":{
            return {...state, accepting:false,approval:action.payload,form:action.payload}
        }
        
        case"APP Returned For Re-Submission":{
            return {...state, accepting:false,approval:action.payload,form:action.payload}
        }
    }


}
