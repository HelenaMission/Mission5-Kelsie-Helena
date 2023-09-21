import Hero from "../../../components/homePage/Hero";
import Navbar from "../../../components/homePage/NavBar";
import Sponsors from "../../../components/homePage/Sponsors";
import Services from "../../../components/homePage/Services";
import Blog from "../../../components/homePage/Blog";
import Reviews from "../../../components/homePage/Reviews";
import Footer from "../../../components/homePage/Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar />

      <Hero />

      <Sponsors />

      <Services />

      <Blog />

      <Reviews />

      <Footer />
    </div>
  );
};

export default HomePage;
