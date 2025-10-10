// Shortcut: rafce
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./page/Home";
import About from "./page/About";
import Contact from "./page/Contact";
import BottomBar from "./components/BottomBar";
import Cart from "./page/Cart";
import { useContext } from "react";
import ProductContext from "./context/ProductContext";
import Product from "./page/Product";

const App = () => {
  const { products } = useContext(ProductContext)
  console.log(products)

  return (
    <>
      <nav>
        <NavBar />
        <BottomBar />
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
