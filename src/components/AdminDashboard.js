import React, { useState } from "react";
import SideMenu from "./SideMenu";

export default function AdminDashboard() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex">
      <SideMenu />
      <div className="container mx-auto mt-12">
        <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
          <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
            <div className="text-sm font-medium text-gray-500 truncate">
              Welcome!
            </div>
            <div className="mt-1 text-3xl font-semibold text-gray-900">
              Admin
            </div>
            <select class="selectpicker" multiple data-live-search="true">
              <option>Mustard</option>
              <option>Ketchup</option>
              <option>Relish</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
