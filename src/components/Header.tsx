import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderWrap>
      <HeaderInner>
        <h2>Dashboard</h2>
        <button>Add New</button>
      </HeaderInner>
    </HeaderWrap>
  );
};

const AddActions = () => {
  const actions = [
    { name: 'Category' },
    { name: 'Collection' },
    { name: 'Question' },
  ];
  const handleAction = (action: string) => {
    console.log(action);
  };
  return (
    <div>
      {actions.map((action, index) => (
        <button key={index} onClick={() => handleAction(action.name)}>
          Create {action.name}
        </button>
      ))}
    </div>
  );
};

const HeaderWrap = styled.div``;

const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Header;
