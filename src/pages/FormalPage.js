import Navbar from "../features/navbar/Navbar";
import Formal from "../features/formal/Formal";
import Footer from "../features/footer/Footer";

function FormalPage() {
  return (
    <>
      <div className="bg-gray-100">
        <Navbar />
        <Formal />
        <Footer />
      </div>
    </>
  );
}

export default FormalPage;
