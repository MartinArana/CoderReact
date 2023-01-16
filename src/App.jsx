import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./containers/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer/ItemDetailContainer";
import CartContainer from "./containers/cartContainer/CartContainer";

import "bootstrap/dist/css/bootstrap.min.css";
import { CartContextProvider } from "./context/CartContext";

function App() {
  let saludo = "HOLA!";

  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer saludo={saludo} />} />
          <Route
            path="/categoria/:categoriaId"
            element={<ItemListContainer saludo={saludo} />}
          />
          <Route path="/detail/:productoId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartContainer />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;

//Componente contenedor
