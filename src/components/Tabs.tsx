import React from 'react';

interface TabsProps {
  tabs: { name: string; alias: string }[];
  activeTab: string;
  setActiveTab: any;
}

const Tabs = ({ tabs, activeTab, setActiveTab }: TabsProps) => {
  return (
    <div>
      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
        {tabs.map((tab) => (
          <li className="mr-2" key={tab.alias}>
            <a
              href="#"
              onClick={() => setActiveTab(tab.alias)}
              className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${
                activeTab === tab.alias ? 'border-blue-600' : ''
              }`}
            >
              {tab.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
