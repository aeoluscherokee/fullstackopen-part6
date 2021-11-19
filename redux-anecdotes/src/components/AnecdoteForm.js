import React from 'react';
import { connect } from 'react-redux';
import { createAnecdote } from '../reducers/anecdoteReducer';

const AnecdoteForm = (props) => {
  const create = (e) => {
    e.preventDefault();
    const content = e.target.anecdote.value;
    props.createAnecdote(content);
    e.target.anecdote.value = '';
  };
  return (
    <>
      <h2>create new</h2>
      <form onSubmit={create}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </>
  );
};

const mapDispatchToProps = {
  createAnecdote,
};

export default connect(null, mapDispatchToProps)(AnecdoteForm);
