import './App.css';
import Addtask from './components/Addtask';
import { useState } from 'react';
import Listtask from './components/Listtask';

function App() {
  const [ uploadTaskStatus , setUploadTaskStatus] = useState({});

  return (
    <div className='d-grid justify-content-center align-items-center'>
      <Addtask setUploadTaskStatus={setUploadTaskStatus} />
      <Listtask  uploadTaskStatus={uploadTaskStatus}/>
    </div>
  );
}

export default App;
