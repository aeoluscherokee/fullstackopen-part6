import React from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../reducers/filterReducer';

const Filter = () => {
  const dispatch = useDispatch();
  const handleOnChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  const style = {
    marginBottom: 10,
  };
  return (
    <div style={style}>
      <input onChange={handleOnChange}></input>
    </div>
  );
};

export default Filter;
