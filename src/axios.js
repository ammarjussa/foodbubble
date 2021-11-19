import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://f83d-59-103-138-54.ngrok.io',
});

export default instance;
