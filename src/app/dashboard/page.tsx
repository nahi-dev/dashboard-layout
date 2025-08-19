import React from "react";
import Chart from "../components/Dashboard/chart/page";
import Card from "../components/Dashboard/card/page";
import Transaction from "../components/Dashboard/transaction/page";
import Rightbar from "../components/Dashboard/rightbar/page";

const DashboardPage = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-3 space-y-4 ml-[20px]">
        <div className="grid grid-cols-3 gap-4">
          <Card />
          <Card />
          <Card />
        </div>

        <div className="grid gap-[20px]">
          <Transaction />
          <Chart />
        </div>
      </div>
      <div className="col-span-1 self-start h-full">
        <div className="sticky top-[116px]">
          <Rightbar />
        </div>
      </div>
    </div>
  );
};
export default DashboardPage;
