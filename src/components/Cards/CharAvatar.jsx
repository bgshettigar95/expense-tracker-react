import React from "react";
import { getInitials } from "../../utils/helper";

const CharAvatar = ({ fullName, width, height }) => {
  return (
    <div
      className={`flex justify-center items-center ${width ?? "w-20"} ${
        height ?? "h-20"
      } font-bold text-slate-400 rounded-full bg-slate-100 text-2xl`}
    >
      {getInitials(fullName)}
    </div>
  );
};

export default CharAvatar;
