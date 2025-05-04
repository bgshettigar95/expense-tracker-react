import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/layouts/AuthLayout";
import Input from "../../components/Input";
import { validateEmail } from "../../utils/helper";
import ProfileImageSelector from "../../components/ProfileImageSelector";
import { UserContext } from "../../context/UserContext";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import uploadImage from "../../utils/uploadImage";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [error, setError] = useState(null);

  const { updateUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!fullName) {
      setError("Please enter Name");
    }

    if (!validateEmail(email)) {
      setError("Please enter valid Email");
      return;
    }

    if (!password) {
      setError("Please enter password");
      return;
    }

    setError("");

    //API call to SignUp
    try {
      let profileImgUrl;
      //Uplaod image if present
      if (profilePic) {
        const imageUploadRes = await uploadImage(profilePic);

        profileImgUrl = imageUploadRes || "";
      }

      const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
        fullName,
        email,
        password,
        profileImgUrl,
      });

      const { token, user } = response.data;

      if (token) {
        localStorage.setItem("token", token);
        updateUser(user);
        navigate("/dashboard");
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("Server Error, Please try again after sometime");
      }
    }
  };

  return (
    <AuthLayout>
      <div className=" h-[3/4]  md:h-full flex flex-col justify-center">
        <h3 className="text-lg font-semibold text-black">Create an Account</h3>
        <p className="text-xs text-slate-900">
          Join us today by entering your details below.
        </p>

        <ProfileImageSelector image={profilePic} setImage={setProfilePic} />
        <form
          onSubmit={handleSignUp}
          className="mt-3 flex flex-col justify-center items-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              value={fullName}
              label="Full Name"
              onChange={({ target }) => setFullName(target.value)}
              placeholder="john"
              type="text"
            />

            <Input
              value={email}
              label="Email Address"
              onChange={({ target }) => setEmail(target.value)}
              placeholder="john@example.com"
              type="text"
            />

            <Input
              value={password}
              label="Password"
              onChange={({ target }) => setPassword(target.value)}
              placeholder="Min 8 Characters"
              type="password"
            />
          </div>
          {error && <p className="text-red-600">{error}</p>}

          <button type="submit" className="btn-primary">
            Submit
          </button>
        </form>

        <p className="text-sm">
          Already have an account?
          <Link className="text-primary underline ml-1" to="/login">
            Login
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
