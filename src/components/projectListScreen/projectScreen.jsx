import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductTable from "../projectListScreen/table";
import GetProjects from "../../services/projectList";
const axios = require('axios').default;

function ProjectScreen() {
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {  
    GetProjects().then(projectData=> setDataArray(projectData));
  },[]);

  return (
    <Container>
      <div className="left-justify centerBox">
        <h1 className="my-5 ">Project List</h1>
        <Link to="/add">
          <Button className="me-2 btn-pro" variant="primary">
            Add Project
          </Button>
        </Link>
      </div>
      <ProductTable data={dataArray}/>
    </Container>
  );
}

export default ProjectScreen;
