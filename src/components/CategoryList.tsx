import { useEffect, useState } from 'react';
import { useAppSelector } from '../app/hooks';
import { CategoryData } from '../interfaces/category.interface';
import { trimTextToLength } from '../utils/helper';

const CategoryList = () => {
  const { categories } = useAppSelector((state) => state.category);
  const [data, setData] = useState<CategoryData[]>([]);

  useEffect(() => {
    setData(categories);
  }, [categories]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      {data.map((category, index) => (
        <div
          key={index}
          className="flex flex-col cursor-pointer  bg-white border border-gray-200 rounded-lg shadow lg:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-4"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {category.name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {trimTextToLength(category.description, 150)}
          </p>
          <div className="text-gray-700 dark:text-gray-200">
            <span>Questions:</span>{' '}
            <span className="font-bold">{category.questionCount}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
