import React from 'react';
import { connect } from 'react-redux';
import { changeFilter } from '../reducers/filterReducer';

const Filter = (props) => {
  const handleOnChange = (e) => {
    props.changeFilter(e.target.value);
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

const mapDispatchToProps = {
  changeFilter,
};

export default connect(null, mapDispatchToProps)(Filter);
