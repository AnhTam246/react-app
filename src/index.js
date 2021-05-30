import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//import Ref from './Ref';
import RouterTest from './Router';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopMenu from './components/TopMenu';

//import AppAccordion from './AppAccordion';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <TopMenu />
    <RouterTest />
    {/* <Ref /> */}
    {/* <AppAccordion /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
