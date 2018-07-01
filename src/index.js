import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

//Will be use globally
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
//axios.defaults.headers

axios.interceptors.request.use(requestConfig => {
    console.log(requestConfig);
    //we can also edit the request config (add headers...etc)
    return requestConfig; // without a return we are blocking the request
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log(response);
    //we can also edit the request config (add headers...etc)
    return response; // without a return we are blocking the request
}, error => {
    console.log(error);
    return Promise.reject(error);
});


ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
