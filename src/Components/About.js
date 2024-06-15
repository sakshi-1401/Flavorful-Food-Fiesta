// AboutUs.js
import React from 'react';
import './About.css';
import dosa from '../asset/masaladosa.png';
import meduvada from  '../asset/b_meduvada.png';
import chinese1 from '../asset/chinese1.png';
import chinese2 from '../asset/chinese2.png';

function AboutUs() {
  return (
    <div className='about'>
    <div className="about-us">
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          Welcome to Flavorful Food Fiesta! We are passionate about providing delicious and 
          nutritious meals made with fresh, locally sourced ingredients. Our mission is to 
          delight your taste buds with a variety of flavors from around the world while 
          promoting a healthy lifestyle.
        </p>
        <p>
          At Flavorful Food Fiesta, we believe that good food brings people together. Our chefs 
          are dedicated to creating mouth-watering dishes that cater to all taste preferences and 
          dietary needs. Whether you're in the mood for a hearty meal or a light snack, our menu 
          has something for everyone.
        </p>
        <p>
          Bon appétit!
        </p>
      </div>
    </div>
    </div>
  );
}

export default AboutUs;
