import React from 'react'
import { Dropdown, Button } from "react-bootstrap";

const Header = ({ commands, commandStr, id, setRequest }) => {
  return (
    <header className="container-fluid p-1 ">
      <div className="d-flex justify-content-between text-center">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {
              commands.map((commandItem, index) => (
                <Dropdown.Item 
                    as="button"
                    eventKey={commandItem.id} 
                    key={index} 
                    onClick={() => setRequest(commandItem.endpoint)}
                >
                    {commandItem.command}
                </Dropdown.Item>
              ))
            }
          </Dropdown.Menu>
        </Dropdown>
        <h4>Currently using command: {commandStr} for tutorial id: {id} </h4>
        <Button variant="primary" className="">Send Request</Button>
      </div>
    </header>
  )
}

export default Header