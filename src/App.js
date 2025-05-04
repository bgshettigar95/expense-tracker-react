import React from 'react'
import { BrowserRouter, Routes, Navigate, Route } from 'react-router';
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import Home from './pages/Dashboard/Home';
import Incomes from "./pages/Dashboard/Incomes";
import Expenses from "./pages/Dashboard/Expenses";
import UserProvider from './context/UserContext';

const App = () => {

  return <UserProvider>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signUp" exact element={<SignUp />} />
          <Route path="/dashboard" exact element={<Home />} />
          <Route path="/incomes" exact element={<Incomes />} />
          <Route path="/expenses" exact element={<Expenses />} />
        </Routes>
      </BrowserRouter>
    </div>
  </UserProvider>
}

const Root = () => {
  // check if token exists in localStorage
  const isAuthenticated = !!localStorage.getItem("token");

  //Redirect to dashboard if authenticated, else to login
  return isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />
}

export default App