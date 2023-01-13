import React from 'react';
import styled from 'styled-components';

const Stats = () => {
  const statsData = [
    { name: 'Users', total: 18000000 },
    { name: 'Categories', total: 100 },
    { name: 'Collections', total: 980 },
    { name: 'Questions', total: 823000 },
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
  data: { name: string; total: number };
}

const StatCard = ({ data }: StatsProps) => {
  return (
    <Card>
      <div>
        <h2>{data.total}</h2>
        <p>{data.name}</p>
      </div>
    </Card>
  );
};

const StatsWrap = styled.div``;

const CardWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

const Card = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;

export default Stats;
