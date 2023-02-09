import { useEffect, useRef, useState } from 'react';
import { IoAdd } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { ButtonPrimary } from './misc/ Button';
import Search from './Search';

const Header = () => {
  return (
    <div className="flex justify-between relative items-center py-5 mb-5">
      <div className="w-1/2">
        <Search />
      </div>
      <Dropdown />
    </div>
  );
};

const Dropdown = () => {
  const actions = [
    { name: 'Category', url: '/new/category' },
    { name: 'Question', url: '/new/question' },
    { name: 'User', url: '/new/user' },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef}>
      <ButtonPrimary click={() => setIsOpen(!isOpen)}>Add New</ButtonPrimary>
      {isOpen && (
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
      )}
    </div>
  );
};

export default Header;
