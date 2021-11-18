import axios from 'axios';

const baseUrl = 'http://localhost:3000/anecdotes';

const getAnecdotes = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const anecdoteService = {
  getAnecdotes,
};

export default anecdoteService;