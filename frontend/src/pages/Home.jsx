import React from "react";
import UserDetails from "../components/UserDetails";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Home</h1>
      <UserDetails />
    </div>
  );
};

export default Home;