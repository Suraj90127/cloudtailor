import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { ProductData } from "../../Data";
import { Link } from "react-router-dom";

const blouseproducts = [
  {
    id: 1,
    name: "Basic Tee",
    href: "/product-detail",
    imageSrc:
      "https://ct-product-assets.s3.ap-south-1.amazonaws.com/blouse-princesscut-0-260.webp",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "/login",
    imageSrc:
      "https://ct-product-assets.s3.ap-south-1.amazonaws.com/blouse-sleeveless-0-340.webp",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 3,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://ct-product-assets.s3.ap-south-1.amazonaws.com/blouse-embroidery-0-720.webp",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 4,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://ct-product-assets.s3.ap-south-1.amazonaws.com/blouse-embroidery-0-720.webp",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 5,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://ct-product-assets.s3.ap-south-1.amazonaws.com/blouse-embroidery-0-720.webp",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },

  // More products...
];

export default function Baner() {
  return (
    <>
      <div className="bg-gray-100">
        <Navbar />

        {/* Banner section */}
        <div className="m-10 shadow-2xl">
          <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-500 rounded-xl sm:px-10 md:h-[28rem] sm:h-52  shadow-lg">
            <div className=" gap-x-4 gap-y-2">
              <p className=" leading-6 text-gray-900">
                <h1 className="text-white sm:text-3xl md:text-4xl lg:text-5xl">
                  Blouse
                </h1>
                <h2 className="text-white texi-xs sm:text-lg md:text-xl lg:text-3xl self-stretch py-5">
                  Get the perfect blouse stitched for every occasion
                </h2>
                <h1 className="text-white sm:text-xs md:text-sm lg:text-lg ">
                  <span className="top- mt-5"></span>
                  20k+ Blouses Designed
                </h1>
                <h1 className="text-white sm:text-xs md:text-sm lg:text-lg py-5">
                  Different Embroidery Styles
                </h1>
                <h1 className="text-white sm:text-xs md:text-sm lg:text-lg ">
                  Dori Tassel
                </h1>
              </p>
            </div>
            <div className="flex flex-1 justify-end">
              <button
                type="button"
                className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
              >
                <a href="/checkout">
                  <img
                    src="https://ct-product-assets.s3.ap-south-1.amazonaws.com/blouse-transparent.png"
                    alt=""
                    className="h-[30rem] w-[27rem] text-gray-900"
                    aria-hidden="true"
                  />
                </a>
              </button>
            </div>
          </div>
        </div>

        {/*Pick your style*/}

        <div className="flex flex-col justify-center items-center gap-6 choose-text my-10">
          <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-primary-matte-black text-center">
            Pick your style
          </h1>

          <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {/* Upload desine */}
            <Link to="/upload-design">
              <div className=" aspect-w-1 overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 bg-white lg:h-[27rem]">
                <div>
                  <div className="flex items-center justify-center xl:text-5xl lg:text-4xl md:text-4xl sm:text-lg text-base text-center z-10 opacity-100 mt-28">
                    <ion-icon name="arrow-up-circle-outline"></ion-icon>
                  </div>
                  <div className="flex items-center justify-center flex-col	my-5  xl:text-2xl lg:text-4xl md:text-4xl sm:text-lg ">
                    <h1>UPLOAD YOUR</h1>
                    <h1 className="font-bold	">OWN DESIGN</h1>
                  </div>
                </div>
              </div>
            </Link>
            {blouseproducts.map((product) => (
              <div key={product.id} className="group relative">
                <div className=" w-full overflow-hidden rounded-md bg-gray-500 lg:aspect-none group-hover:opacity-75 lg:h-[27rem]">
                  <Link to={product.href}>
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      sty
                    />
                  </Link>
                </div>
                <div className="flex flex-col items-center justify-center px-2">
                  <div>
                    <h3 className="mt-4 md:text-base text-center text-gray-900 font-sans text-2xl">
                      <span aria-hidden="true" className="absolute opacity-0" />
                      {product.name}
                    </h3>
                    {/* <p className="mt-1 text-sm text-gray-500">
                      {product.color}
                    </p> */}
                  </div>
                  <p className="flex items-center justify-between font-bold">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tailoring made easy, just for you */}

        <div className="sm:grid-cols-1">
          {/* contant section */}
          <div className="flex flex-col items-center justify-center w-full py-10 gap-4 md:gap-6 lg:gap-8">
            <div className="flex flex-col justify-center items-center gap-6 choose-text">
              <h1 className="text-xl md:text-2xl lg:text-2xl xl:text-3xl font-medium text-primary-matte-black text-center">
                Tailoring made easy, just for you
              </h1>
              <span className="text-sm md:text-base lg:text-lg text-center w-full max-w-5xl font-normal text-gray-800">
                You deserve clothes that make YOU feel confident, comfortable,
                and empowered. We are here to make outfits just for you that
                make you feel so and that too in three simple steps.
              </span>
            </div>

            <div className="md:flex flex-col gap-4 md:gap-6 lg:gap-8 m-5">
              {/* first section */}
              <div className="grid grid-cols-12  items-start lg:items-center gap-2 md:gap-5 lg:gap-10 xl:gap-14">
                <div className="col-span-6 ml">
                  <span className="flex items-center gap-4 py-2">
                    <p className="hidden lg:flex text-lg font-medium border border-primary-voilet-dark bg-gray-500 text-white w-10 h-10 justify-center items-center rounded-full">
                      1
                    </p>
                    <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-medium lg:font-normal text-primary-matte-black">
                      Pick your style
                    </p>
                  </span>
                  <span>
                    <p className="py-2 text-xs md:text-sm lg:text-xl max-w-5xl font-normal text-gray-700">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Suscipit odit totam assumenda, cumque quod numquam
                      ratione?
                    </p>
                  </span>
                </div>

                <div className="col-span-6">
                  <img
                    src="https://www.cloudtailor.com/_next/image?url=https%3A%2F%2Fcloudtailor-cdn.s3.ap-south-1.amazonaws.com%2Fhow_it_works%2FPick-your-style.webp&w=1080&q=75"
                    alt=""
                  />
                </div>
              </div>

              {/* second section */}
              <div className="grid grid-cols-12  items-start lg:items-center gap-2 md:gap-5 lg:gap-10 xl:gap-14">
                <div className="col-span-6">
                  <img
                    src="https://t3.ftcdn.net/jpg/00/84/87/80/360_F_84878016_Zs9yLjT1XecTYJXoUH44oErWi9XHMqtl.jpg"
                    alt=""
                  />
                </div>
                <div className="col-span-6">
                  <span className="flex items-center gap-4 py-2">
                    <p className="hidden lg:flex text-lg font-medium border border-primary-voilet-dark bg-gray-500 text-white w-10 h-10 justify-center items-center rounded-full">
                      2
                    </p>
                    <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-medium lg:font-normal text-primary-matte-black">
                      Pick your style
                    </p>
                  </span>
                  <span>
                    <p className="py-2 text-xs md:text-sm lg:text-xl max-w-5xl font-normal text-gray-700">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Suscipit odit totam assumenda, cumque quod numquam
                      ratione?
                    </p>
                  </span>
                </div>
              </div>

              {/* third section */}

              <div className="grid grid-cols-12  items-start lg:items-center gap-2 md:gap-5 lg:gap-10 xl:gap-14">
                <div className="col-span-6">
                  <span className="flex items-center gap-4 py-2">
                    <p className="hidden lg:flex text-lg font-medium border border-primary-voilet-dark bg-gray-500 text-white w-10 h-10 justify-center items-center rounded-full">
                      3
                    </p>
                    <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-medium lg:font-normal text-primary-matte-black">
                      Pick your style
                    </p>
                  </span>
                  <span>
                    <p className="py-2 text-xs md:text-sm lg:text-xl max-w-5xl font-normal text-gray-700">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Suscipit odit totam assumenda, cumque quod numquam
                      ratione? Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Dolorum, corrupti?
                    </p>
                  </span>
                </div>
                <div className="col-span-6">
                  <img
                    src="https://content3.jdmagicbox.com/comp/def_content/tailors/shutterstock-147651662-tailors-1-w1j93.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Explore other categories */}
        <div className="flex flex-col justify-center items-center gap-6 choose-text my-10">
          <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-primary-matte-black text-center">
            Explore other categories
          </h1>

          <div className="grid grid-cols-1gap-x-4 gap-y-10 sm:grid-cols-2 lg:mx-10 lg:grid-cols-4 xl:gap-x-8">
            {ProductData.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 bg-gray-800">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-32 object-cover object-center lg:h-full lg:w-full bg-slate-600"
                    style={{ width: "350px", height: "500px" }}
                    sty
                  />
                </div>

                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center xl:text-2xl lg:text-2xl md:text-xl sm:text-lg text-base text-center z-10 opacity-100 text-gray-950 font-medium">
                      <a href={product.href}>
                        <span
                          aria-hidden="true"
                          className="absolute opacity-0"
                        />
                        {product.name}
                      </a>
                    </h3>
                    {/* <p className="mt-1 text-sm text-gray-500 ml-52">
                      {product.color}
                    </p> */}
                  </div>
                  {/* <p className="text-sm font-medium text-gray-900">
                    {product.price}
                  </p> */}
                </div>
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
