import React from "react";
import Navbar from "../components/Dashboard/Navbar/page";
import Sidebar from "../components/Dashboard/Sidebar/page";
import "../components/dashboard/dashboard.module.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex  ">
      <div className=" side_bar flex-[1] pt-[30px] ">
        <Sidebar />
      </div>
      <div className="flex-[3] ">
        <div>
          <Navbar />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
