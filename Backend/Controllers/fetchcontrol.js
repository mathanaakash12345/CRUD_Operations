const User = require('../Models/usermodel')
const exp =require ('../Models/expmodel')
const fetchuser =async (req,res)=>{
    const {email} = req.params;
        console.log(email)
    try{
        const user = await User.findOne({email})
        const use_exp = await exp.findOne({id: user._id})
        console.log("User",use_exp._id)
        if (user && use_exp){
            
            res.json({datas:user,expe:use_exp})
        }
        else{
           
            res.json({msg:"User not found"})
        }
    }
    catch(e){
        
        res.json({msg:e})
    }
}

module.exports =  fetchuser;
