import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import FakeSingleProduct from "./components/FakeProducts/FakeSingleProduct";
import JummySingle from "./components/jummyProducts/JummySingle";
import Cart from "./components/cart/Cart";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/fake/:id" element={<FakeSingleProduct />} />
          <Route path="/jummy/:id" element={<JummySingle />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
