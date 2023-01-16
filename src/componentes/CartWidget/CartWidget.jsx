import { useCartContext } from "../../context/CartContext"
import "./CartWidget.css"

const CartWidget = () => {
  const { cantidadTotal } = useCartContext()
  return (
    <div>
        { cantidadTotal() > 0 && cantidadTotal()  }
        <img src='src/componentes/CartWidget/carrito.png' alt='imagen' className="carro"/>
    </div>
  )
}

export default CartWidget
