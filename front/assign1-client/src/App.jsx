import React, { useState } from 'react';
import './App.css';
import BoardList from './boards/BoardList';
import BoardView from './boards/BoardView';

function App() {
  const [selectedBoardId, setSelectedBoardId] = useState('new'); // 기본값을 'new'로 설정

  const handleSelectBoard = (id) => {
    setSelectedBoardId(id);
  };

  return (
    <div className='container'>
      <BoardList onSelectArticle={handleSelectBoard} />
      <BoardView selectedId={selectedBoardId} setSelectedId={setSelectedBoardId} />
    </div>
  );
}

export default App;
