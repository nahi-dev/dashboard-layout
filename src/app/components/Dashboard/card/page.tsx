import React from "react";
import { MdOutlineSupervisedUserCircle } from "react-icons/md";
import "./card.css";
const Card = () => {
  return (
    <div>
      <div className="card flex p-[20px] rounded-[10px]  ">
        <MdOutlineSupervisedUserCircle className="text-white text-[20px] mr-2" />
        <div className="flex flex-col pl-1.5 gap-2.5 ">
          <span className="text-white font-bold text-[12px]">Total Users</span>
          <span className="text-white font-[500] text-[24px]">10.44</span>
          <span className="text-[#c2bfbf] text-[12px]">
            <span className="text-green-400 ">12%</span> more than previous
            week.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
