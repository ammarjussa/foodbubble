import axios from 'axios';

const instance = axios.create({
  baseURL:
    'https://d032-59-103-138-54.ngrok.io/swagger-ui/index.html?configUrl=/v3/api-docs/swagger-config',
});

export default instance;
