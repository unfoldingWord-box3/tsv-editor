import React from 'react';
import './App.css';

import ApplicationBar from './ApplicationBar';
import Table from './Table';

import { FileContextProvider } from './File.context';

const App = () => {
  return (
    <div className="App">
      <FileContextProvider>
        <ApplicationBar />
        <Table />
      </FileContextProvider>
    </div>
  );
};

export default App;
