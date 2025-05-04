import React, { useState } from "react";
import { fetchalluser } from "../Services/Handleservice";

const AllUser = () => {
  const [users, setUsers] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc"); 

  const handlefetchall = async (e) => {
    e.preventDefault();
    try {
      const response = await fetchalluser();
      console.log(response.data.msg);
      console.log(response.data.userd);
      console.log(response.data.expd);

      setUsers(response.data.userd);
      setExperiences(response.data.expd);
    } catch (e) {
      console.log("Error:", e);
    }
  };

  const getExperience = (userId) => experiences.find((exp) => exp.id === userId);

  const handleSortByName = () => {
    const sortedUsers = [...users].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.fname.localeCompare(b.fname); 
      } else {
        return b.fname.localeCompare(a.fname); 
      }
    });
    setUsers(sortedUsers);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc"); 
  };

  return (
    <div className="flex flex-col items-center p-5">
      <button
        className="shadow-lg p-4 mb-4 bg-blue hover:bg-orange rounded-lg text-lg text-white"
        onClick={handlefetchall}
      >
        Fetch All User Data
      </button>

      {users.length > 0 && (
        <div className="w-full max-w-4xl overflow-x-auto">
          <table className="w-full border-collapse border border-gray-400">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-400 px-4 py-2 cursor-pointer" onClick={handleSortByName}>
                  First Name {sortOrder === "asc" ? " ↑  " : "↓ "}
                </th>
                <th className="border border-gray-400 px-4 py-2">Last Name</th>
                <th className="border border-gray-400 px-4 py-2">Email</th>
                <th className="border border-gray-400 px-4 py-2">Mobile</th>
                <th className="border border-gray-400 px-4 py-2">Address</th>
                <th className="border border-gray-400 px-4 py-2">PreComp</th>
                <th className="border border-gray-400 px-4 py-2">Years</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                const exp = getExperience(user._id);
                return (
                  <tr key={user._id} className="hover:bg-gray-100">
                    <td className="border border-gray-400 px-4 py-2">{user.fname}</td>
                    <td className="border border-gray-400 px-4 py-2">{user.lname}</td>
                    <td className="border border-gray-400 px-4 py-2">{user.email}</td>
                    <td className="border border-gray-400 px-4 py-2">{user.mobile}</td>
                    <td className="border border-gray-400 px-4 py-2">{user.address}</td>
                    <td className="border border-gray-400 px-4 py-2">{exp ? exp.precomp : "N/A"}</td>
                    <td className="border border-gray-400 px-4 py-2">{exp ? exp.years : "N/A"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllUser;
