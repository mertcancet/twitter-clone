import React from 'react';
import { Search } from '../icons/index';
const SearchBox = () => {
  return (
    <div className='flex items-center justify-center text-gray-dark bg-primary-darkest px-5 py-3 rounded-full mt-2 ml-2 focus-within:ring-1 focus-within:ring-primary focus-within:text-primary'>
      <Search className='w-7 h-7 mr-2' />
      <input
        type='text'
        className='w-full bg-primary-darkest focus-within:outline-none text-white'
        placeholder="Twitter'da Ara"
      />
    </div>
  );
};

export default SearchBox;
