import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { ItemCount } from "../ItemCount/ItemCount";
import "./ItemDetail.css"

const ItemDetail = ({ productos }) => {
  const [isCount, setIsCount] = useState(true);
  const { addToCart, cartList } = useCartContext();

  const onAdd = (cantidad) => {
    addToCart({ ...productos, cantidad });
    setIsCount(false);
  };



  return (
    <div className="row">
      <div className="col m-5">
        <h2>Nombre: {productos.nombre}</h2>
        <img src={productos.img} alt="imágen del producto" />
        <h4>Categoría: {productos.categoria}</h4>
        <h4>Precio: ${productos.precio}</h4>
        <h4>Stock: {productos.stock}</h4>
      </div>
      <div className="col">
        {isCount ? (
          <ItemCount stock={10} inintial={1} onAdd={onAdd} />
        ) : (
          <>
            <Link to="/cart">
              <button className="btn btn-outline-success">Ver mi carrito</button>
            </Link>
            <Link to="/">
              <button className="btn btn-outline-success">Continuar compra</button>
            </Link>
            
          </>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
