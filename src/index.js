// These must be the first lines in src/index.js
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, { subscribe } from './Redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, updateNewPostText } from './Redux/state';

export let rerenderEnireTree = (state) =>{
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}></App>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
rerenderEnireTree(state);
subscribe(rerenderEnireTree);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
