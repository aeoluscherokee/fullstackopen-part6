import anecdoteService from '../services/anecdoteService';

const initialState = [];

const reducer = (state = initialState, action) => {
  console.log('state now: ', state);
  console.log('action', action);
  switch (action.type) {
    case 'VOTE': {
      const id = action.data.id;
      const anecdoteToChange = state.find((n) => n.id === id);
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1,
      };
      return state.map((anecdote) =>
        anecdote.id !== id ? anecdote : changedAnecdote
      );
    }
    case 'NEW_ANECDOTE': {
      console.log(action.data);
      return [...state, action.data];
    }
    case 'INIT_ANECDOTES': {
      return action.data;
    }
    default:
      return state;
  }
};

export const voteAnecdote = ({ id, content, votes }) => {
  const updatedAnecdote = {
    id,
    votes: votes + 1,
    content,
  };
  return async (dispatch) => {
    await anecdoteService.voteAnecdote(id, updatedAnecdote);
    dispatch({
      type: 'VOTE',
      data: { id },
    });
  };
};

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const response = await anecdoteService.createNew(content);
    dispatch({ type: 'NEW_ANECDOTE', data: response });
  };
};

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch({ type: 'INIT_ANECDOTES', data: anecdotes });
  };
};

export default reducer;
