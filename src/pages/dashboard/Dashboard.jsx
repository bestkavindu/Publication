import React from "react";
import { Link } from "react-router-dom";
import Table from "../../components/dashboard/DataTable";

const Dashboard = () => {
  return (
    <div>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mt-1 mb-5  text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Take control of your team.
            </p>
            <Link to={"/"}>
              <button className="" href="/fef">
                Add
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Table />
    </div>
  );
};

export default Dashboard;
