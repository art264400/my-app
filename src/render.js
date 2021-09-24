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

