import react from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import Sidebar from "./Navbar";
import { Card } from "primereact/card";
import AboutUs from "./About";
import CardCarousel from "./cardCarousal";
import ContactUs from "./contact";

const Home = () => {
  const navigate = useNavigate();

  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Sidebar />

      {/* FoodieFiesta */}
      <div id="home" className="homepage">
        <div className="right-content">
          <Card title="Flavorful Food Fiesta.">
            <p>
              Explore local restaurants, order your favorite meals, and enjoy
              fast delivery to your doorstep. Browse diverse cuisines, from
              gourmet burgers to fresh salads and decadent desserts. We ensure
              exceptional service with every order.
            </p>
          </Card>
          <a
            href="#services"
            className="btn btn-primary"
            onClick={() => handleScrollToSection("services")}
          >
            Discover Our Services!
          </a>{" "}
        </div>
      </div>
      <div id="services">
        <CardCarousel />
      </div>
      <div id="about">
        <AboutUs />
      </div>
      <div id="contact">
        <ContactUs />
      </div>
    </>
  );
};
export default Home;
