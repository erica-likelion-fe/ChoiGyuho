import Header from "../components/Header";
import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";

const Web = () => {
  return (
    <>
      <Header title={"ERICA x React Props State"} />
      <Nav />
      <Outlet />
    </>
  );
};

export default Web;
