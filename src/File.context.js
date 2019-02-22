import React, {useState} from 'react';

// File context
export const FileContext = React.createContext();

export function FileContextProvider({children}) {
  const [file, setFile] = useState({});

  const addRow = ({rowIndex}) => {
    let data = file.data.slice(0);
    const columnCount = file.columns.length;
    const row = Array(columnCount).fill('');
    let _data = [...data];
    // by request add row after index
    _data.splice(rowIndex + 1, 0, row);
    const _file = {...file, data: _data};
    setFile(_file);
  };

  const deleteRow = ({rowIndex}) => {
    let data = file.data.slice(0);
    data.splice(rowIndex, 1);
    const _file = {...file, data};
    setFile(_file);
  };

  const editCell = ({ rowIndex, columnIndex, value}) => {
    let data = file.data.slice(0);
    // added action first column means we shift index
    data[rowIndex][columnIndex - 1] = value;
    const _file = {...file, data};
    setFile(_file);
  };

  const value = {
    file,
    setFile,
    addRow,
    deleteRow,
    editCell,
  };

  return (
    <FileContext.Provider value={value}>
      {children}
    </FileContext.Provider>
  );
};

export const FileContextConsumer = FileContext.Consumer;
