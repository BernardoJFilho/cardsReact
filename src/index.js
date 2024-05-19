import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import '@mantine/core/styles.css';
import App from './App';
import { createTheme, MantineProvider, rem } from '@mantine/core';

const theme = createTheme({
  defaultGradient: {
    from: 'blue',
    to: 'black',
    deg: 45,
  },
  defaultTeste: {
    from: 'blue',
    to: 'black',
    deg: 45,
  },
  // primaryColor: 'gray',
  fontFamily: "Fira-code",
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </React.StrictMode>
);
