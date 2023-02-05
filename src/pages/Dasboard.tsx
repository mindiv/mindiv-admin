import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const Dasboard = () => {
  return (
    <div className="flex  h-screen bg-white dark:bg-gray-900">
      <Sidebar />
      <div className="container mx-auto px-4 flex flex-col flex-1">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Dasboard;
