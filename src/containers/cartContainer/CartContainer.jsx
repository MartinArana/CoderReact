import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
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
      {cartList.map((productos) => (
        <li key={productos.id}>
          <img src={productos.img} alt="" />
          Nombre: {productos.nombre} 
          <br />
          Cantidad: {productos.cantidad}
          <br />
          Precio: ${" "}
          {productos.precio}
          <button className="btn" onClick={() => eliminarItem(productos.id)}>
            X
          </button>
        </li>
      ))}
      {precioTotal() > 0 && <label>Precio total: $ {precioTotal()}</label>}

      <form onSubmit={generarOrden}>
        <div className="form-group">
          <label htmlFor="name">Nombre completo</label>
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Ingrese el nombre"
            value={dataForm.name}
            onChange={handleOnChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="form-control"
            name="email"
            placeholder="Ingrese el email"
            value={dataForm.email}
            onChange={handleOnChange}
          />
          <label htmlFor="tel">Numero telefonico</label>
          <input
            type="number"
            className="form-control"
            name="phone"
            placeholder="Ingrese el numero de telefono"
            value={dataForm.phone}
            onChange={handleOnChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="form-control"
            name="confirmarEmail"
            placeholder="Ingrese el email nuevamente"
            value={dataForm.email}
            onChange={handleOnChange}
          />
        </div>
        <center>
          <button className="btn btn-success">Generar orden</button>
        </center>
      </form>

      <center>
        <button className="btn btn-outline-danger" onClick={vaciarCarrito}>
          Vaciar carrito
        </button>
      </center>
    </div>
  );
};

export default CartContainer;
