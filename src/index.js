/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import Card from './Card';
import { friends } from './friends';
ReactDOM.render(
  <React.StrictMode>
    <>
    {friends.map((item, id) => 
        <Card id = {item.id} name = {item.fullname} email = {item.email}/>
    )}
      
    </>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
