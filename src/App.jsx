import React from 'react';
import Routes from './routes';
import GlobalStyle from './styles/GlobalStyle';
import AppProvider from './providers/index.jsx';


export default function App() {
  return (
    <AppProvider>
      <GlobalStyle />
      <Routes />
    </AppProvider>
  );
}