import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";

export const Productos = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs lg="4" className="mt-2">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Producto</Form.Label>
                <Form.Control type="text" placeholder="Nombre Producto" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Precio</Form.Label>
                <Form.Control type="number" placeholder="5000" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Fabricante</Form.Label>
                <Form.Control type="text" placeholder="Nombre fabricante" />
              </Form.Group>
              <Button variant="outline-primary" type="submit">
                Registrar
              </Button>
            </Form>
          </Col>
          <Col xs lg="8" className="mt-2">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Fabricante</th>
                  <th>Actualizar</th>
                  <th>Eliminar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Laptop</td>
                  <td>1000</td>
                  <td>Asus</td>
                  <td>
                    <Button variant="outline-warning">Actualizar</Button>
                  </td>
                  <td>
                    <Button variant="outline-danger">Eliminar</Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};
