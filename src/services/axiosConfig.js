import axios from 'axios';
const TIMEOUT = 10000
const BASE_URL = 'http://13.200.255.136:8009'

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});


export const apiWithHeader = (accessToken) =>
  axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
    headers: {
      "Content-Type": 'application/json',
      "Authorization": `Bearer ${accessToken}`,
    },
  });
  

  