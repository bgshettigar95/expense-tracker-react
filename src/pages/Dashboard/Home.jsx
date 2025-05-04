import React from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { useUserAuth } from "../../hooks/useUserAuth";

const Home = () => {
  useUserAuth();
  return <DashboardLayout activemenu={"Dashboard"}></DashboardLayout>;
};

export default Home;
