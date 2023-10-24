import "./index.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import ProductDetail from "./pages/ProductDetail";
import ProductCatalogue from "./pages/ProductCatalogue";
import CheckoutInformation from "./pages/CheckoutInformation";
import CheckoutComplete from "./pages/CheckoutComplete";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/products" />} />
        <Route path="/products" element={<ProductCatalogue />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/checkout-information" element={<CheckoutInformation />} />
        <Route path="/checkout-complete" element={<CheckoutComplete />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
