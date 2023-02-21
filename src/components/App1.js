import React from "react";
import App2SideMenu from "./App2SideMenu";

export default function App1() {
  return (
    <div className="flex">
      <App2SideMenu />
      <div className="container mx-auto mt-12">
        <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
          <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
            <div className="text-sm font-medium text-gray-500 truncate">
              Application 1
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
