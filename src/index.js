import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: "website-d60a2.firebaseapp.com",
  projectId: "website-d60a2",
  storageBucket: "website-d60a2.appspot.com",
  messagingSenderId: "59198077919",
  appId: "1:59198077919:web:8e56baf40905fb780e626a",
  measurementId: "G-W94PFCNZYJ"
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
reportWebVitals();