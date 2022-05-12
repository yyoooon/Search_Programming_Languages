import request from './request.js';

export const getSearchResults = (keyword) =>
  request(`/languages?keyword=${keyword}`, {
    method: 'GET',
  });
