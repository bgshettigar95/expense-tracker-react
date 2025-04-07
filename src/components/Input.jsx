import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Input = ({ value, label, onChange, placeholder, type }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <label className="text-[13px] font-medium text-slate-800">{label}</label>
      <div className="input-box">
        <input
          className="input"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
        />

        {type === "password" &&
          (showPassword ? (
            <FaRegEye
              size={22}
              className="text-primary cursor-pointer mr-2"
              onClick={togglePassword}
            />
          ) : (
            <FaRegEyeSlash
              size={22}
              className="text-slate-400 cursor-pointer mr-2"
              onClick={togglePassword}
            />
          ))}
      </div>
    </div>
  );
};

export default Input;
