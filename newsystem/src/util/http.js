import axios from 'axios';
import { store } from '../redux/store';
axios.defaults.baseURL = 'http://localhost:5000';
//axios.interceptors.request.use
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    //console.log(config);
    store.dispatch({ type: 'change_loading', payload: true });
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (config) {
    // Do something before request is sent
    //console.log(config);
    store.dispatch({ type: 'change_loading', payload: false });
    return config;
  },
  function (error) {
    // Do something with request error
    store.dispatch({ type: 'change_loading', payload: false });
    return Promise.reject(error);
  }
);
