import React from 'react'
import { Table as TableBootstrap } from "react-bootstrap";

const Table = ({ tutorials, setCurrentId, currentId }) => {
  return (
    <TableBootstrap striped bordered hover responsive>
        <thead>
            <tr>
            <th>ID #</th>
            <th>Title</th>
            <th>Description</th>
            <th>Published</th>
            </tr>
        </thead>
        <tbody>
            {
                tutorials.map(tutorial => {
                    return (
                        <tr 
                            className={currentId === tutorial.id ? "bg-secondary" : ""}
                            key={tutorial.id} 
                            onClick={(() => {
                                if (tutorial.id !== currentId){
                                    setCurrentId(tutorial.id)
                                }
                                else {
                                    setCurrentId(null)
                                }
                            })}
                            style={{ cursor: "pointer" }}
                        >
                            <td>{tutorial.id}</td>
                            <td>{tutorial.title}</td>
                            <td>{tutorial.description}</td>
                            <td>{tutorial.published ? 'true' : 'false'}</td>
                        </tr>
                    );
                })
            }
        </tbody>
    </TableBootstrap>
  )
}

export default Table;