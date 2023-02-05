import React, { useState } from 'react';
import { IoClose, IoSearch } from 'react-icons/io5';

const Search = () => {
  const [query, setQuery] = useState<string>('Titanic');
  return (
    <div className="flex items-center w-full relative">
      <span className="absolute inste-y-0 left-0 flex items-center ml-3 pointer-events-none text-gray-400">
        <IoSearch />
      </span>
      <input
        placeholder="Search here..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="bg-gray-50 border border-gray-300 outline-none py-2 text-gray-900 text-sm rounded-lg focus:ring focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white px-10 p-2.5 block w-full"
      />
      {query && (
        <span
          className="absolute inste-y-0 right-0 flex items-center mr-3 cursor-pointer hover:bg-gray-300 text-gray-400 p-1 rounded-full hover:text-gray-500"
          onClick={() => setQuery('')}
        >
          <IoClose />
        </span>
      )}
    </div>
  );
};

export default Search;
