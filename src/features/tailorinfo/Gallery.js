import React, { useState } from "react";
import Tnavbar from "./Tnavbar";
import Footer from "../footer/Footer";
import Subfooter from "../ourstore/Subfooter";

import { GrFormNext } from "react-icons/gr";
import { IoIosArrowBack } from "react-icons/io";

const Gallerydata = [
  {
    id: 1,
    name: "Blouse",
    href: "/baner",
    imageSrc:
      "https://static.locowiz.com/locomedia/cloud-tailor/1664559472_1569666005.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 2,
    name: "Kurta/Kurti",
    href: "#",
    imageSrc:
      "https://static.locowiz.com/locomedia/cloud-tailor/1664559469_164425281.jpeg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 3,
    name: "Salbar/Kameez",
    href: "#",
    imageSrc:
      "https://static.locowiz.com/locomedia/cloud-tailor/1664559469_471772897.jpeg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 4,
    name: "Lehenga",
    href: "#",
    imageSrc:
      "https://static.locowiz.com/locomedia/cloud-tailor/1664559468_1200222099.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 5,
    name: "Dress",
    href: "#",
    imageSrc:
      "https://static.locowiz.com/locomedia/cloud-tailor/1663734122_1331135931.jpeg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 6,
    name: "Ready-to-Wear Saree",
    href: "#",
    imageSrc:
      "https://static.locowiz.com/locomedia/cloud-tailor/1663734120_1077559622.jpeg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 7,
    name: "Shirt",
    href: "#",
    imageSrc:
      "https://static.locowiz.com/locomedia/cloud-tailor/1663734116_21166360.jpeg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 8,
    name: "Jumpsuit",
    href: "#",
    imageSrc:
      "https://static.locowiz.com/locomedia/cloud-tailor/1663734113_945682493.jpeg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },

  // More products...
];

const Gallery = () => {
  const [slideNumer, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const hendelOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const prevSlide = () => {
    slideNumer === 0
      ? setSlideNumber(Gallerydata.length - 1)
      : setSlideNumber(slideNumer - 1);
  };

  const nextSlide = () => {
    slideNumer + 1 === Gallerydata.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumer + 1);
  };
  return (
    <>
      <div>
        <Tnavbar />
        <div className="m-10">
          <div className="sm:col-span-2 sm:col-start-1 mt-5 ">
            <div class="w-[100%] bg-gray-300 text-[#492267] font-medium py-3 px-5 rounded flex">
              <h1>Home</h1>
              <span className="mx-2">/</span>
              <a href="">Gallery</a>
            </div>
          </div>

          <div className=" ">
            <div className="flex flex-col justify-center items-center gap-6 choose-text my-10">
              <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-primary-matte-black text-center">
                <span className="text-[#492267] ">
                  {" "}
                  CloudTailor Bajrangpuri -
                </span>
                <span className="text-[#cbbf81]">Picture Book</span>
              </h1>
            </div>
            {/* This code is product list */}

            <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {Gallerydata.map((product, index) => (
                <div className="group relative">
                  <div
                    key={index}
                    className="cursor-pointer aspect-h-1 aspect-w-1 w-full rounded-md bg-gray-500 lg:aspect-none group-hover:opacity-75 lg:h-90"
                    onClick={() => hendelOpenModal(index)}
                  >
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="cursor-pointer h-full w-full object-cover object-center lg:h-96 lg:w-full"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* model */}

            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base text-center z-10 opacity-100 text-white">
                  {/* <button
                      key={index}
                      className="w-full h-full font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      
                    >
                      click
                    </button> */}
                  {openModal ? (
                    <>
                      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-sm">
                          {/*content*/}
                          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[100%] h-[50%] bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                              <button
                                className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setOpenModal(false)}
                              >
                                <span className="bg-transparent text-gray-500 hover:text-black h-6 w-6 text-4xl block outline-none focus:outline-none">
                                  ×
                                </span>
                              </button>
                            </div>
                            {/*body*/}

                            <div className="relative p-6 flex-auto w-full h-">
                              <img
                                src={Gallerydata[slideNumer].imageSrc}
                                alt=""
                              />
                              {/* {console.log("imh", product)} */}
                            </div>

                            {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                              <button
                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={prevSlide}
                              >
                                <IoIosArrowBack></IoIosArrowBack>
                              </button>
                              <button
                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={nextSlide}
                              >
                                <GrFormNext></GrFormNext>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                  ) : null}
                </h3>
                {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
              </div>
              {/* <p className="text-sm font-medium text-gray-900">{product.price}</p> */}
            </div>
            <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl text-center text-heading-secondary">
              Wish to have a face-to-face interaction with the fashion designer?
              We have a solution for you!
            </h3>

            {/* face-to-face interaction */}

            <div className="tailor-interaction">
              <div className="col-lg-6 flex my-10 mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                <div className="left-img">
                  <div className="flex items-center justify-center absolute z-100">
                    <div className="py-32 px-20 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl tracking-wide text-black-700">
                      Visit our experience centre
                    </div>
                  </div>
                </div>
                <div className="right-img">
                  <div className="flex items-center justify-center absolute z-100">
                    <div className="py-32 px-20 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl tracking-wide text-black-700">
                      Visit our experience centre
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tailoring made easy, just for you */}
            <div className="bg-white sm:grid-cols-1">
              {/* contant section */}
              <div className="flex flex-col items-center justify-center w-full py-10 gap-4 md:gap-6 lg:gap-8">
                <div className="flex flex-col justify-center items-center gap-6 choose-text">
                  <h1 className="text-xl md:text-2xl lg:text-2xl xl:text-3xl font-medium text-primary-matte-black text-center">
                    Tailoring made easy, just for you
                  </h1>
                  <span className="text-sm md:text-base lg:text-lg text-center w-full max-w-5xl font-normal text-gray-800">
                    You deserve clothes that make YOU feel confident,
                    comfortable, and empowered. We are here to make outfits just
                    for you that make you feel so and that too in three simple
                    steps.
                  </span>
                </div>

                <div className="md:flex flex-col gap-4 md:gap-6 lg:gap-8"></div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <Subfooter />
      </div>
    </>
  );
};

export default Gallery;
