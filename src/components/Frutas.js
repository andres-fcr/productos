import React from 'react'
import { Button, Modal } from 'react-bootstrap'

function Frutas(props) {

    const { handleShow, handleClose, show, productos } = props
    const prodLocal = localStorage.getItem("id")
    const mostrar = productos.find(index => index.id === Number(prodLocal))

    return (
        <div>
            <div>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{mostrar.nombre}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h3>{mostrar.precio}</h3>
                        <img src={mostrar.image} alt="..." height={200} />
                        <p>{mostrar.descripcion}</p>
                        <Button variant="primary" onClick={() => localStorage.setItem("Carrito", 
                        mostrar.id
                     
                        )}>
                            Agregar
                        </Button>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancelar
                        </Button>
                    </Modal.Body>
                    <Modal.Footer>
                    
                    </Modal.Footer>
                </Modal>

            </div>
        </div>
    )
}

export default Frutas
