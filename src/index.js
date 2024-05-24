import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import '@mantine/core/styles.css';
import App from './App';
import { createTheme, MantineProvider, rem, virtualColor } from '@mantine/core';

const theme = createTheme({
  defaultGradient: {
    from: 'blue',
    to: 'black',
    deg: 45,
  },
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
