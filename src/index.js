import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css';
import App from './App';
import NavBar from "./nav/nav.jsx";


const webPage = 
    <>
      <App />
      <NavBar /> 
    </>

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(webPage);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

