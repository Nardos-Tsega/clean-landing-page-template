import './App.css';
import {Fragment, useState} from "react";
import Foods from './Foods';

function App() {

  const [isChooseFoodPage, setisChooseFoodPage] = useState(false);

  const [menuItems, setmenuItems] = useState([
     {
        id: 1,
        name: "Chicken Burger",
        quantity: 40,
        desc: "Fried chicken burger - lettuce, tomato, cheese and mayonnaise",
        price: "24",
        image: "cb.jpg",
        },
        {
        id: 2,
        name: "Veg Burger",
        quantity: 30,
        desc: "Plant-based burger - lettuce, tomato, vegan cheese and mayonnaise",
        price: "22",
        image: "vb.jpg",
        },
        {
        id: 3,
        name: "Chips",
        quantity: 50,
        desc: "Potato chips fried to perfection",
        price: "7",
        image: "chips.jpg",
        },
        {
        id: 4,
        name: "Ice Cream",
        quantity: 30,
        desc: "Ice cream - Vanilla ice cream double scoop",
        price: "4",
        image: "ic.jpg",
        },
  ]);

  return (
    <div className="App">
      <button className="toggleButton" onClick={() => setisChooseFoodPage(!isChooseFoodPage)}>
        {isChooseFoodPage ? "Availability Check" : "Order Food"}
      </button>
      <h3 className="title">Online food shop</h3>
      {!isChooseFoodPage && (
        <Fragment>
          <h4 className="subTitle">Available Menu</h4>
          <ul className="ulApp">
            {menuItems.map((item) => {
              return (
                <li key={item.id} className="liApp">
                  {item.name} - {item.quantity}
                </li>
          )
        })}
      </ul>
        </Fragment>
      )}
      {isChooseFoodPage && <Foods menuItems={menuItems} />}
    </div>
  );
}

export default App;
