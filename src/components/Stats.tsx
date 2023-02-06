import { IoChatbubble, IoGrid, IoPeople } from 'react-icons/io5';
import styled from 'styled-components';
import { useAppSelector } from '../app/hooks';
import { Heading1 } from './misc/Heading';
import Number from './misc/Number';

const Stats = () => {
  const { stats } = useAppSelector((state) => state.stat);
  const statsData = [
    { name: 'Users', total: stats?.users, icon: <IoPeople /> },
    { name: 'Categories', total: stats?.categories, icon: <IoGrid /> },
    { name: 'Questions', total: stats?.questions, icon: <IoChatbubble /> },
  ];

  return (
    <div>
      <Heading1 text="Statistics" />
      <div className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-3 gap-4">
        {statsData.map((data) => (
          <StatCard data={data} key={data.name} />
        ))}
      </div>
    </div>
  );
};

interface StatsProps {
  data: { name: string; total: number; icon: JSX.Element };
}

const StatCard = ({ data }: StatsProps) => {
  return (
    <div className="block  max-w-sm p-6 bg-gray-100 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700  text-gray-700 dark:text-gray-200">
      <div className="text-2xl mb-3">{data.icon}</div>
      <p className="">{data.name}</p>
      <h2 className="text-2xl font-semibold">
        <Number number={data.total} />
      </h2>
    </div>
  );
};

const CardWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  padding: 20px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.borderColor};
  color: ${(props) => props.theme.colors.text};

  .card-title {
    font-size: 16px;
    color: ${(props) => props.theme.colors.text};
  }

  .card-top {
    color: ${(props) => props.theme.colors.text};
    display: flex;
    margin-bottom: 20px;
    align-items: center;
    justify-content: space-between;
  }

  .card-icon {
    width: 50px;
    height: 50px;
    background-color: ${(props) => props.theme.colors.secondary};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
  }

  .card-more {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    border-radius: 50%;
    cursor: pointer;
    :hover {
      background-color: #eee;
    }
  }
`;

export default Stats;
