import React from "react";
import { Followbar } from "./Layout/Followbar";
import { Sidebar } from "./Layout/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen bg-slate-900">
      <div className="container mx-auto h-full max-w-6xl xl:px-32">
        <div className="grid h-full grid-cols-4">
          <Sidebar />
          <div className="col-span-3 border-x-[1px] border-gray-800 lg:col-span-2">
            {children}
          </div>
          <Followbar />
        </div>
      </div>
    </div>
  );
};
