import React from "react";

export const CartList = ({ eliminarItem, productos }) => {
    return productos.map((producto) => (
        <li key={producto.id}>
            <img src={producto.img} alt="" />
            Nombre: {producto.nombre}
            <br />
            Cantidad: {producto.cantidad}
            <br />
            Precio: $ {producto.precio}
            <button className="btn" onClick={() => eliminarItem(producto.id)}>
                X
            </button>
        </li>
    ));
};
