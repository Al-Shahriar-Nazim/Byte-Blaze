import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayouts = () => {
  return (
    <div>
   <div>
      <Navbar></Navbar>
    </div>

    {/* packets */}
    <Outlet></Outlet>
    </div>

  );
};

export default MainLayouts;
