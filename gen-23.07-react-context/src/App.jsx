import "./index.css";
import ProductDetail from "./pages/ProductDetail";
import ProductCatalogue from "./pages/ProductCatalogue";
import Checkout from "./pages/Checkout";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CheckoutProvider } from "./context/CheckoutContext";

function App() {
  return (
    <CheckoutProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/products" />} />
          <Route path="/products" element={<ProductCatalogue />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </CheckoutProvider>
  );
}

export default App;
