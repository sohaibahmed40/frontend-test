import { Outlet } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const Layout = () => {
  return (
    <>
      <ToastContainer />

      <Outlet />
    </>
  );
};

export default Layout;
