import React from 'react';
import { Link } from "react-router-dom";
//import { FaShoppingCart } from "react-icons/fa";
import { Navbar, Nav, Container, Offcanvas, Button, Form, FormControl } from "react-bootstrap";
import { BotonElegir } from '../styles/Navbar.elements';
import { FaMapMarkerAlt} from "react-icons/fa";

export const BarraNav = () => {
    return (
        <div>
            <div className="header">

  <Navbar bg="white" expand={false}>
  <Container fluid>
    <Link to="/" className="nav-link text-danger me-4">Tiendita</Link>
    <div>
        <BotonElegir class="bg-white" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Elegir direccion destino
        </BotonElegir>
    </div>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>


                
                {/* Codigo del Modal */}
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                            <div class="modal-body">

                                <h4>¿Donde quieres recibir tu pedido?</h4>
                                <p>Para poder ofrecerte productos dentro de tu área, necesitamos tu dirección</p>
                                
                                <select>
                                  <option name="Seleccionar" value="Seleccionar"> <FaMapMarkerAlt/> Seleccionar</option>
                                  <option name="mexicomarriot"> <FaMapMarkerAlt/> México City Marriott Reforma Hotel </option>
                                  <option name="mexicoairport"> <FaMapMarkerAlt/> México City International Airport</option>
                                  <option name="mexicocity"> <FaMapMarkerAlt/> México City Mexico</option>
                                </select>

                                <div>
                                    <button type="button" class="btn btn-success">Buscar</button>
                                </div>
                            </div>
                    </div>
                    </div>
                </div>




            </div>
        </div>
    )
}