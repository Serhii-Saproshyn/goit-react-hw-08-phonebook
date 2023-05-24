import { nanoid } from 'nanoid';
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { setFilterValue, setSearch } from 'redux/filter/filterSlice';

export const Filter = () => {
  const filterValue = useSelector(setFilterValue);
  const dispatch = useDispatch();
  const filterID = nanoid();
  return (
    <>
      <label htmlFor={filterID}>
        Find contacts by name
        <input
          type="text"
          value={filterValue}
          name="filter"
          onChange={e => dispatch(setSearch(e.target.value))}
          id={filterID}
        />
      </label>
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
