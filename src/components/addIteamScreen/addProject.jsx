import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import {  Link  } from "react-router-dom";

function AddPorjectScreen() {
  return (
    <div className=" form-width centerBox">
      <Container >
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label><h1>Add Project</h1></Form.Label>
            <Form.Control type="text" placeholder="Project Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="date" placeholder="Due Date" />
          </Form.Group>
          <Button className="btn-pro form-btn" variant="primary" type="submit">
            Save Project
          </Button>
        </Form>
        <Link to="/"><h4 className="mt-3">Back to project List</h4></Link>
      </Container>
    </div>
  );
}

export default AddPorjectScreen;
