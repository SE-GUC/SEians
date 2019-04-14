const mongoose = require('mongoose')
const Schema = mongoose.Schema
//creating the schema 
const profileSchema = new Schema ({

    user:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    handle:{
        type:String,
        require:true,
        max:40
    },
    company:{
        type:String
    },
    website:{
        type:String
    },
    location:{
        type:String

    },
    bio:{
        type:String

     },
    case:[{
        title:{
            type:String

        },
        caseStatus:{
            type:String
        }
    }],
    currentState:{
        type:Boolean,
        default:false
    },
    social:{
        youtube:{
            type:String
        },
        facebook:{
            type:String
        },
        twitter:{
            type:String
        }
    },
    // date:{
    //     Type:Date,
    //     default:Date.now
    // }


});

module.exports = Profile = mongoose.model('profile',profileSchema);