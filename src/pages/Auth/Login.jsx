import React, { useState } from "react";
import AuthLayout from "../../components/layouts/AuthLayout";
import Input from "../../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { validateEmail } from "../../utils/helper";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter valid Email");
      return;
    }

    if (!password) {
      setError("Please enter password");
      return;
    }

    setError("");

    //API call to Login
  };

  return (
    <AuthLayout>
      <div className=" h-[3/4]  md:h-full md:w-[70%] flex flex-col justify-center">
        <h3 className="text-lg font-semibold text-black">Welcome Back</h3>
        <p className="text-xs text-slate-900">
          Please enter your details to log in
        </p>

        <form onSubmit={handleLogin} className="mt-3">
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

          {error && <p className="text-red-600">{error}</p>}

          <button type="submit" className="btn-primary">
            Submit
          </button>
        </form>

        <p className="text-sm">
          Don't have an account?
          <Link className="text-primary underline ml-1" to="/signUp">
            SignUp
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Login;
