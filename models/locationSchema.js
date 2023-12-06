//import mongoose
const mongoose=require("mongoose")

//define schema for location collection to store data
const locationSchema= new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    category:{
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
    timing:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    }
})

//create a model to store locations
const  locations=new mongoose.model('locations',locationSchema)

//export the model
module.exports=locations