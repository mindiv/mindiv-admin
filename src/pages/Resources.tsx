import React, { useState } from 'react';
import Tabs from '../components/Tabs';

const tabs = [
  { name: 'Categories', alias: 'categories' },
  { name: 'Questions', alias: 'questions' },
  { name: 'Admins', alias: 'admins' },
  { name: 'Users', alias: 'users' },
];

const Resources = () => {
  const [activeTab, setActiveTab] = useState('categories');
  return (
    <div>
      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default Resources;
