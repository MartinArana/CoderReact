import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { CartForm } from "../cartForm/CartForm";
import { CartList } from "../cartList/cartList";
import { Link } from "react-router-dom";
import "./cartContainer.css";


export const CartContainer = () => {
  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const { cartList, vaciarCarrito, precioTotal, eliminarItem } =
    useCartContext();

  const generarOrden = (evt) => {
    evt.preventDefault();

    const order = {};
    //validaciones
    order.buyer = dataForm;

    order.item = cartList.map(({ nombre, id, precio }) => ({
      nombre,
      id,
      precio,
    }));
    order.total = precioTotal();

    const db = getFirestore();
    const queryOrder = collection(db, "orders");

    addDoc(queryOrder, order)
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err))
      .finally(() => {
        vaciarCarrito();
        setDataForm({
          name: "",
          email: "",
          phone: "",
        });
      });
  };

  const handleOnChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <CartList productos={cartList} eliminarItem={eliminarItem} />
      {precioTotal() > 0 && <label>Precio total: $ {precioTotal()}</label>}
      <CartForm
        onSubmit={generarOrden}
        dataForm={dataForm}
        handleOnChange={handleOnChange}
        hasData={cartList.length > 0}
      />
      <center>
        {cartList.length > 0 ? (
          <button className="btn btn-outline-danger" onClick={vaciarCarrito}>
            Vaciar carrito
          </button>
        ) : (
          <Link to={"/"}>
          <button className="btn btn-outline-danger">Volver al home</button>
          </Link>
        )}
      </center>
    </div>
  );
};

export default CartContainer;

