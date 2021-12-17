import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { initializeApp } from 'firebase/app';




// initializing firebase here using firebase config
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGgGVvYfp5Po9PpWNPtwJWPrkZa07NflU",
  authDomain: "cart-9e60e.firebaseapp.com",
  projectId: "cart-9e60e",
  storageBucket: "cart-9e60e.appspot.com",
  messagingSenderId: "706758453403",
  appId: "1:706758453403:web:e591051def95bc2d2abe3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);





ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



