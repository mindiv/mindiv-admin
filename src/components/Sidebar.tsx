import { Link, NavLink } from 'react-router-dom';
import {
  IoLibrary,
  IoStatsChart,
  IoSettings,
  IoLogOut,
  IoMoon,
} from 'react-icons/io5';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { clearAuthTokenFromStorage } from '../features/authSlice';
import { setThemeMode } from '../features/appSlice';
import { useState } from 'react';
import ToggleTheme from './misc/ToggleTheme';

const links = [
  { name: 'Dasboard', url: '/', icon: <IoStatsChart /> },
  { name: 'Resources', url: '/resources', icon: <IoLibrary /> },
  { name: 'Settings', url: '/settings', icon: <IoSettings /> },
];

const Sidebar = () => {
  return (
    <div className="flex flex-col px-5 py-5 w-64 transition-transform justify-between bg-gray-100 dark:bg-gray-900 dark:text-gray-200">
      <div>
        <div className="pb-8 text-2xl">
          <Link to="/">Mindiv Admin</Link>
        </div>
        <div className="">
          {links.map((link, index) => (
            <NavLink
              className={({ isActive }) =>
                (isActive
                  ? 'active dark:bg-gray-700 dark:hover:text-gray-200 bg-gray-300'
                  : '') +
                ' flex items-center p-3 text-base font-normal rounded-lg hover:text-grey-100 dark:hover:text-gray-400'
              }
              to={link.url}
              key={index}
            >
              <span className="mr-5 transition duration-75 text-gray-500 dark:text-gray-400">
                {link.icon}
              </span>
              <span className="link-text">{link.name}</span>
            </NavLink>
          ))}
        </div>
      </div>
      <div>
        <ToggleTheme />
      </div>
    </div>
  );
};

export default Sidebar;
