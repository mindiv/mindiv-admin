import { useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import OutsideClickHandler from 'react-outside-click-handler';
import { Link } from 'react-router-dom';
import { ButtonPrimary } from './misc/ Button';
import Search from './Search';

const Header = () => {
  return (
    <div className="flex justify-between relative items-center py-5 mb-5">
      <div className="lg:w-1/2 flex items-center">
        <div className="md:hidden mr-4 text-4xl text-gray-700 dark:text-gray-200 cursor-pointer">
          <IoMenu />
        </div>
        <Search />
      </div>
      <Dropdown />
    </div>
  );
};

const Dropdown = () => {
  const actions = [
    { name: 'Category', url: '/category/new' },
    { name: 'Question', url: '/question/new' },
    { name: 'User', url: '/user/new' },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <ButtonPrimary click={() => setIsOpen(!isOpen)}>Add New</ButtonPrimary>
      {isOpen && (
        <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
          <div className="z-10 absolute right-0 mt-2 bg-white divide-y divide-gray-100 rounded shadow-lg w-44 dark:bg-gray-700 dark:divide-gray-600">
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDividerButton"
            >
              {actions.map((action, index) => (
                <li key={index}>
                  <Link
                    onClick={() => setIsOpen(false)}
                    to={action.url}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    New {action.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="py-2">
              <a
                onClick={() => setIsOpen(false)}
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Separated link
              </a>
            </div>
          </div>
        </OutsideClickHandler>
      )}
    </div>
  );
};

export default Header;
