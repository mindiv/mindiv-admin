import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import CategoryList from '../components/CategoryList';
import QuestionList from '../components/QuestionList';
import Tabs from '../components/Tabs';

const tabs = [
  { name: 'Categories', alias: 'categories' },
  { name: 'Questions', alias: 'questions' },
  { name: 'Admins', alias: 'admins' },
  { name: 'Users', alias: 'users' },
];

const Resources = () => {
  const [activeTab, setActiveTab] = useState<string>('categories');

  return (
    <div className="mb-10">
      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'categories' && <CategoryList />}
      {activeTab === 'questions' && <QuestionList />}
    </div>
  );
};

export default Resources;
