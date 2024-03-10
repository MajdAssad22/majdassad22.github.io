import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      {/* Current Page */}
      <Outlet />
    </>
  );
};

export default MainLayout;
