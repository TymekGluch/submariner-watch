import React from 'react';
import './App.css';
import { Article } from './components/Article/Article';
import { WatchContextProvider } from './contexts/WatchContext';

function App() {
  return (
    <WatchContextProvider>
      <Article />
    </WatchContextProvider>
  );
}

export default App;
