import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const RootLayout = () => {
  return (
    <>
      <Header title={"Image Gallery"} />
      <Outlet />
    </>
  );
};

export default RootLayout;
