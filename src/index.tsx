import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./App.css"
import { MantineProvider } from '@mantine/core';
import '@mantine/dropzone/styles.css';
import { PrimeReactProvider } from 'primereact/api';

const value = {
  ripple: false,
};



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <PrimeReactProvider value={value}>
      <MantineProvider>
    <App />

      </MantineProvider>
    </PrimeReactProvider>

  </React.StrictMode>
);