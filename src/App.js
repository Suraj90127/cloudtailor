import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import Footer from "./features/product-list/Components/footer/Footer";
import CasualPage from "./pages/CasualPage";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Baner from "./features/baner/Baner";
import UploadDesign from "./features/uploaddesign/UploadDesign";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/product-detail",
    element: <ProductDetailsPage />,
  },

  {
    path: "/footer",
    element: <Footer />,
  },
  {
    path: "/casual",
    element: <CasualPage />,
  },
  {
    path: "/baner",
    element: <Baner />,
  },
  {
    path: "/upload-design",
    element: <UploadDesign />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
