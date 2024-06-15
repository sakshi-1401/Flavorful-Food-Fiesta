import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primereact/resources/themes/saga-blue/theme.css'; // or other theme
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import reportWebVitals from './reportWebVitals';
import Home from './Components/Home';
import Menu from './Components/Menu';
import TransparentNavbar from './Components/Navbar';
import AboutUs from './Components/About';
import ContactUs from './Components/contact';
import App from './App';
import CardCarousel from './Components/cardCarousal';
import ShoppingCart from './Components/shoppingCart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
