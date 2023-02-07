import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useAppDispatch } from '../app/hooks';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { getCategories } from '../features/categorySlice';
import { getStats } from '../features/statSlice';

const Dasboard = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getStats());
  }, []);

  return (
    <div className="flex bg-white dark:bg-gray-900 overflow-hidden">
      <Sidebar />
      <div className="container mx-auto max-h-full h-screen px-4 flex flex-col flex-1 overflow-y-auto">
        <Header />
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dasboard;
