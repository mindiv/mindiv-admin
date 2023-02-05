import React from 'react';
import { IoSearch } from 'react-icons/io5';

const Search = () => {
  return (
    <div className="flex items-center w-full relative">
      <span className="absolute inste-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-300">
        <IoSearch />
      </span>
      <input
        placeholder="Search here..."
        className="bg-gray-50 border border-gray-300 outline-none px-3 py-2 text-gray-900 text-sm rounded-lg focus:ring focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white pl-10 p-2.5 block w-full"
      />
    </div>
  );
};

export default Search;
