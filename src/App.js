import React, { useState } from 'react'

import Header from './components/Header';
import Table from './components/Table';
import EditTutorial from './components/EditTutorial';
import CreateTutorial from './components/CreateTutorial';
import { deleteTutorial } from './utils/fetches';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

const App = () => {
  const [tutorials, setTutorials] = useState([]);
  const [currentId, setCurrentId] = useState(null);
  const [showCreateTutorial, setShowCreateTutorial] = useState(false);
  const [showUpdateTutorial, setShowUpdateTutorial] = useState(false);

  const deleteTutorialHandler = () => {
    deleteTutorial(currentId);
    setTutorials(oldTutorials => {
      return oldTutorials.filter(function(tutorial, index, oldTutorials){ 
        return tutorial.id !== currentId;
      });
    });
    setCurrentId(null);
  }

  return (
    <div className="container-fluid p-0">
      <Header 
        currentId={currentId} 
        setCurrentId={setCurrentId} 
        setTutorials={setTutorials}
        showCreateTutorial={showCreateTutorial} 
        setShowCreateTutorial={setShowCreateTutorial} 
        deleteTutorialHandler={deleteTutorialHandler}
        setShowUpdateTutorial={setShowUpdateTutorial}
        showUpdateTutorial={showUpdateTutorial}
      />
      <Table 
        tutorials={tutorials} 
        setCurrentId={setCurrentId} 
        currentId={currentId}
      />
      {showCreateTutorial && (
        <CreateTutorial
          showCreateTutorial={showCreateTutorial} 
          setShowCreateTutorial={setShowCreateTutorial} 
        />
      )}
      {
        showUpdateTutorial && (
          <EditTutorial
            showUpdateTutorial={showUpdateTutorial}
            setShowUpdateTutorial={setShowUpdateTutorial}
            tutorial={tutorials.find(tutorial => tutorial.id === currentId)}
            currentId={currentId}
          />
        )
      }
    </div>
  )
}

export default App