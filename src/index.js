import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  //const style = { color: "red", fontSize: "22px", textTransform: "uppercase" };
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  //const pizzas = [];
  const pizzaNum = pizzas.length;
  return (
    <main className="menu">
      <h2>Our menu</h2>

      {pizzaNum > 0 ? (
        <>
          <p>
            Authentic italian cuisine, 6 creative dishes to chose from. All from
            our stove oven. All organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p> We are working on our menu.Please come back later :) </p>
        // </>
      )}

      {/* <Pizza
          name="Pizza Spinachi"
          photoName="pizzas/spinaci.jpg"
          price={10}
          ingredients="Tomato, mozarella, spinach, and ricotta cheese."
        />
        <Pizza
          name="Pizza focaccia"
          photoName="pizzas/focaccia.jpg"
          price={14 + 4}
          ingredients="Tomato, mozarella, spinach, and ricotta cheese."
        />
        <Pizza
          photoName="pizzas/salamino.jpg"
          name="Pizza Spinachi"
          price={10}
          ingredients="Tomato, mozarella, spinach, and ricotta cheese."
        /></div>
        */}
    </main>
  );
}
function Pizza({ pizzaObj }) {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>

        <span>{pizzaObj.soldOut ? "SOLDOUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 12;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We'll be happy to have you from {openHour}:00 to {closeHour}:00{" "}
        </p>
      )}
    </footer>
  );
  // return React.createElement("footer", null, "We're currently open...");
}
function Order({ closeHour }) {
  return (
    <div className="order">
      <p>We are open until {closeHour}:00 come visit us or order online</p>
      <button className="btn"> Order </button>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
