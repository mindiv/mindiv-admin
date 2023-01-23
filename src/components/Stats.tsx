import React from 'react';
import { IoChatbubble, IoGrid, IoLayers, IoPeople } from 'react-icons/io5';
import styled from 'styled-components';
import Number from './misc/Number';

const Stats = () => {
  const statsData = [
    { name: 'Users', total: 18000000, icon: <IoPeople /> },
    { name: 'Categories', total: 100, icon: <IoGrid /> },
    { name: 'Collections', total: 980, icon: <IoLayers /> },
    { name: 'Questions', total: 823000, icon: <IoChatbubble /> },
  ];

  return (
    <StatsWrap>
      <CardWrap>
        {statsData.map((data) => (
          <StatCard data={data} key={data.name} />
        ))}
      </CardWrap>
    </StatsWrap>
  );
};

interface StatsProps {
  data: { name: string; total: number; icon: JSX.Element };
}

const StatCard = ({ data }: StatsProps) => {
  return (
    <Card>
      <div>
        <div className="card-top">
          <div className="card-icon">{data.icon}</div>
        </div>
        <p className="card-title">{data.name}</p>
        <h2>
          <Number number={data.total} />
        </h2>
      </div>
    </Card>
  );
};

const StatsWrap = styled.div``;

const CardWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #eee;

  .card-title {
    font-size: 16px;
    color: #555;
  }

  .card-top {
    display: flex;
    margin-bottom: 20px;
    align-items: center;
    justify-content: space-between;
  }

  .card-icon {
    width: 50px;
    height: 50px;
    background-color: #eee;
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
