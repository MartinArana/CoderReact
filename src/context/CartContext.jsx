import { useContext, createContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);
    const addToCart = (producto) => {
        //isInCart
        const idx = cartList.findIndex((prod) => prod.id === producto.id);
        if (idx === -1) {
            setCartList([...cartList, producto]);
        } else {
            cartList[idx].cantidad += producto.cantidad;
            setCartList([...cartList]);
        }
    };

    //eliminar por item

    const eliminarItem = (id) =>
        setCartList(cartList.filter((product) => product.id !== id));

    //precio total

    const precioTotal = () =>
        cartList.reduce(
            (count, product) => (count += product.cantidad * product.price),
            0
        );

    //cantidad total

    const cantidadTotal = () =>
        cartList.reduce((count, product) => (count += product.cantidad), 0);

    //vaciar carrito

    const vaciarCarrito = () => setCartList([]);

    return (
        <CartContext.Provider
            value={{
                cartList,
                addToCart,
                vaciarCarrito,
                cantidadTotal,
                precioTotal,
                eliminarItem,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
