import { Outlet } from "react-router-dom";

const mainNav = [
  { title: "Main", URL: "/" },
  { title: "Products", URL: "/Products" },
];

const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
