import React from 'react';
import './Search-bar.styles.css'

export const SearchBox = ({ handleChange,handleSubmit }) => (
    <form onSubmit={handleSubmit}>
      <input
        className="search"
        type="search"
        placeholder='search news'
        onChange={handleChange}
      />
    </form>
  );