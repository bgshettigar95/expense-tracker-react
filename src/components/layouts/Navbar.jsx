import React, { useState } from "react";
import SideMenu from "./SideMenu";
import { HiOutlineX, HiOutlineMenu } from "react-icons/hi";

const Navbar = ({ activemenu }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false);

  return (
    <div className="flex gap-4 bg-white border-b-slate-50 border-b-2 fixed w-screen py-3">
      <button
        className="block lg:hidden text-black"
        onClick={() => setOpenSideMenu(!openSideMenu)}
      >
        {openSideMenu ? (
          <HiOutlineX className="text-2xl" />
        ) : (
          <HiOutlineMenu className="text-2xl" />
        )}
      </button>
      <h2 className="text-lg font-medium text-black">Expense Tracker</h2>

      {openSideMenu && (
        <div className="fixed left-0 top-[54px]">
          <SideMenu activemenu={activemenu} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
