import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface TabsProps {
  tabs: { name: string; alias: string }[];
  activeTab: string;
  setActiveTab: any;
}

const Tabs = ({ tabs, activeTab, setActiveTab }: TabsProps) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const param = searchParams.get('tab');

  useEffect(() => {
    if (tabs.some((tab) => tab.alias === param)) {
      setActiveTab(param);
    } else {
      setActiveTab(tabs[0].alias);
    }
  }, [param]);

  return (
    <div className="mb-10">
      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
        {tabs.map((tab) => (
          <li className="mr-2" key={tab.alias}>
            <Link
              to={`?tab=${tab.alias}`}
              onClick={() => setActiveTab(tab.alias)}
              className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${
                activeTab === tab.alias ? 'border-blue-600' : ''
              }`}
            >
              {tab.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
