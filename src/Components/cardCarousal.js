// src/CardCarousel.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cardCarousal.css';
import { Link } from 'react-router-dom';
import breakfast from '../asset/breakfast_background.png'
import dinner from '../asset/dinner_background.png'
import dessert from '../asset/desert.jpg'
import lunch from '../asset/lunch.jpg'
import Beverages from '../asset/Beverages.jpg'
import Brunch from '../asset/Brunch.jpg'
import kids_menu from '../asset/kids_menu.jpg'
import Vegan_Vegetarian from '../asset/Vegan_Vegetarian.jpg'
import special from '../asset/special.jpg'
import catering from '../asset/catering.jpg'
import { useNavigate } from "react-router-dom";
import { Button } from 'bootstrap';

const services = [
  {
    name: "Breakfast",
    description: "Start your day with our delicious breakfast options. From classic pancakes to avocado toast, our breakfast menu offers a variety of choices to suit every taste. Enjoy a hearty meal with fresh ingredients and great flavors.",
    image: breakfast// update with actual path
  },
  {
    name: "Lunch",
    description: "Our lunch menu features a range of dishes perfect for a mid-day meal. Whether you're in the mood for a light salad or a hearty sandwich, we've got something for everyone. Join us for a satisfying lunch experience.",
    image: lunch // update with actual path
  },
  {
    name: "Dinner",
    description: "Indulge in our dinner offerings with a selection of gourmet dishes. From elegant entrees to flavorful vegetarian options, our dinner menu is designed to provide a memorable dining experience. Perfect for family dinners or date nights.",
    image: dinner// update with actual path
  },
  {
    name: "Desserts",
    description: "Treat yourself to our delectable desserts. Our menu includes a variety of sweet treats, from classic cakes and pastries to innovative creations. Perfect for satisfying your sweet tooth after a meal.",
    image: dessert// update with actual path
  },
  {
    name: "Beverages",
    description: "Quench your thirst with our range of beverages. We offer a variety of drinks including fresh juices, smoothies, coffee, and tea. Enjoy a refreshing drink to complement your meal or as a standalone treat.",
    image: Beverages // update with actual path
  },
  {
    name: "Brunch",
    description: "Enjoy a leisurely brunch with our diverse menu options. From eggs benedict to mimosas, our brunch menu combines the best of breakfast and lunch. Perfect for a relaxed weekend meal with friends and family. COMING SOON!",
    image: Brunch // update with actual path
  },
  {
    name: "Kids Menu",
    description: "Our kids menu offers tasty and healthy options for the little ones. From mini burgers to pasta, we have something to please even the pickiest eaters. All dishes are prepared with fresh ingredients and are sure to be a hit with kids. COMING SOON!",
    image: kids_menu // update with actual path
  },
  {
    name: "Vegan & Vegetarian",
    description: "We cater to vegan and vegetarian diets with a dedicated menu full of delicious plant-based options. Enjoy our creative and flavorful dishes that are sure to satisfy. We believe in providing diverse options for all dietary preferences.",
    image: Vegan_Vegetarian // update with actual path
  },
  {
    name: "Specials",
    description: "Check out our daily specials for something new and exciting. Our chefs create unique dishes using seasonal ingredients, ensuring a fresh and delicious experience. Be sure to ask your server about today's special offerings. COMING SOON!",
    image: special // update with actual path
  },
  {
    name: "Catering",
    description: "Let us cater your next event with our professional catering services. From corporate events to private parties, we offer a range of catering options to suit your needs. Contact us to discuss your event and menu preferences.COMING SOON!",
    image: catering // update with actual path
  }
];

function CardCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % services.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + services.length) % services.length);
  };
  const navigate = useNavigate();

  return (
    <>
    <h2> What We Offer ?</h2>
    <div className="carousel-container">
      <button className="carousel-arrow left-arrow" onClick={handlePrev}>
        &lt;
      </button>
      <div className="carousel-card">
        <div className="carousel-card-content">
          <div className="carousel-card-image">
            <img src={services[currentIndex].image} alt={services[currentIndex].name} />
          </div>
          <div className="carousel-card-description">
            <h5 className="carousel-card-title">{services[currentIndex].name}</h5>
            <p>{services[currentIndex].description}</p>
          </div>
        </div>
      </div>
      
      <button className="carousel-arrow right-arrow" onClick={handleNext}>
        &gt;
      </button>
    </div>
    <div className='parent-button'>
    <a href="/menu" className="button button-primary">
    Order with us!
      
      </a>
    </div>
    
       
    </>
  );
}

export default CardCarousel;
