import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import Alltask from "../other/Alltask";

const AdminDashboard = () => {
  return (
    <div className="w-full h-screen p-10 bg-gray-900 text-white">
      <Header />
      <CreateTask/>
      <Alltask/>
    </div>
  );
};

export default AdminDashboard;

