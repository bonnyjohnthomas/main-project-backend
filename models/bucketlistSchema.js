//import mongoose
const mongoose=require("mongoose")

//define schema for bucketlist collection to store data
const bucketlistSchema= new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    
    contact:{
        type:String,
        required:true
    }
})

//create a model to store locations
const  bucketlists=new mongoose.model('bucketlists',bucketlistSchema)

//export the model
module.exports=bucketlists