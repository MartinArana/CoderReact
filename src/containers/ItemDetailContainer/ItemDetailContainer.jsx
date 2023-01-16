import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../componentes/ItemDetail/ItemDetail";
import Loading from "../../componentes/Loader/Loader";

const ItemDetailContainer = () => {
  const [productos, setProducto] = useState({});
  const [loading, setLoading] = useState(true);
  const { productoId } = useParams();


  useEffect(() => {
    const db = getFirestore();
    const queryDoc = doc(db, "products", productoId);

    getDoc(queryDoc)
      .then((respuesta) =>
        setProducto({ id: respuesta.id, ...respuesta.data() })
      )
      .catch((err) => console.log(err))
      .finally(()=>setLoading(false))
  }, []);

  return (
    <>
      {loading ? <Loading/> 
      :  
      <ItemDetail productos={productos} />
      }
    </>
  );
};

export default ItemDetailContainer;
