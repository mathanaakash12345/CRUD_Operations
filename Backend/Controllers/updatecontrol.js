const User = require('../Models/usermodel')
const exp = require('../Models/expmodel')

const updateuser = async(req,res)=>{

    const {Id} = req.params
    const {userdata,experience} = req.body

    try{
        await User.findByIdAndUpdate(Id,
            {fname:userdata.fname, lname:userdata.lname, email:userdata.email, mobile:userdata.mobile, address:userdata.address},
            {new:true}
        )
         await exp.findOneAndUpdate({id:Id},
            {precomp:experience.precomp, years:experience.years}
         )
        console.log("update success")
        res.json({msg: "update success"})
    }   
    catch(e){
            console.log("Error:",e)
    }
}


const deleteuser = async(req,res)=>{
    const {uemail} = req.params;
    try{
        await User.findOneAndDelete({email: uemail})
        await exp.findOneAndDelete({email: uemail})
        console.log("delete success")
        res.json({msg: "User successfully deleted"})
    }
    catch(e){
        console.log("Error:",e)
    }
}
module.exports = {updateuser,deleteuser};