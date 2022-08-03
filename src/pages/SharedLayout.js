// import { Outlet } from "react-router";
import { Outlet } from "react-router";
import Footer from "Footer";
import NavigationMenu from "Navbar";

const SharedLayout = () => {
  return (
    <>
      <NavigationMenu />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;
