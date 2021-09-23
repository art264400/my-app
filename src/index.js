import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [{ id: 1, name: 'Dimych' }, { id: 2, name: 'Arthur' }, { id: 3, name: 'Игорь' }, { id: 4, name: 'Вероника' }, { id: 5, name: 'Рулсан' }];
let messageData = [{ content: 'Привет, как дела'}, { content: 'Что делаешь'}, { content: 'займи 5к'}, { content: 'как там'}];

let postsData = [{ message: "1 пост", likeCount: 10 }, { message: "2 пост ", likeCount: 20 }, { message: "3 пост", likeCount: 30 }, { message: "gfds", likeCount: 12312410 }];

ReactDOM.render(
  <React.StrictMode>
    <App dialogsData={dialogsData} messageData={messageData} posts={postsData}></App>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
