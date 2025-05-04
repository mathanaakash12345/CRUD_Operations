const User = require('../Models/usermodel');
const exp = require('../Models/expmodel');
module.exports.saveUser = async (req, res) => {
    const { fname, lname, mobile, email, address, precomp, years } = req.body;
    try {
        console.log("Received data:", req.body);
        
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.json({ msg: 'User already exists' });
        }
        const newUser = new User({ fname, lname, mobile, email, address});
        await newUser.save();
        const id = await User.findOne({email});
        const value = id._id
        const newexp = new exp({id:value,email,precomp, years })
        await newexp.save();

        return res.json({ msg: 'User created successfully', user: newUser });
    } catch (err) {
        console.error("Error saving user:", err);
        return res.json({ msg: 'Internal Server Error', error: err.message });
    }
};
