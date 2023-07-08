import React from 'react';

const SearchInput = ({handleChange}) => {
  return (
    <input
      className="input"
      placeholder="search for a recipe"
      type="text"
      onChange={handleChange}
    />
  )
};

export default SearchInput;
