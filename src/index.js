import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import FunctionalsProvider from './context/context';



ReactDOM.render(
 <FunctionalsProvider>
   <App />
 </FunctionalsProvider>
  ,
  document.getElementById('root')
);


