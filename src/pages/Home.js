import NavBar from "../features/navbar/Navbar";
import ProductList from "../features/product-list/Components/ProductList";
import Footer from "../features/product-list/Components/footer/Footer";
import Swiper from "../features/product-list/Components/swiper/Swiper";

function Home() {
  return (
    <>
      <NavBar>
        <Swiper></Swiper>
        <ProductList></ProductList>
        <Footer />
      </NavBar>
    </>
  );
}

export default Home;
