import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
  {id: 1, post: 'Hey there!', like: 2},
  {id: 2, post: 'Hi everyone :)', like: 5},
  {id: 3, post: 'Just getting started', like: 0} 
];

let dialogsData = [
  { id: 1, name: 'Vladimir' },
  { id: 2, name: 'Anna' },
  { id: 3, name: 'Artem' },
  { id: 4, name: 'Sveta' },
  { id: 5, name: 'Valera' }
];

let messagesData = [
  { id: 1, message: 'Hey!' },
  { id: 2, message: 'Hi!' },
  { id: 3, message: 'Hi there!' }
];

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
