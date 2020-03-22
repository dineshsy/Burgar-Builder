import axios from 'axios';

const instance = axios.create({
  baseURL: "https://do-it-98864.firebaseio.com/"
});

export default instance;