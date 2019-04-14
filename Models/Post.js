const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creating schema 

const PostSchema = new Schema ({
    user:{
        type:Schemama.Types.ObjectId,
        ref:'users'
    },
    text:{
        type:String,
        require:true
    },
    name:{
        type:String
    },
    avatar:{
        type:String,
    },
    likes:[
        {
            user:{
                type:Schemama.Types.ObjectId,
                ref:'users'
            }
        }
    ],comments:[
        {
            user:{
                type:Schemama.Types.ObjectId,
                ref:'users'
            },
            text:{
                type:String,
                required:true
            },
            name:{
                type:String
            },
            avatar:{
                type:String,
            },
            date:{
                type:Date,
                default:Date.now
            }  
        } 
    ],
    date:{
        type:Date,
        default:Date.now
    } 
    
})

module.exports = Post = mongoose.model('post',PostSchema);