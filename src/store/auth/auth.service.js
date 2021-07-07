import jwt_decode from 'jwt-decode';

export const getUserFromToken = (token) => {
  return jwt_decode(token);
};
