import { Outlet } from "react-router-dom";
import Navigtion from "../components/Navigation";

const mainNav = [
  { title: "Home", url: "/" },
  { title: "Products", url: "/Products" },
];

const Layout = () => {
  return (
    <>
      <Navigtion navItems={mainNav} />
      <Outlet />
    </>
  );
};

export default Layout;
