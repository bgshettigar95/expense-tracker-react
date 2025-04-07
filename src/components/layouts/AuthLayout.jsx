import React from "react";
import CARD from "../../assets/CARD.JPG";
import { LuTrendingUpDown } from "react-icons/lu";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex">
      <div className="w-screen h-screen md:w-[60vw] pt-8 pb-12 px-6">
        <h2 className="text-lg font-semibold text-black">Expense Tracker</h2>
        {children}
      </div>
      <div className="hidden md:block w-[40vw] h-screen bg-violet-50 overflow-hidden">
        <div className="w-48 h-48 rounded-[40px] bg-purple-600 absolute top-0"></div>
        <div className="w-48 h-48 rounded-[40px] border-[20px] border-fuchsia-600 absolute top-[30%] right-0"></div>
        <div className="w-48 h-48 rounded-[40px] bg-purple-600 absolute bottom-0"></div>

        <div className="grid grid-cols-1 z-20">
          <StatsInfoCard
            icon={<LuTrendingUpDown />}
            label="Track Your income and expense"
            value="430,324"
            color="bg-primary"
          ></StatsInfoCard>
        </div>

        <img
          src={CARD}
          className="w-64 md:w-[60%] absolute bottom-10 shadow-lg"
          alt="presentational purposes only"
        />
      </div>
    </div>
  );
};

const StatsInfoCard = ({ icon, label, value, color }) => {
  return (
    <div className="flex gap-6 shadow-xl rounded-xl bg-white mt-3 mx-3 p-2 z-20 items-center">
      <div
        className={`h-8 w-8 flex justify-center items-center text-[26px] text-white ${color} rounded-full`}
      >
        {icon}
      </div>
      <div>
        <div className="text-gray-500">{label}</div>
        <div className="text-[20px] font-bold">${value}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
