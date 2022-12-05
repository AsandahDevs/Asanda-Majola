import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import NavigationMenu from "../Components/Navbar";

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