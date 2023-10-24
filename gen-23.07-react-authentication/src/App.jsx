import "./index.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import ProductDetail from "./pages/ProductDetail";
import ProductCatalogue from "./pages/ProductCatalogue";
import CheckoutInformation from "./pages/CheckoutInformation";
import CheckoutComplete from "./pages/CheckoutComplete";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/products" />} />
          <Route path="/products" element={<ProductCatalogue />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route
            path="/checkout-information"
            element={<CheckoutInformation />}
          />
          <Route path="/checkout-complete" element={<CheckoutComplete />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
