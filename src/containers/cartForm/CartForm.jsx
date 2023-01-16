import React from "react";

export const CartForm = ({ onSubmit, dataForm, handleOnChange, hasData }) => {
  return (
    hasData && (
      <form onSubmit={onSubmit}>
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
    )
  );
};