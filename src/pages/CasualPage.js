import Navbar from "../features/navbar/Navbar";
import Casual from "../features/casual/Casual";
import Footer from "../features/product-list/Components/footer/Footer";

function CasualPage() {
  return (
    <>
      <div className="bg-gray-100">
        <Navbar />
        <Casual />
        <Footer />
      </div>
    </>
  );
}

export default CasualPage;
