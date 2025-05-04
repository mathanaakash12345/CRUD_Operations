const mongoose = require ('mongoose')

const expschema = new mongoose.Schema({
    id:{type:String},
    email:{type:String, required:true},
    precomp: { type: String, required: false }, 
    years: { type: Number, required: false, min: 0 }, 
},{ timestamps: true}); 

const exp = mongoose.model('employee_exp',expschema)
module.exports = exp;