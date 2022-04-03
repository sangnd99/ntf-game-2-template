import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

interface IHomeLayoutProps {}

const HomeLayout: React.FC<IHomeLayoutProps> = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeLayout;
