import React from "react";
import { Link } from "react-router-dom";

const casualproducts = [
  {
    id: 1,
    name: "Jacket",
    href: "/baner",
    imageSrc:
      "https://www.cloudtailor.com/_next/image?url=https%3A%2F%2Fct-product-assets.s3.ap-south-1.amazonaws.com%2Fjacket-thumb-340.webp&w=640&q=75",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 2,
    name: "Shirt",
    href: "",
    imageSrc:
      "https://www.cloudtailor.com/_next/image?url=https%3A%2F%2Fct-product-assets.s3.ap-south-1.amazonaws.com%2Fshirt-thumb-340.webp&w=640&q=75",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 3,
    name: "Trouser",
    href: "#",
    imageSrc:
      "https://www.cloudtailor.com/_next/image?url=https%3A%2F%2Fct-product-assets.s3.ap-south-1.amazonaws.com%2Ftrouser-thumb-340.webp&w=640&q=75",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },

  // More products...
];

export default function Formal() {
  return (
    <>
      <div className="mb-5 mx-5">
        {/* Your choice, we’ll design & stitch, just for you!  */}

        <div className="flex flex-col justify-center items-center gap-6 choose-text my-10">
          <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-primary-matte-black text-center">
            Your choice, we’ll design & stitch, just for you!
          </h1>
          <span className="text-sm md:text-base lg:text-lg text-center w-full max-w-5xl text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia quae, deserunt reiciendis amet similique repellat possimus
            adipisci ab magnam dolorem dicta sed explicabo porro animi
            reprehenderit natus nobis iusto placeat et hic? Obcaecati ratione.
          </span>
        </div>
        {/* produc list */}
        <div className="  grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {casualproducts.map((bproduct) => (
            <div key={bproduct.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-500 lg:aspect-none group-hover:opacity-75 lg:h-90">
                <img
                  src={bproduct.imageSrc}
                  alt={bproduct.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base text-center z-10 opacity-100 text-white">
                    <a href={bproduct.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {bproduct.name}
                    </a>
                  </h3>
                  {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                </div>
                {/* <p className="text-sm font-medium text-gray-900">{product.price}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
