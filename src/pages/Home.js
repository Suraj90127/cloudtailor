import NavBar from "../features/navbar/Navbar";
import ProductList from "../features/product-list/Components/ProductList";
import Footer from "../features/footer/Footer";
import Swiper from "../features/swiper/Swiper";

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
