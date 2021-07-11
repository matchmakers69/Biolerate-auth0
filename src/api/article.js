import axios from 'axios';

export const fetchArticles = async () => {
  const response = await axios.get(`${process.env.REACT_APP_BIORELATE_DATA}/article`);
  return response.data;
};
