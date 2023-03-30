import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Pokedex from './Pokedex';
// import UseEffect from './components/UseEffect'
// import UseEffectCopy from './components/UseEffectCopy'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <UseEffectCopy/> */}
    {/* <UseEffect/> */}
    <div className = 'flex justify-center py-24'>
      <Pokedex />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
