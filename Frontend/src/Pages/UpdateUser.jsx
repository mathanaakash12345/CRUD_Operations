import React, { useState } from "react";
import { fetchuser, updateuser } from "../Services/Handleservice";

const UpdateUser = () => {
  const [email, setEmail] = useState("");
  const [userdata, setUserdata] = useState({});
  const [experience, setExperience] = useState({});
  const [isfetched, setIsfetched] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleuserchange = (e) => {
    setUserdata((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleexpchange = (e) => {
    setExperience((prevExp) => ({
      ...prevExp,
      [e.target.name]: e.target.value,
    }));
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setIsfetched(false);

    try {
      const response = await fetchuser(email);
      if (response.data && response.data.msg === "User not found") {
        setErrorMsg("User not found. Please check the email and try again.");
      } else {
        setUserdata(response.data.datas || {});
        setExperience(response.data.expe || {});
        setIsfetched(true);
      }
    } catch (error) {
      console.error("Error fetching user:", error);
      setErrorMsg("Something went wrong. Please try again.");
    }
  };

  const handleupdate = async (e) => {
    e.preventDefault();
    setIsfetched(false);
    setEmail("");
    
    try {
      const response = await updateuser({
        userdata,
        experience,
        Id: userdata._id,
      });
      console.log(response.data.msg);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div className="w-fit mx-auto p-6 bg-white shadow-lg rounded-lg">
      {!isfetched && (
        <>
          <h1 className="text-xl font-bold text-vio text-center mb-4">
            Update User
          </h1>
          {errorMsg && (
            <p className="text-red-500 text-center font-medium mb-2">{errorMsg}</p>
          )}
          <form
            onSubmit={handlesubmit}
            className="grid grid-cols-2 gap-4 items-end"
          >
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                className="w-full p-2 border rounded-md focus:ring focus:ring-orange"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-vio text-white px-6 py-2 rounded-md hover:bg-orange"
              >
                Fetch
              </button>
            </div>
          </form>
        </>
      )}

      {isfetched && (
        <form className="space-y-4" onSubmit={handleupdate}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">First Name</label>
              <input
                type="text"
                name="fname"
                className="w-full p-2 border rounded-md focus:ring focus:ring-orange"
                placeholder="John"
                value={userdata?.fname || ""}
                onChange={handleuserchange}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Last Name</label>
              <input
                type="text"
                name="lname"
                className="w-full p-2 border rounded-md focus:ring focus:ring-orange"
                placeholder="Doe"
                value={userdata?.lname || ""}
                onChange={handleuserchange}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Mobile</label>
              <input
                type="tel"
                name="mobile"
                className="w-full p-2 border rounded-md focus:ring focus:ring-orange"
                placeholder="9876543210"
                value={userdata?.mobile || ""}
                onChange={handleuserchange}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                className="w-full p-2 border rounded-md focus:ring focus:ring-orange"
                placeholder="example@email.com"
                value={userdata?.email || ""}
                onChange={handleuserchange}
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Address</label>
            <textarea
              className="w-full p-2 border rounded-md focus:ring focus:ring-orange"
              rows="2"
              name="address"
              placeholder="123 Street, City, Country"
              value={userdata?.address || ""}
              onChange={handleuserchange}
            ></textarea>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Previous Company</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md focus:ring focus:ring-orange"
                placeholder="ABC Corp"
                name="precomp"
                value={experience?.precomp || ""}
                onChange={handleexpchange}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Years of Experience</label>
              <input
                type="number"
                className="w-full p-2 border rounded-md focus:ring focus:ring-orange"
                name="years"
                placeholder="5"
                min="0"
                value={experience?.years || ""}
                onChange={handleexpchange}
                required
              />
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-orange text-white px-6 py-2 rounded-md hover:bg-vio"
            >
              Update
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default UpdateUser;