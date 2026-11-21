const mongoose = require("mongoose")

const product = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    sku:{
        type:String,
        required:true,
        unique:true,
        uppercase:true,  
        trim:true
    },
    category:{
        type:String,
        required:true,
        trim:true
    },
    price:{
        type:Number,
        required:true,
        min:0
    },
    quantity:{
        type:Number,
        required:true,
        min:0,
        validate:{
            validator:(value)=> value % 1 === 0,  
            message:"Quantity must be a whole number"
        }
    },
    reorderLevel:{
        type:Number,
        default:10,
        min:0
    },
    supplier:{
        type:String,
        trim:true
    }
},{
    timestamps:true,           
    toJSON:{virtuals:true}      
})
