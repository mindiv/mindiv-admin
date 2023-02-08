import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Tabs from '../components/Tabs';

const tabs = [
  { name: 'Categories', alias: 'categories' },
  { name: 'Questions', alias: 'questions' },
  { name: 'Admins', alias: 'admins' },
  { name: 'Users', alias: 'users' },
];

const Resources = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const tab = searchParams.get('tab');

  const [activeTab, setActiveTab] = useState<string>('categories');

  useEffect(() => {
    setActiveTab(tab || 'categories');
  }, [tab]);
  return (
    <div>
      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default Resources;
