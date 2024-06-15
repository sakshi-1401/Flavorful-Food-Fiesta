import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Menu.css";
import pancakes from "../asset/classic_pancakes.jpg";
// Import other dish images similarly
import { FaHome } from "react-icons/fa";
import { Dialog } from "primereact/dialog";
import { BsCartFill } from "react-icons/bs";

import { Button } from "primereact/button";
// import "./Navbar.css";
import ShoppingCart from "./shoppingCart";
import eggs_benedict from "../asset/eggs_benedict.jpg";
import avocado_toast from "../asset/avocado_toast.jpg";
import belgian_waffles from "../asset/belgian_waffles.jpg";
import vegetarian_omelette from "../asset/vegetarian_omelette.jpg";
import french_toast from "../asset/french_toast.jpg";
import breakfast_burrito from "../asset/breakfast_burrito.jpg";
import fruit_parfait from "../asset/fruit_parfait.jpg";
import bagel_with_lox from "../asset/bagel_with_lox.jpg";
import breakfast_croissant_sandwich from "../asset/breakfast_croissant.jpg";
import { Slider } from "primereact/slider";
import caesar_salad from "../asset/caesar_salad.jpg";
import caprese_salad from "../asset/caprese_salad.jpg";
import club_sandwich from "../asset/club_sandwich.jpg";
import mediterranean_wrap from "../asset/mediterranean_wrap.jpg";
import burger_with_fries from "../asset/burger_with_fries.jpg";
import vegetarian_pizza from "../asset/vegetarian_pizza.jpg";
import chicken_caesar_wrap from "../asset/chicken_caesar_wrap.jpg";
import sushi_platter from "../asset/sushi_platter.jpg";
import thai_curry from "../asset/thai_curry.jpg";
import pasta_carbonara from "../asset/pasta_carbonara.jpg";
import grilled_salmon from "../asset/grilled_salmon.jpg";
import filet_mignon from "../asset/filet_mignon.jpg";
import vegetable_stir_fry from "../asset/vegetable_stir_fry.jpg";
import lobster_risotto from "../asset/lobster_risotto.jpg";
import ratatouille from "../asset/ratatouille.jpg";
import vegetarian_lasagna from "../asset/vegetarian_lasagna.jpg";
import mushroom_risotto from "../asset/mushroom_risotto.jpg";
import veggie_paella from "../asset/veggie_paella.jpg";
import veggie_burger from "../asset/veggie_burger.jpg";
import stuffed_peppers from "../asset/stuffed_peppers.jpg";
import masala_dosa from "../asset/masala_dosa.jpg";
import palak_paneer from "../asset/palak_paneer.jpg";
import paneer_tikka_masala from "../asset/paneer_tikka_masala.jpg";
import { FaFilter, FaTimes } from 'react-icons/fa';
const dishes = [
  // Breakfast
  {
    id: 1,
    name: "Classic Pancakes",
    category: "Breakfast",
    description: "Fluffy pancakes served with maple syrup and butter.",
    price: 749, // Converted from USD to INR (1 USD = 74.9 INR)
    image: pancakes,
  },
  {
    id: 2,
    name: "Eggs Benedict",
    category: "Breakfast",
    description:
      "Toasted English muffin topped with poached eggs, ham, and hollandaise sauce.",
    price: 971, // Converted from USD to INR (1 USD = 74.9 INR)
    image: eggs_benedict,
  },
  {
    id: 3,
    name: "Avocado Toast",
    category: "Breakfast",
    description:
      "Toasted bread topped with mashed avocado, cherry tomatoes, and a drizzle of olive oil.",
    price: 785, // Converted from USD to INR (1 USD = 74.9 INR)
    image: avocado_toast,
  },
  {
    id: 4,
    name: "Belgian Waffles",
    category: "Breakfast",
    description:
      "Crispy Belgian waffles served with whipped cream and fresh berries.",
    price: 880, // Converted from USD to INR (1 USD = 74.9 INR)
    image: belgian_waffles,
  },
  {
    id: 5,
    name: "Vegetarian Omelette",
    category: "Breakfast",
    description:
      "Fluffy omelette filled with sautéed mushrooms, spinach, and cheese.",
    price: 821, // Converted from USD to INR (1 USD = 74.9 INR)
    image: vegetarian_omelette,
  },
  {
    id: 6,
    name: "French Toast",
    category: "Breakfast",
    description:
      "Thick slices of bread soaked in a mixture of beaten eggs and milk, grilled until golden brown.",
    price: 710, // Converted from USD to INR (1 USD = 74.9 INR)
    image: french_toast,
  },
  {
    id: 7,
    name: "Breakfast Burrito",
    category: "Breakfast",
    description:
      "Large flour tortilla filled with scrambled eggs, sausage, cheese, and salsa.",
    price: 672, // Converted from USD to INR (1 USD = 74.9 INR)
    image: breakfast_burrito,
  },
  {
    id: 8,
    name: "Fruit Parfait",
    category: "Breakfast",
    description:
      "Layers of yogurt, granola, and fresh fruits, topped with honey.",
    price: 599, // Converted from USD to INR (1 USD = 74.9 INR)
    image: fruit_parfait,
  },
  {
    id: 9,
    name: "Bagel with Lox",
    category: "Breakfast",
    description:
      "Toasted bagel topped with cream cheese, smoked salmon, capers, and red onion.",
    price: 1009, // Converted from USD to INR (1 USD = 74.9 INR)
    image: bagel_with_lox,
  },
  {
    id: 10,
    name: "Breakfast Croissant Sandwich",
    category: "Breakfast",
    description:
      "Buttery croissant filled with scrambled eggs, bacon, and cheddar cheese.",
    price: 846, // Converted from USD to INR (1 USD = 74.9 INR)
    image: breakfast_croissant_sandwich,
  },
  // Lunch
  {
    id: 11,
    name: "Caesar Salad",
    category: "Lunch",
    description:
      "Fresh romaine lettuce tossed with Caesar dressing, croutons, and parmesan cheese.",
    price: 821, // Converted from USD to INR (1 USD = 74.9 INR)
    image: caesar_salad,
  },
  {
    id: 12,
    name: "Caprese Salad",
    category: "Lunch",
    description:
      "Sliced tomatoes, fresh mozzarella, and basil drizzled with balsamic glaze and olive oil.",
    price: 936, // Converted from USD to INR (1 USD = 74.9 INR)
    image: caprese_salad,
  },
  {
    id: 13,
    name: "Club Sandwich",
    category: "Lunch",
    description:
      "Triple-decker sandwich with layers of turkey, bacon, lettuce, tomato, and mayonnaise.",
    price: 1046, // Converted from USD to INR (1 USD = 74.9 INR)
    image: club_sandwich,
  },
  {
    id: 14,
    name: "Mediterranean Wrap",
    category: "Lunch",
    description:
      "Grilled vegetables, hummus, and feta cheese wrapped in a soft tortilla.",
    price: 860, // Converted from USD to INR (1 USD = 74.9 INR)
    image: mediterranean_wrap,
  },
  {
    id: 15,
    name: "Burger with Fries",
    category: "Lunch",
    description:
      "Juicy beef patty with lettuce, tomato, onion, pickles, and mayo on a sesame seed bun, served with a side of fries.",
    price: 1124, // Converted from USD to INR (1 USD = 74.9 INR)
    image: burger_with_fries,
  },
  {
    id: 16,
    name: "Vegetarian Pizza",
    category: "Lunch",
    description:
      "Thin-crust pizza topped with bell peppers, onions, olives, and mushrooms.",
    price: 971, // Converted from USD to INR (1 USD = 74.9 INR)
    image: vegetarian_pizza,
  },
  {
    id: 17,
    name: "Chicken Caesar Wrap",
    category: "Lunch",
    description:
      "Grilled chicken, romaine lettuce, parmesan cheese, and Caesar dressing wrapped in a tortilla.",
    price: 821, // Converted from USD to INR (1 USD = 74.9 INR)
    image: chicken_caesar_wrap,
  },
  {
    id: 18,
    name: "Sushi Platter",
    category: "Lunch",
    description: "Assorted sushi rolls with fresh fish, rice, and seaweed.",
    price: 1499, // Converted from USD to INR (1 USD = 74.9 INR)
    image: sushi_platter,
  },
  // Dinner
  {
    id: 19,
    name: "Thai Green Curry",
    category: "Dinner",
    description:
      "Spicy green curry with coconut milk, vegetables, and your choice of protein.",
    price: 1195, // Converted from USD to INR (1 USD = 74.9 INR)
    image: thai_curry,
  },
  {
    id: 20,
    name: "Pasta Carbonara",
    category: "Dinner",
    description:
      "Pasta tossed in a creamy sauce with pancetta, egg, and parmesan cheese.",
    price: 1124, // Converted from USD to INR (1 USD = 74.9 INR)
    image: pasta_carbonara,
  },
  {
    id: 21,
    name: "Grilled Salmon",
    category: "Dinner",
    description:
      "Fresh salmon fillet grilled to perfection, served with steamed vegetables.",
    price: 1421, // Converted from USD to INR (1 USD = 74.9 INR)
    image: grilled_salmon,
  },
  {
    id: 22,
    name: "Filet Mignon",
    category: "Dinner",
    description:
      "Tender beef filet cooked to your liking, served with mashed potatoes and asparagus.",
    price: 2248, // Converted from USD to INR (1 USD = 74.9 INR)
    image: filet_mignon,
  },
  {
    id: 23,
    name: "Vegetable Stir Fry",
    category: "Dinner",
    description:
      "Mixed vegetables stir-fried with soy sauce and garlic, served with rice.",
    price: 936, // Converted from USD to INR (1 USD = 74.9 INR)
    image: vegetable_stir_fry,
  },
  {
    id: 24,
    name: "Lobster Risotto",
    category: "Dinner",
    description:
      "Creamy risotto with succulent pieces of lobster and a hint of saffron.",
    price: 2091, // Converted from USD to INR (1 USD = 74.9 INR)
    image: lobster_risotto,
  },
  {
    id: 25,
    name: "Ratatouille",
    category: "Dinner",
    description: "Layered vegetables baked in a rich tomato sauce with herbs.",
    price: 1009,
    image: ratatouille, // Converted from USD to INR (1 USD = 74.
  },
  {
    id: 26,
    name: "Vegetarian Lasagna",
    category: "Dinner",
    description:
      "Layers of pasta, ricotta, spinach, and marinara sauce baked to perfection.",
    price: 1046, // Converted from USD to INR (1 USD = 74.9 INR)
    image: vegetarian_lasagna,
  },
  {
    id: 27,
    name: "Mushroom Risotto",
    category: "Dinner",
    description: "Creamy risotto with sautéed mushrooms and parmesan cheese.",
    price: 1269, // Converted from USD to INR (1 USD = 74.9 INR)
    image: mushroom_risotto,
  },
  {
    id: 28,
    name: "Veggie Paella",
    category: "Dinner",
    description: "Spanish rice dish with a variety of vegetables and saffron.",
    price: 1124, // Converted from USD to INR (1 USD = 74.9 INR)
    image: veggie_paella,
  },
  {
    id: 29,
    name: "Veggie Burger",
    category: "Dinner",
    description:
      "Grilled vegetarian patty with lettuce, tomato, onion, pickles, and mayo on a sesame seed bun.",
    price: 971, // Converted from USD to INR (1 USD = 74.9 INR)
    image: veggie_burger,
  },
  {
    id: 30,
    name: "Paneer Tikka Masala",
    category: "Dinner",
    description:
      "Paneer (Indian cottage cheese) marinated in yogurt and spices, grilled and served in a spiced tomato cream sauce.",
    price: 1195, // Converted from USD to INR (1 USD = 74.9 INR)
    image: paneer_tikka_masala,
  },
  {
    id: 31,
    name: "Palak Paneer",
    category: "Dinner",
    description:
      "Indian cottage cheese (paneer) cooked in a creamy spinach sauce with herbs and spices.",
    price: 1124, // Converted from USD to INR (1 USD = 74.9 INR)
    image: palak_paneer,
  },
  {
    id: 32,
    name: "Masala Dosa",
    category: "Dinner",
    description:
      "Crispy South Indian crepe made from fermented rice and lentil batter, filled with spiced mashed potatoes.",
    price: 896, // Converted from USD to INR (1 USD = 74.9 INR)
    image: masala_dosa,
  },
];

function Menu() {
  const [cart, setCart] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);
  const [priceRange, setPriceRange] = useState([500, 1100]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedDiets, setSelectedDiets] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleAdd = (dish) => {
    const existingItem = cart.find((item) => item.id === dish.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...dish, quantity: 1 }]);
    }
  };
  
  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    setSelectedCategories((prev) =>
      checked ? [...prev, value] : prev.filter((category) => category !== value)
    );
  };
const toggleFilter = () => {
  setIsFilterOpen(!isFilterOpen);
};
  const handleDietChange = (e) => {
    const { value, checked } = e.target;
    setSelectedDiets((prev) =>
      checked ? [...prev, value] : prev.filter((diet) => diet !== value)
    );
  };
  const handleSubtract = (dish) => {
    const existingItem = cart.find((item) => item.id === dish.id);
    if (existingItem) {
      if (existingItem.quantity === 1) {
        setCart(cart.filter((item) => item.id !== dish.id));
      } else {
        setCart(
          cart.map((item) =>
            item.id === dish.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
        );
      }
    }
  };
  const filteredDishes = dishes.filter((dish) =>
    (selectedCategories.length === 0 || selectedCategories.includes(dish.category)) &&
    (selectedDiets.length === 0 || selectedDiets.includes(dish.diet)) &&
    dish.price >= priceRange[0] &&
    dish.price <= priceRange[1]
  );
  console.log(filteredDishes,"filter")
console.log(dishes,"dishe")
  const showCartDialog = () => {
    setCartVisible(true);
  };

  const hideCartDialog = () => {
    setCartVisible(false);
  };
  console.log('dishes:', dishes); // Log the dishes array
  console.log('selectedCategories:', selectedCategories); // Log selected categories
  console.log('selectedDiets:', selectedDiets); // Log selected diets
  console.log('priceRange:', priceRange); // Log price range
  console.log('cart:', cart); // Log cart items
  return (
    <>
     
    <div className="body">
    <div className="sideebar">
  <a href="/" className="icons">
    <FaHome size={30} />
  </a>
  <button className="icons" onClick={toggleFilter}>
    {isFilterOpen ? <FaTimes size={30} /> : <FaFilter size={30} />}
  </button>
  <button className="icons" onClick={showCartDialog}>
    <BsCartFill size={30} />
    {cart.length > 0 && <span className="cart-notification">{cart.length}</span>}
  </button>
</div>
    <div className={`menu-filter ${isFilterOpen ? 'open' : ''}`}>
      <div className="content">
        <button className="close" onClick={toggleFilter}>
    {isFilterOpen ? <FaTimes size={30} /> : <FaFilter size={30} />}
  </button>
  <h4>Filter by Category</h4>
  <div>
    <input type="checkbox" id="breakfast" value="Breakfast" onChange={handleCategoryChange} />
    <label htmlFor="breakfast">Breakfast</label>
  </div>
  <div>
    <input type="checkbox" id="lunch" value="Lunch" onChange={handleCategoryChange} />
    <label htmlFor="lunch">Lunch</label>
  </div>
  <div>
    <input type="checkbox" id="dinner" value="Dinner" onChange={handleCategoryChange} />
    <label htmlFor="dinner">Dinner</label>
  </div>
  <div>
    <input type="checkbox" id="dessert" value="Dessert" onChange={handleCategoryChange} />
    <label htmlFor="dessert">Dessert</label>
  </div>

  <h4>Filter by Diet</h4>
  <div>
    <input type="checkbox" id="veg" value="Vegetarian" onChange={handleDietChange} />
    <label htmlFor="veg">Vegetarian</label>
  </div>
  <div>
    <input type="checkbox" id="nonveg" value="Non-Vegetarian" onChange={handleDietChange} />
    <label htmlFor="nonveg">Non-Vegetarian</label>
  </div>

  <h4>Filter by Price</h4>
  <Slider
    value={priceRange}
    onChange={(e) => setPriceRange(e.value)}
    range
    min={0}
    max={2000}
  />
 <div className="price-range">
  ₹{priceRange[0]} - ₹{priceRange[1]}
</div>
</div>
</div>

<div className={`menu-content ${isFilterOpen ? '' : 'expanded'}`}>
  <div>
    
    <h2 className="special-heading">Today's Special</h2>
  </div>
  <div className="container my-5">
    <div className="row">
      
    {filteredDishes.map(dish => (
         
          <div className="col-lg-3 col-md-6 mb-4" key={dish.id}> 
            <div className="card custom-card">
              <div className="card-img-overlay">
                <img src={dish.image} alt="Dish" className="card-img" />
                <div className="card-description">{dish.description}</div>
              </div>
              <div className="card-body">
                <h5 className="card-title">{dish.name}</h5>
                <div className="quantity-controls">
                  <button className="btn btn-secondary" onClick={() => handleSubtract(dish)}>-</button>
                  <span className="quantity">
                    {cart.find(item => item.id === dish.id)?.quantity || 0}
                  </span>
                  <button className="btn btn-secondary" onClick={() => handleAdd(dish)}>+</button>
                </div>
                <p className="card-price">₹{dish.price}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
    {/* <ShoppingCart cart={cart} handleAdd={handleAdd} handleSubtract={handleSubtract} /> */}
    {/* <Button icon="pi pi-shopping-cart" onClick={showCartDialog} className="p-button-raised p-button-secondary toggle-button" /> */}
        <Dialog visible={cartVisible} onHide={hideCartDialog} header="Orders" style={{ width: '50vw' }}>
          <ShoppingCart cart={cart} handleAdd={handleAdd} handleSubtract={handleSubtract} style={{size:'10px'}}/>
          <div className="p-dialog-footer">
            <Button label="Continue Shopping" icon="pi pi-chevron-right" onClick={hideCartDialog} className="close-button" />
          </div>
        </Dialog>
  </div>
</div>

    </div>
    </>
  );
}

export default Menu;
