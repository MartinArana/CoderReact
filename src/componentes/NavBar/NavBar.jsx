import { Container, Nav, Navbar,} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

import "./NavBar.css";

const categoryList = [
  { id: "sdagas", name: "Diseños", path: "diseños", description: "categoria diseños" },
  { id: "asdojg", name: "Personajes", path: "personajes", description: "categoria personajes" },
  { id: "asdfef", name: "Accesorios", path: "accesorios", description: "categoria accesorios" }
]

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Container>
        <NavLink className={({ isActive }) => isActive ? "btn" : "btn btn-dark"} to="/">E-commerce</NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {categoryList.map((({ id, name, path, description }) => <NavLink key={id} className={({ isActive }) => isActive ? "btn" : "btn btn-dark"} to={`/categoria/${path}`}>{`${name}`}</NavLink>
            ))}
          </Nav>
          <Nav>
            <Link to="/cart" className="link">
              <CartWidget />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
