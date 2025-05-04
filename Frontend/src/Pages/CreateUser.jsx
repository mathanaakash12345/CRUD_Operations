import React, { useState } from "react";
import { usercreate } from "../Services/Handleservice";
const CreateUser = () => {
  const [userdata, setUserdata] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    address: "",
    precomp: "",
    years: "",
  });

  const [iscreate, setIscreate] = useState('');

  const handlechange = (e) => {
    setUserdata({
      ...userdata,
      [e.target.name]: e.target.value,
    });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await usercreate(userdata);
      setIscreate(response.data.msg);
    } catch (e) {
      console.log("Error:", e);
      setIscreate(e);
    }
    //console.log(userdata)
  };

  return (
    <div className="w-fit mx-auto p-6 bg-white shadow-lg rounded-lg">
      {!iscreate && (
        <>
          <h2 className="text-2xl font-semibold text-center text-orange mb-4">
            Create a User
          </h2>

          <form className="space-y-4 " onSubmit={handlesubmit}>
            {/* First Name & Last Name in the same row */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">First Name</label>
                <input
                  type="text"
                  name="fname"
                  className="w-full p-2 border rounded-md focus:ring focus:ring-orange"
                  placeholder="John"
                  value={userdata.fname}
                  onChange={handlechange}
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
                  value={userdata.lname}
                  onChange={handlechange}
                />
              </div>
            </div>

            {/* Mobile & Email */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Mobile</label>
                <input
                  type="tel"
                  name="mobile"
                  className="w-full p-2 border rounded-md focus:ring focus:ring-orange"
                  placeholder="9876543210"
                  value={userdata.mobile}
                  onChange={handlechange}
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
                  value={userdata.email}
                  onChange={handlechange}
                  required
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium">Address</label>
              <textarea
                className="w-full p-2 border rounded-md focus:ring focus:ring-orange"
                rows="2"
                name="address"
                placeholder="123 Street, City, Country"
                value={userdata.address}
                onChange={handlechange}
              ></textarea>
            </div>

            {/* Previous Company & Years of Experience */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">
                  Previous Company
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md focus:ring focus:ring-orange"
                  placeholder="ABC Corp"
                  name="precomp"
                  value={userdata.precomp}
                  onChange={handlechange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Years of Experience
                </label>
                <input
                  type="number"
                  className="w-full p-2 border rounded-md focus:ring focus:ring-orange"
                  name="years"
                  placeholder="5"
                  min="0"
                  onChange={handlechange}
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-orange text-white px-6 py-2 rounded-md hover:bg-vio"
              >
                Create
              </button>
            </div>
          </form>
        </>
      )}
      {iscreate && (
        <div>
          <h3 className="text-2xl font-semibold text-center text-orange mb-4">
            {iscreate}
          </h3>
        </div>
      )}
    </div>
  );
};

export default CreateUser;
