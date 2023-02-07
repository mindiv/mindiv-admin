import { Link, NavLink } from 'react-router-dom';
import { IoLibrary, IoStatsChart, IoSettings, IoLogOut } from 'react-icons/io5';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { clearAuthTokenFromStorage } from '../features/authSlice';
import ToggleTheme from './misc/ToggleTheme';
import { SquareBtn } from './misc/ Button';

const links = [
  { name: 'Dasboard', url: '/', icon: <IoStatsChart /> },
  { name: 'Resources', url: '/resources', icon: <IoLibrary /> },
  { name: 'Settings', url: '/settings', icon: <IoSettings /> },
];

const Sidebar = () => {
  const dispatch = useAppDispatch();

  const onLogout = () => {
    dispatch(clearAuthTokenFromStorage());
  };

  return (
    <div className="hidden fixed left-0 h-screen md:flex flex-col px-5 py-6 w-64 transition-transform justify-between bg-white dark:bg-gray-900 dark:text-gray-200 overflow-y-auto">
      <div>
        <div className="pb-8 text-2xl">
          <Link to="/">Mindiv Admin</Link>
        </div>
        <div className="">
          {links.map((link, index) => (
            <NavLink
              className={({ isActive }) =>
                (isActive ? 'dark:bg-gray-700 bg-gray-100' : '') +
                ' flex items-center p-3 text-base text-gray-700 dark:text-gray-200 font-normal rounded-lg hover:text-grey-100 dark:hover:text-gray-400'
              }
              to={link.url}
              key={index}
            >
              <span className="mr-5 transition duration-75 text-gray-700 text-lg dark:text-gray-400">
                {link.icon}
              </span>
              <span className="link-text">{link.name}</span>
            </NavLink>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-500 rounded-lg p-4 shadow-xl">
        <div className="flex flex-col justify-center items-center mb-5 text-gray-700 dark:text-gray-200">
          <div className="w-20 h-20 bg-gray-300 rounded-full mb-3"></div>
          <h3 className="text-lg font-semibold">Jerry Nwosu</h3>
          <p className="text-sm">jerrynwosu007@gmail.com</p>
        </div>
        <div className="flex gap-4">
          <ToggleTheme />
          <SquareBtn click={onLogout}>
            <IoLogOut />
          </SquareBtn>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
