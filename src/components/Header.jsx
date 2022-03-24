import React from 'react'
import { getData } from '../utils/fetches';



const Header = ({showCreateTutorial, deleteTutorialHandler, currentId, ...props}) => {
  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-around">
        <button 
          className="btn btn-primary" 
          onClick={() => props.setShowCreateTutorial(showCreateTutorial => !showCreateTutorial)}
        >
          Create a New Tutorial <i class="bi bi-pencil-square"></i>
        </button>
        {currentId && (
          <>
          <button 
            className="btn btn-danger" 
            onClick={() => deleteTutorialHandler()}
          >
            Delete <i class="bi bi-pencil-square"></i>
          </button>
          <button 
            className="btn btn-secondary"
            onClick={() => props.setShowUpdateTutorial(showUpdateTutorial => !showUpdateTutorial)}
          >
            Edit <i class="bi bi-pencil-square"></i>
          </button>
          </>
          )
        }
        <button className="btn bi bi-arrow-clockwise" title="Refresh Tutorials" onClick={() => getData(props.setTutorials)} />
      </div>
    </div>
  )
}

export default Header