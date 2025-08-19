import React from "react";
import Navbar from "../components/Dashboard/Navbar/page";
import Sidebar from "../components/Dashboard/Sidebar/page";
import "../components/dashboard/dashboard.module.css";
import Footer from "../components/Dashboard/footer/page";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex ">
        <div className=" side_bar  flex-[0.8] pt-[30px] h-[100vh] sticky top-0">
          <Sidebar />
        </div>
        <div className="flex-[3] ">
          <div>
            <Navbar />
          </div>
          <div>
            {children}
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
