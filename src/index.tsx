import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App />);

  // <React.StrictMode> см ниже
    // <App />
  // </React.StrictMode> по уроку Владлена Минина он удаляет эти строки чтобы не усложнять но впоследствии объяснит, я пока закомментировал