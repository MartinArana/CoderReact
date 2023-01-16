import { memo } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Item.css"

const Item = memo(({ product }) => {
  return (
    <Row>
      <Col xs={6} md={4}>
        <CardGroup>
          <Link to={`/detail/${product.id}`}>
            <Card className="card">
              <Card.Img variant="top" src={product.img} />
              <Card.Body>
                <Card.Title className="texto">{`${product.nombre}`}</Card.Title>
                <Card.Text className="texto">{`$${product.precio}`}</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </CardGroup>
      </Col>
    </Row>
  );
});

export default Item;
