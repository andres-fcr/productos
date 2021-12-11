import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Frutas from './Frutas';


export const ListarProductos = ({ productos }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (producto) => {
        setShow(true)
        localStorage.setItem("id", producto)
    }
    return (
        <div>
            <h1 className="text-center">Productos</h1>
            <div className='container testimonial-group row'>
            {
                productos.map(producto => (
                    <div className='col text-center' key={producto.id}>

                        <h1>{producto.nombre}</h1>
                        <img src={producto.image} alt="..." height={200} />
                        <Button variant="primary" onClick={() => handleShow(producto.id)} >
                            agregar
                        </Button>

                        <Frutas show={show} handleClose={handleClose} handleShow={handleShow} productos={productos} />
                    </div>

                ))
            }

            </div>
        </div>
    )
}
