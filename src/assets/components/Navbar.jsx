import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import formatNumber from "../utils/Format";

const PizzaNav = () => {
  const total = 1500;
  const token = false;
  const pizzaLogo = "./src/assets/imgs/logo-white.png";
  return (
    <Navbar bg="dark" className="px-5" data-bs-theme="dark">
      <Navbar.Brand>
        <img
          src={pizzaLogo}
          alt="logo pizzera mamma mia"
          height="50"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Nav variant="tabs" defaultActiveKey="#" className="me-auto">
        <Nav.Link href="#">🍕 Home</Nav.Link>
        {token ? (
          <>
            <Nav.Item>
              <Nav.Link eventKey="link-1">👤 Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">🔒 Logout</Nav.Link>
            </Nav.Item>
          </>
        ) : (
          <>
            <Nav.Item>
              <Nav.Link eventKey="link-3">🔑 Login</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-4">🔐 Register</Nav.Link>
            </Nav.Item>
          </>
        )}
      </Nav>
      <Navbar.Brand className=" border border-primary text-info px-3">🛒 Total: $ {formatNumber(total)}</Navbar.Brand>
    </Navbar>
  );
};

export default PizzaNav;
