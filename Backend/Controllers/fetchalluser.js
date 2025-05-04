const User = require("../Models/usermodel");
const exp = require("../Models/expmodel");

const fetchall = async (req, res) => {
  try {
    const result1 = await User.find();
    const result2 = await exp.find()
    console.log(result1);
    res.json({ success: true, msg: "Fetched users successfully", userd: result1, expd:result2});
  } catch (e) {
    console.log("Error:", e);
    res.json({ success: false, msg: "Failed to fetch users" });
  }
};

module.exports = fetchall;
