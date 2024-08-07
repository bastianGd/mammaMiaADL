import { Button, Card } from "react-bootstrap";
import formatNumber from "../utils/Format";

const PizzaCard = ({ img, pizzaName, ingredients, price}) => {
  return (
    <>
      <Card style={{ width: "25rem", border: "none", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
        <Card.Img variant="top" src={img} style={{ borderRadius: "10px 10px 0 0" }} />
        <Card.Body>
          <Card.Title className="text-center" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            {pizzaName}
          </Card.Title>
          <Card.Subtitle className="mb-3 text-muted text-center">
            Ingredientes
          </Card.Subtitle>
          <Card.Text className="text-center" style={{ fontStyle: "italic" }}>
          {ingredients.map((ingredient, index) => (
            <span key={index}>{ingredient}{" - "}</span>
          ))}
          </Card.Text>
          <Card.Text className="text-center" style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
            $ <span>{formatNumber(price)}</span>
          </Card.Text>
          <div className="d-flex justify-content-evenly">
            <Button variant="outline-success" style={{fontWeight: "bold" }}> Ver más 👀 </Button>
            <Button variant="dark" style={{ borderRadius: "20px", fontWeight: "bold" }}> Agregar a compra </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default PizzaCard;
