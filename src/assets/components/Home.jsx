import PizzaCard from "./CardPizza";
import HeroHeader from "./Header";

const pizzaData = [
  {
    img: "./src/assets/imgs/cupon-5.jpg",
    pizzaName: "Pizza Napolitana",
    ingredients: ["Queso mozzarella", "Pepperoni", "Orégano", "Jamón"],
    price: 15000, 
  },
  {
    img: "./src/assets/imgs/cupon-2.jpg",
    pizzaName: "Pizza Veggie",
    ingredients: ["Pimenton", "Aceitunas", "Cebolla", "Queso"],
    price: 9900,
  },
  {
    img: "./src/assets/imgs/cupon-3.jpg",
    pizzaName: "Pizza Quatro los quesos",
    ingredients: ["Queso Mozzarella", "Queso Crema", "Queso Cheddar", "Queso Parmesano"],
    price: 12000,
  }
];

const Home = () => {
  return (
    <>        
      <HeroHeader />
      <div className="container mx-5 my-2 px-5">
        <h1>Menú</h1>
        <hr />
      </div>
      <div className="d-flex justify-content-around m-5">
        {pizzaData.map((card) => (
          <PizzaCard {...card} />
        ))}
      </div>
    </>
  );
};

export default Home;
