import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import projectList from "../../data/projectList";

function ProjectScreen() {
  return (
    <Container>
      <div className="left-justify">
        <h1 className="my-5 ">Project List</h1>
        <Button className="me-2 btn-pro" variant="primary">
          Add Project
        </Button>
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
          {projectList.map((product, index) => (
            <tr key={index}>
              <td>{product.projectName}</td>
              <td>{product.date}</td>
              <td>
                <Button className="me-2 btn-pro" variant="primary">
                  Update
                </Button>
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
