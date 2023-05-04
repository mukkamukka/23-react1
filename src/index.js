import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './chapter_03/Library'
import CommentList from './chapter_05/CommentList'
import NotificationList from './chapter_06/NotificationList';
import Notification from './chapter_06/Notification';
import Accommodate from './chapter_07/Accommodate';
import midterm from './practice/midterm'; 
import AttendanceBook from './chapter_10/AttendanceBook';
import SignUp from './chatpter_11/SignUp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SignUp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
