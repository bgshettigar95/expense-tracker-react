import React, { useRef, useState } from "react";
import { LuTrash2, LuUpload, LuUser } from "react-icons/lu";

const ProfileImageSelector = ({ image, setImage }) => {
  const inputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      //Update the image state
      setImage(file);

      //Generate the Preview URL
      const preview = URL.createObjectURL(file);
      setPreviewUrl(preview);
    }
  };

  const handleRemoveFile = () => {
    setImage(null);
    setPreviewUrl(null);
    inputRef.current.value = null;
  };

  const onChooseFile = () => {
    inputRef.current.click();
  };

  return (
    <div>
      <input
        type="file"
        onChange={handleFileChange}
        ref={inputRef}
        className="hidden"
      />

      {!image ? (
        <div className="rounded-full bg-violet-50 w-24 h-24 flex justify-center items-center relative">
          <LuUser size={40} className="text-4xl" />
          <button
            className="absolute bottom-0 right-0 rounded-full bg-primary text-white p-1"
            onClick={onChooseFile}
          >
            <LuUpload size={22} />
          </button>
        </div>
      ) : (
        <div className="rounded-full flex w-24 h-24 justify-center items-center relative">
          <img
            src={previewUrl}
            className="rounded-full w-full h-full"
            alt="profilePic"
          />
          <button
            className="absolute bottom-0 right-0 rounded-full bg-red-600 text-white p-1"
            onClick={handleRemoveFile}
          >
            <LuTrash2 size={22} className="text-white" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileImageSelector;
