import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import GetProjects from "../../services/projectList";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';




function ProjectScreen() {
  const apiData = GetProjects().results;
  const [dataArray, setDataArray] = useState([]);
  useEffect(() => {
    console.log("Kicked in");
    setDataArray(apiData);
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

      <Table bordered hover className="mt-5">
        <thead>
          <tr>
            <th>Project</th>
            <th>Due Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {dataArray.map((product, index) => (
            <tr key={index}>
              <td>{product.package.name}</td>
              <td>{product.package.date}</td>
              <td>
                <Link to="/update">
                  <Button className="me-2 btn-pro" variant="primary">
                    Update
                  </Button>
                </Link>
                <Button className="btn-pro" variant="danger">
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default ProjectScreen;
