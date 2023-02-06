import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const Dasboard = () => {
  return (
    <div className="flex bg-white dark:bg-gray-900 overflow-auto">
      <Sidebar />
      <div className="container mx-auto max-h-full h-screen px-4 flex flex-col flex-1">
        <Header />
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dasboard;
