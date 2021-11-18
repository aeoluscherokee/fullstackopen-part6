import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { initializeAnecdotes, voteAnecdote } from '../reducers/anecdoteReducer';
import {
  showNotification,
  hideNotification,
} from '../reducers/notificationReducer';

const AnecdoteList = () => {
  const anecdotes = useSelector(({ anecdotes, filter }) =>
    anecdotes
      .filter((anecdote) =>
        anecdote.content.toLowerCase().includes(filter.toLowerCase())
      )
      .sort((a, b) => b.votes - a.votes)
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeAnecdotes());
  }, [dispatch]);
  const vote = (id, content) => {
    dispatch(voteAnecdote(id));
    dispatch(showNotification(content));
    setTimeout(() => dispatch(hideNotification()), 5000);
  };
  return (
    <>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id, anecdote.content)}>
              vote
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default AnecdoteList;
