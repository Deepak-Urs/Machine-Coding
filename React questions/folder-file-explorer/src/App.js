import { useState } from 'react';
import './App.css';
import explorer from './data/folderData';
import Folder from './components/Folder';

function App() {
  const [explorerData, setExplorerData] = useState(explorer || [])


  return (
    <div className="App">
      <h1>File Explorer</h1>
      <Folder explorer={explorer} />
    </div>
  );
}

export default App;
