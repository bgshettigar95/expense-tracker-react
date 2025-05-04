import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { SIDE_MENU_DATA } from "../../utils/data";
import CharAvatar from "../Cards/CharAvatar";

const SideMenu = ({ activemenu }) => {
  const { user, clearUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleClick = (route) => {
    if (route === "logout") {
      handleLogout();
      return;
    }

    navigate(route);
  };

  const handleLogout = () => {
    localStorage.clear();
    clearUser();
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center gap-2 px-2 bg-white border-r-2 border-r-slate-50 h-[calc(100vh-54px)] w-64">
      <div className="my-2 px-1 py-2 w-full flex flex-col justify-center items-center">
        {user.profileImgUrl ? (
          <img
            src={user.profileImgUrl}
            alt="Profile"
            className="w-20 h-20 rounded-full bg-slate-400"
          />
        ) : (
          <CharAvatar fullName={user.fullName} width="w-20" height="h-20" />
        )}

        <h5 className="w-full font-bold text-center mt-3">
          {user.fullName || ""}
        </h5>
      </div>

      {SIDE_MENU_DATA.map((item, index) => (
        <button
          className={`flex items-center w-full px-1 py-2 rounded-lg ${
            item.label === activemenu
              ? "bg-primary text-white"
              : "text-black bg-white"
          } `}
          onClick={() => handleClick(item.path)}
          key={`menu-${item.id}`}
        >
          <item.icon className="mr-2"></item.icon> {item.label}
        </button>
      ))}
    </div>
  );
};

export default SideMenu;
