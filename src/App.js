import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import Footer from "./features/footer/Footer";
import CasualPage from "./pages/CasualPage";
import FormalPage from "./pages/FormalPage";
import OurstorePage from "./pages/OurstorePage";
import Tailorinfo from "./features/tailorinfo/Tailorinfo";
import Giftcrd from "./features/tailorinfo/gift_card/Giftcrd";
import Profile from "./features/tailorinfo/gift_card/Profile";
import Myaddress from "./features/tailorinfo/gift_card/Myaddress";
import MyOder from "./features/tailorinfo/gift_card/MyOder";
import Gallery from "./features/tailorinfo/Gallery";
import Faqs from "./features/tailorinfo/faqs/Faqs";
import Map from "./features/tailorinfo/Map";
import ContactUs from "./features/tailorinfo/ContactUs";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import BlouserBanner from "./features/baner/BlouserBanner";

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
    path: "/formal",
    element: <FormalPage />,
  },
  {
    path: "/ourstore",
    element: <OurstorePage />,
  },
  {
    path: "/baner",
    element: <BlouserBanner />,
  },
  {
    path: "/upload-design",
    element: <UploadDesign />,
  },
  {
    path: "/tailorinfo",
    element: <Tailorinfo />,
  },
  {
    path: "/giftcard",
    element: <Giftcrd />,
  },
  {
    path: "/giftcard/profile",
    element: <Profile />,
  },
  {
    path: "/giftcard/my-address",
    element: <Myaddress />,
  },
  {
    path: "/giftcard/my-order",
    element: <MyOder />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/faqs",
    element: <Faqs />,
  },
  {
    path: "/map",
    element: <Map />,
  },
  {
    path: "/contactus",
    element: <ContactUs />,
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
