import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://3.19.0.247:8080/',
});

export default instance;
