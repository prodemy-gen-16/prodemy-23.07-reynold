import "./index.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CheckoutProvider } from "./context/CheckoutContext";

import ProductDetail from "./pages/ProductDetail";
import ProductCatalogue from "./pages/ProductCatalogue";
import CheckoutInformation from "./pages/CheckoutInformation";
import CheckoutComplete from "./pages/CheckoutComplete";

function App() {
  return (
    <CheckoutProvider>
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
    </CheckoutProvider>
  );
}

export default App;
