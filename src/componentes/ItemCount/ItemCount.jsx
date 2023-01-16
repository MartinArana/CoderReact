import { useState } from "react";

export const ItemCount = ({ stock = 5, initial = 1, onAdd }) => {
  const [count, setearContador] = useState(initial);
  const handleCount = () => {
    if (count < stock) {
      setearContador(count + 1);
    }
  };
  const restar = () => {
    if (count > initial) {
      setearContador(count - 1);
    }
  };

  const handleOnAdd = () => onAdd(count);

  return (
    <center className="mt-5 border border-1 border-primary p-3 rounded">
      <button className="btn btn-outline-primary" onClick={handleCount}>
        +
      </button>
      <label htmlFor="">{count}</label>

      <button className="btn btn-outline-primary" onClick={restar}>
        -
      </button>
      <br />
      <button className="btn btn-outline-primary" onClick={handleOnAdd}>
        agregar al carrito
      </button>
    </center>
  );
};
