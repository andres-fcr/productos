import React from 'react';
import {ListarProductos} from '../components/ListarProductos'


export const Container = ({productos}) => {
    return (
        <div>
            <h1>Productos</h1>

            <div>
                <ListarProductos productos={productos}/>
            </div>
        </div>
    )
}
