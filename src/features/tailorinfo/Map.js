import React from "react";
import Tnavbar from "./Tnavbar";
import Footer from "../footer/Footer";
import Subfooter from "../ourstore/Subfooter";

const Map = () => {
  return (
    <>
      <div>
        <Tnavbar />
        <div className="mx-10">
          <div className="sm:col-span-2 sm:col-start-1 mt-10 ">
            <div class="w-[100%] bg-gray-100 text-[#492267] font-medium py-3 px-5 rounded flex">
              <h1>Home</h1>
              <span className="mx-2">/</span>
              <a href="">Map</a>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-6 choose-text my-10">
            <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-primary-matte-black text-center">
              <span className="text-[#492267] "> CloudTailor Dholi Sati -</span>
              <span className="text-[#cbbf81]">Map</span>
            </h1>
            <p>
              Direction to your nearest Fashion & Tailoring Service For Women
            </p>
          </div>
          <div className="my-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7007.175783117955!2d77.3051866373693!3d28.582135274144022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce45e3eccb8a7%3A0xd5eb60e62b19e6ba!2sSector%2015%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1696327306327!5m2!1sen!2sin"
              //   wi   dth={600}
              height={450}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>
        <Footer />
        <Subfooter />
      </div>
    </>
  );
};

export default Map;
