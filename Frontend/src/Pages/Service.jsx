import React, { useState } from "react";
import Navbar from "./Navbar";
import CreateUser from "./CreateUser"; // Ensure this component exists
import DeleteUser from "./DeleteUser";
import UpdateUser from "./UpdateUser";
import SelectUser from "./SelectUser"
import AllUser from "./AllUser"

const Service = () => {
  const [activeState, setActiveState] = useState("");

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-10 gap-6 p-6">
        <div
          className="text-lg p-4 col-span-2 rounded-md flex justify-center bg-orange text-white cursor-pointer"
          onClick={() => setActiveState("create")}
        >
          <button>Create a User</button>
        </div>
        <div
          className="text-lg p-4 col-span-2 rounded-md flex justify-center bg-vio text-white cursor-pointer"
          onClick={() => setActiveState("update")}
        >
          <button>Update a User</button>
        </div>
        <div
          className="text-lg p-4 col-span-2 rounded-md flex justify-center bg-lig text-white cursor-pointer"
          onClick={() => setActiveState("delete")}
        >
          <button>Delete a User</button>
        </div>
        <div
          className="text-lg p-4 col-span-2 rounded-md flex justify-center bg-yellow text-black cursor-pointer"
          onClick={() => setActiveState("select")}
        >
          Select
        </div>
        <div
          className="text-lg p-4 col-span-2 rounded-md flex justify-center bg-blue text-white cursor-pointer"
          onClick={() => setActiveState("all")}
        >
          Select All
        </div>
      </div>

      {activeState === "create" && <CreateUser />}
      {activeState === "delete" && <DeleteUser/>}
      {activeState === "update" && <UpdateUser/>}
      {activeState === "select" && <SelectUser/>}
      {activeState === "all" && <AllUser/>}
    </>
  );
};

export default Service;
