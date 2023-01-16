import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../componentes/ItemList/ItemList";
import Loading from "../../componentes/Loader/Loader";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoriaId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "products");
    const queryFiltrada = categoriaId
      ? query(queryCollection, where("categoria", "==", categoriaId))
      : queryCollection;

    getDocs(queryFiltrada)
      .then((respuesta) =>
        setProducts(
          respuesta.docs.map((product) => ({
            id: product.id,
            ...product.data(),
          }))
        )
      )
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [categoriaId]);

  return (
    <>
      <h2>{greeting}</h2>
      {loading ? <Loading /> : <ItemList products={products} />}
    </>
  );
};

export default ItemListContainer;
