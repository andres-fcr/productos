import React,{ useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import { url } from '../helpers/url';
import { Container } from '../container/Container';
import { BarraNav } from '../components/BarraNav';



export const AppRouter = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        cargarDatos();
    }, [])

    const cargarDatos = async () => {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        setProductos(datos);
    }

    return (
        
        <Router>
             <BarraNav />   
                 <Routes>
                <Route exact path="/" element={<Container productos={productos}/> } />
                </Routes>
        </Router>
    )
}