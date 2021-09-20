import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './inter/Header';

ReactDOM.render(
  <React.StrictMode>
    <header>
      <img src="" / >
    </header>
    <nav>
      <div>
        Profile
      </div>
    </nav>
    <App />
    <Header></Header>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
