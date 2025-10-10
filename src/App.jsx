// Shortcut: rafce
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./page/Home";
import About from "./page/About";
import Contact from "./page/Contact";
import BottomBar from "./components/BottomBar";
import Cart from "./page/Cart";

const App = () => {
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
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
