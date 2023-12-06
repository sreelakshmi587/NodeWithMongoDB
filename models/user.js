
const mongoose = require('mongoose');


const Schema = mongoose.Schema;
const userSchema = new Schema({
    name:{
        type : String,
        required : true
    },
    age:{
        type: Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    roleIds:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Role'
    }]
},{timestamps : true})

module.exports =  mongoose.model('User',userSchema)