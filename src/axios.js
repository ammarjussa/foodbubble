import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://c2e8-59-103-138-54.ngrok.io',
});

export default instance;
