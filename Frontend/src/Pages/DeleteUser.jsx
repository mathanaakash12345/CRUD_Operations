import React, { useState } from 'react';
import {deletuser} from '../Services/Handleservice'
const DeleteUser = () => {
  const [email, setEmail] = useState("");
  const [isdelete, setIsdelete] = useState('')

  const handledelete = async (e) => {
    e.preventDefault();
    try {
      console.log("Deleting user with email:", email);
      const response = await deletuser(email);
      setIsdelete(response.data.msg)
    } catch (e) {
      console.log("Error:", e);
      setIsdelete(e)
    }
  };

  return (
    <div className='w-fit mx-auto p-6 bg-white shadow-lg border rounded-md'>
      {!isdelete && (
      <>
      <h1 className="text-xl font-bold text-lig  text-center mb-4">
        Delete a User
      </h1>
    
      <form
        onSubmit={handledelete}
        className="grid grid-cols-2 gap-4 items-end"
      >
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            className="w-full p-2 border rounded-md focus:ring focus:ring-lig"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
    
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-lig text-white px-6 py-2 rounded-md hover:bg-orange"
          >
            Delete
          </button>
        </div>
      </form>
    </>
    
      )}

      {isdelete && (
        <div>
        <h3 className="text-2xl font-semibold text-center text-lig mb-4">
          {isdelete}
        </h3>
      </div>
      )}
    </div>
  );
};

export default DeleteUser;
