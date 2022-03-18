import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Table from "./components/Table";
import CreateTutorial from "./components/CreateTutorial";

const commands = [
  {
    command: "Create A Tutorial",
    request: "post",
    endpoint: "https://mysql-rest-api-express.herokuapp.com/tutorials",
    idRequired: false
  },
  {
    command: "Get All Tutorials",
    request: "get",
    endpoint: "https://mysql-rest-api-express.herokuapp.com/api/tutorials",
    idRequired: false
  },
  {
    command: "Get All Published Tutorials",
    request: "get",
    endpoint: "https://mysql-rest-api-express.herokuapp.com/api/tutorials/published",
    idRequired: false
  },
  {
    command: "Update A Tutorial",
    request: "put",
    endpoint: "https://mysql-rest-api-express.herokuapp.com/api/tutorials/",
    idRequired: true
  },
  {
    command: "Delete A Tutorial",
    request: "delete",
    endpoint: "https://mysql-rest-api-express.herokuapp.com/",
    idRequired: true
  },
  {
    command: "Delete All Tutorials",
    request: "delete",
    endpoint: "https://mysql-rest-api-express.herokuapp.com/",
    idRequired: false
  }
];


function App() {
  const [createTutorial, setCreateTutorial] = useState(false);
  const [tutorialList, setTutorialList] = useState([]);
  const [request, setRequest] = useState(commands[1].endpoint);
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    async function getData() {
      await axios.get('https://dented-dashing-mountain.glitch.me/api/tutorials')
          .then(res => {
            const tutorials = res.data;
            console.log(tutorials);
            setTutorialList(tutorials);
          })
          .catch(err => {
            throw err;
          })
        }

      getData();
  }, []);

  return (
    <div className="container-fluid max-h-100 p-0">
      <Header 
        commands={commands} 
        commandStr={request}
        id={currentId}
        setRequest={setRequest}
      />
      <Table 
        tutorials={tutorialList} 
        setCurrentId={setCurrentId} 
        currentId={currentId} 
      />
      {request === commands[0].endpoint && <CreateTutorial />}
    </div>
  );
}

export default App;
