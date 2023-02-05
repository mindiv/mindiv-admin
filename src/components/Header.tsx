import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BoxShadow } from 'react-shadow-component';
import styled from 'styled-components';
import { Button, Container } from '../styles/GlobalStyle';
import { ButtonPrimary } from './misc/ Button';
import Search from './Search';

const Header = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div className="flex justify-between items-center h-20">
      <div className="w-1/2">
        <Search />
      </div>
      <div>
        <ButtonPrimary>Add New</ButtonPrimary>
        {visible && <AddItems close={() => setVisible(false)} />}
      </div>
    </div>
  );
};

interface AddItemsProps {
  close: Function;
}

const AddItems = ({ close }: AddItemsProps) => {
  const actions = [
    { name: 'Category', url: '/new/category' },
    { name: 'Collection', url: '/new/collection' },
    { name: 'Question', url: '/new/question' },
    { name: 'User', url: '/new/user' },
  ];
  const handleAction = (action: string) => {
    close();
  };

  return (
    <>
      <div onClick={() => close()} />
      <div>
        <div>
          {actions.map((action, index) => (
            <Link
              to={action.url}
              key={index}
              onClick={() => handleAction(action.name)}
            >
              New {action.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
