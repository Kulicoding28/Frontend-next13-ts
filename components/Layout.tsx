import React from "react";
import { Sidebar } from "./Layout/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen bg-slate-50">
      <div className="container h-full mx-auto xl:px-32 max-w-6xl">
        <div className="grid grid-cols-4 h-full">
          <Sidebar />
          <div className="col-span-3 lg:col-span-2 border-x-[1px] border-gray-800">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
