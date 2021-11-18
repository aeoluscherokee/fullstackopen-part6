import React from 'react';
import { useDispatch } from 'react-redux';
import { createAnecdote } from '../reducers/anecdoteReducer';
import anecdoteService from '../services/anecdoteService';

const AnecdoteForm = () => {
  const dispatch = useDispatch();
  const create = async (e) => {
    e.preventDefault();
    const content = e.target.anecdote.value;
    try {
      const response = await anecdoteService.createNew(content);
      dispatch(createAnecdote(response));
    } catch (error) {
      console.log(error);
    }
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

export default AnecdoteForm;
