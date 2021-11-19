import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://8dbb-59-103-138-54.ngrok.io',
});

export default instance;
