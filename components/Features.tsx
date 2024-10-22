import React from "react";

const Dashboard = () => {
  return (
    <div className="mx-auto max-w-5xl p-4 text-white">
      <div className="flex flex-col justify-center md:flex-row">
        <div className="w-full bg-white p-4 text-black md:w-7/12">
          Content 1
        </div>
        <div className="w-full bg-red-500 p-4 md:w-5/12">Content 2</div>
      </div>
      <div className="flex flex-col justify-center md:flex-row">
        <div className="w-full bg-red-500 p-4 md:w-5/12">Content 1</div>
        <div className="w-full bg-white p-4 text-black md:w-7/12">
          Content 2
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
