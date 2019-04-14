export function fetchForm(){
    return{
        type:"fetching APP Succsseded"
        ,payload:{
            approval:false,
            status:"Review By Lawyer In Process",
        }
    }
}
export function AcceptForm(){
    return{
        type:"APP APPROVED"
        ,payload:{
            approval:true,
            status:"Waiting For Reviewer Approval",
        }
    }
}

export function RejectForm(){
    return{
        type:"APP REJECTED"
        ,payload:{
            approval:false,
            status:"Waiting For Reviewer Approval",
        }
    }
}

export default function ApplyForForm(){
    return{
        type:"CREATING APP SUCCSSEDED"
        ,payload:{
            approval:false,
            status:"LawyerPending",
        }
    }
}

export function RejectAppAndAskForReSubmissin(){
    return{
        type:"APP Returned For Re-Submission"
        ,payload:{
            approval:false,
            status:"Resubmit App",
        }
    }
}