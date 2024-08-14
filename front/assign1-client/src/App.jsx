import React, { useState } from 'react';
import './App.css';
import BoardList from './boards/BoardList';
import BoardView from './boards/BoardView';

function App() {
  const [selectedBoardId, setSelectedBoardId] = useState('new');

  const handleSelectBoard = (id) => {
    setSelectedBoardId(id);
  };

  return (
    <div className='container'>
      <BoardList onSelectArticle={handleSelectBoard} />
      <BoardView selectedId={selectedBoardId} />
    </div>
  );
}

export default App;
