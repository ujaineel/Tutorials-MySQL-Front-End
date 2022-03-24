import React from 'react'
import { getData } from '../utils/fetches';



const Header = ({showCreateTutorial, deleteTutorialHandler, setShowPublished, currentId, ...props}) => {
  return (
      <div className="d-flex justify-content-around">
        <div className="d-flex justify-content-start flex-grow-1 mx-4 gap-2">
        <button 
          className="btn btn-primary" 
          onClick={() => props.setShowCreateTutorial(showCreateTutorial => !showCreateTutorial)}
        >
          Create a New Tutorial <i className="bi bi-pencil-square"></i>
        </button>
        {currentId && (
          <>
          <button 
            className="btn btn-danger" 
            onClick={() => deleteTutorialHandler()}
          >
            Delete <i className="bi bi-pencil-square"></i>
          </button>
          <button 
            className="btn btn-secondary"
            onClick={() => props.setShowUpdateTutorial(showUpdateTutorial => !showUpdateTutorial)}
          >
            Edit <i className="bi bi-pencil-square"></i>
          </button>
          </>
          )
        }
        <label>
          <input 
            type="checkbox" 
            checked={props.showPublished}
            onChange={() => setShowPublished(oldPublished => !oldPublished)}  
          />
          {' '} Published
        </label>
        </div>
        <button className="btn bi bi-arrow-clockwise" title="Refresh Tutorials" onClick={() => getData(props.setTutorials)} />
      </div>
  )
}

export default Header