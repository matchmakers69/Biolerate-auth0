import axios from 'axios';

export const fetchNotification = async () => {
  const response = await axios.get(`${process.env.REACT_APP_BIORELATE_DATA}/notification`);
  return response.data;
};
