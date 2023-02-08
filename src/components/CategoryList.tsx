import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../app/hooks';
import { CreateCategoryProps } from '../interfaces/category.interface';
import { trimText } from '../utils/helper';

const CategoryList = () => {
  const { categories } = useAppSelector((state) => state.category);
  const [data, setData] = useState<CreateCategoryProps[]>([]);

  useEffect(() => {
    setData(categories);
  }, [categories]);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      {data.map((category) => (
        <div className="flex flex-col cursor-pointer items-start bg-white border border-gray-200 rounded-lg shadow md:flex-row lg:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img
            className="object-cover w-full rounded-t-lg h-full md:w-48 md:rounded-none md:rounded-l-lg"
            src="https://source.unsplash.com/random/500x500"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {category.name}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {trimText(category.description, 30)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
