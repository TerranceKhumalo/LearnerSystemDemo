import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function ProductTable(props) {
    return (
        <Table bordered hover className="mt-5">
        <thead>
          <tr>
            <th>Project</th>
            <th>Due Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((product, index) => (
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
    );
}

export default ProductTable;