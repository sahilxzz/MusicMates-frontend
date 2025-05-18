import React from 'react';
import './EditProfile.css'
//import Navbar from '../components/Navbar'; // adjust path accordingly

const EditProfile = () => {
  return (
    <>
      
      <div className=' px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url("/src/assets/hero-image.jpg")] bg-no-repeat bg-cover bg-center h-screen'>
        {/* <div className='container bg-[url("/src/assets/hero-image.jpg")]'> */}
        {/* Your profile form content goes here */}
        
        <div className='container'>
        <h1 className="text-4xl font-bold flex flex-center items-center justify-center">Edit Profile</h1>
        {/* Example form fields */}
        <form className="w-full max-w-lg bg-opacity-50 p-6 rounded-lg">
          <label className="block mb-4">
            <span className="text-white">Stage Name</span>
            <input
              type="text"
              name="stageName"
              placeholder="Enter your stage name"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white text-black px-3 py-2"
            />
          </label>

          <label className="block mb-4">
            <span className="text-white">Age</span>
            <input
              type="number"
              name="age"
              placeholder="Enter your age"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white text-black px-3 py-2"
            />
          </label>

          <label className="block mb-6">
            <span className="text-white">Profile Picture</span>
            <input
              type="file"
              name="profilePicture"
              accept="image/*"
              className="mt-1 block w-full text-white"
            />
          </label>
          

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition"
          >
            Save
          </button>
        </form>
      </div>
      </div>
    </>
  );
};

export default EditProfile;
