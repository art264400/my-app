import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost } from './Redux/state';

export let rerenderEnireTree = (state) =>{
  debugger;
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost}></App>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

