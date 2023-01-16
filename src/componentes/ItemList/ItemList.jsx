import { memo } from "react";
import Item from "../Item/Item";
import Row from "react-bootstrap/Row";

const ItemList = memo(({ products }) => {
  return (
    <Row>
      {products.map((product) => (
        <Item product={product} />
      ))}
    </Row>
  );
});

export default ItemList;