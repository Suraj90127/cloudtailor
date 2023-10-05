import React, { Fragment } from "react";
// import { ChevronLeftIcon, ChevronRightIcon,ChevronDownIcon,
//   FunnelIcon,
//   MinusIcon,
//   PlusIcon,
//   Squares2X2Icon, } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import "./productList.css";

// import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
// import { XMarkIcon } from "@heroicons/react/24/outline";

// product Arr

// import { products } from "../../../data";

const products = [
  {
    id: 1,
    name: "Blouse",
    href: "/baner",
    imageSrc:
      "https://www.cloudtailor.com/_next/image?url=https%3A%2F%2Fct-product-assets.s3.ap-south-1.amazonaws.com%2Fblouse-thumb-260.webp&w=384&q=75",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 2,
    name: "Kurta/Kurti",
    href: "#",
    imageSrc:
      "https://www.cloudtailor.com/_next/image?url=https%3A%2F%2Fct-product-assets.s3.ap-south-1.amazonaws.com%2Fkurti-thumb-260.webp&w=384&q=75",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 3,
    name: "Salbar/Kameez",
    href: "#",
    imageSrc:
      "https://www.cloudtailor.com/_next/image?url=https%3A%2F%2Fct-product-assets.s3.ap-south-1.amazonaws.com%2Fsalwarkameez-thumb-340.webp&w=640&q=75",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 4,
    name: "Lehenga",
    href: "#",
    imageSrc:
      "https://www.cloudtailor.com/_next/image?url=https%3A%2F%2Fct-product-assets.s3.ap-south-1.amazonaws.com%2Flehenga-thumb-340.webp&w=640&q=75",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 5,
    name: "Dress",
    href: "#",
    imageSrc:
      "https://www.cloudtailor.com/_next/image?url=https%3A%2F%2Fct-product-assets.s3.ap-south-1.amazonaws.com%2Fdress-thumb-340.webp&w=640&q=75",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 6,
    name: "Ready-to-Wear Saree",
    href: "#",
    imageSrc:
      "https://www.cloudtailor.com/_next/image?url=https%3A%2F%2Fct-product-assets.s3.ap-south-1.amazonaws.com%2Fsaree-thumb-340.webp&w=640&q=75",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 7,
    name: "Shirt",
    href: "#",
    imageSrc:
      "https://www.cloudtailor.com/_next/image?url=https%3A%2F%2Fct-product-assets.s3.ap-south-1.amazonaws.com%2Fshirt-thumb-340.webp&w=640&q=75",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 8,
    name: "Jumpsuit",
    href: "#",
    imageSrc:
      "https://www.cloudtailor.com/_next/image?url=https%3A%2F%2Fct-product-assets.s3.ap-south-1.amazonaws.com%2Fjumpsuit-thumb-340.webp&w=640&q=75",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },

  // More products...
];

export default function ProductList() {
  return (
    <>
      <div>
        <div className="bg-white">
          <div className=" ">
            <div className="flex flex-col justify-center items-center gap-6 choose-text my-10">
              <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-primary-matte-black text-center">
                Your choice, we’ll design & stitch, just for you!
              </h1>
              <span className="text-sm md:text-base lg:text-lg text-center w-full max-w-5xl text-gray-800">
                It’s time to say goodbye to adjusting and compromising on
                clothes that don’t match your style and size! We are here to
                design and stitch outfits for you that fits you, not the other
                way around.
              </span>
            </div>
            {/* This code is product list */}

            <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <div key={product.id} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-500 lg:aspect-none group-hover:opacity-75 lg:h-90">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base text-center z-10 opacity-100 text-white">
                        <a href={product.href}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product.name}
                        </a>
                      </h3>
                      {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                    </div>
                    {/* <p className="text-sm font-medium text-gray-900">{product.price}</p> */}
                  </div>
                </div>
              ))}
            </div>
            <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl text-center text-heading-secondary">
              Wish to have a face-to-face interaction with the fashion designer?
              We have a solution for you!
            </h3>

            {/* face-to-face interaction */}

            <div className="tailor-interaction">
              <div className="col-lg-6 flex my-10 mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                <div className="left-img">
                  {/* <img src="https://www.cloudtailor.com/_next/image?url=https%3A%2F%2Fcloudtailor-cdn.s3.ap-south-1.amazonaws.com%2FBrand-outlet.webp&w=750&q=75" alt='url error'
            className="rounded-lg" /> */}
                  <div className="flex items-center justify-center absolute z-100">
                    <div className="py-32 px-20 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl tracking-wide text-black-700">
                      Visit our experience centre
                    </div>
                  </div>
                </div>
                <div className="right-img">
                  {/* <img src="https://www.cloudtailor.com/_next/image?url=https%3A%2F%2Fcloudtailor-cdn.s3.ap-south-1.amazonaws.com%2Fshop-in-shop.webp&w=750&q=75" alt='url error' 
          className="rounded-lg" /> */}
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

                <div className="md:flex flex-col gap-4 md:gap-6 lg:gap-8">
                  {/* first section */}
                  <div className="grid grid-cols-12  items-start lg:items-center gap-2 md:gap-5 lg:gap-10 xl:gap-14">
                    <div className="col-span-6">
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
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Suscipit odit totam assumenda, cumque quod
                          numquam ratione?
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
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Suscipit odit totam assumenda, cumque quod
                          numquam ratione?
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
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Suscipit odit totam assumenda, cumque quod
                          numquam ratione? Lorem ipsum dolor sit amet
                          consectetur adipisicing elit. Dolorum, corrupti?
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
          </div>
        </div>

        {/* Why are you choose section */}
        <section class=" lg:pt-[30px] lg:pb-10 bg-gray-100">
          <div className="flex flex-col items-center justify-center w-full px-0 lg:px-10 xl:px-20 gap-4 md:gap-6 lg:gap-8">
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-primary-matte-black text-center">
              Why choose us?
            </h2>
            <span className="mb-10 text-sm md:text-base lg:text-lg text-center w-full max-w-5xl font-normal text-gray-800">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
                voluptatum doloribus impedit voluptas cum fugit veritatis
                perspiciatis quibusdam debitis autem nostrum omnis corporis,
                repellat cupiditate quidem harum at tempora accusamus.
              </p>
            </span>
          </div>
          <div class="container mx-auto">
            <div class="-mx-4 flex flex-wrap">
              <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                <div class="mx-auto mb-10 max-w-[370px]">
                  <div class="mb-8 overflow-hidden rounded">
                    <img
                      src="https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-01.jpg"
                      alt="image"
                      class="w-full"
                    />
                  </div>
                  <div>
                    <span class="bg-primary mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
                      Dec 22, 2023
                    </span>
                    <h3>
                      <a
                        href="javascript:void(0)"
                        class="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                      >
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. In, sequi?
                      </a>
                    </h3>
                    <p class="text-body-color text-base">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                <div class="mx-auto mb-10 max-w-[370px]">
                  <div class="mb-8 overflow-hidden rounded">
                    <img
                      src="https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-01.jpg"
                      alt="image"
                      class="w-full"
                    />
                  </div>
                  <div>
                    <span class="bg-primary mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
                      Dec 22, 2023
                    </span>
                    <h3>
                      <a
                        href="javascript:void(0)"
                        class="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                      >
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. In, sequi?
                      </a>
                    </h3>
                    <p class="text-body-color text-base">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                <div class="mx-auto mb-10 max-w-[370px]">
                  <div class="mb-8 overflow-hidden rounded">
                    <img
                      src="https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-01.jpg"
                      alt="image"
                      class="w-full"
                    />
                  </div>
                  <div>
                    <span class="bg-primary mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
                      Dec 22, 2023
                    </span>
                    <h3>
                      <a
                        href="javascript:void(0)"
                        class="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                      >
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. In, sequi?
                      </a>
                    </h3>
                    <p class="text-body-color text-base">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                <div class="mx-auto mb-10 max-w-[370px]">
                  <div class="mb-8 overflow-hidden rounded">
                    <img
                      src="https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-01.jpg"
                      alt="image"
                      class="w-full"
                    />
                  </div>
                  <div>
                    <span class="bg-primary mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
                      Dec 22, 2023
                    </span>
                    <h3>
                      <a
                        href="javascript:void(0)"
                        class="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                      >
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. In, sequi?
                      </a>
                    </h3>
                    <p class="text-body-color text-base">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                <div class="mx-auto mb-10 max-w-[370px]">
                  <div class="mb-8 overflow-hidden rounded">
                    <img
                      src="https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-02.jpg"
                      alt="image"
                      class="w-full"
                    />
                  </div>
                  <div>
                    <span class="bg-primary mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
                      Mar 15, 2023
                    </span>
                    <h3>
                      <a
                        href="javascript:void(0)"
                        class="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Qui, consectetur.
                      </a>
                    </h3>
                    <p class="text-body-color text-base">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                <div class="mx-auto mb-10 max-w-[370px]">
                  <div class="mb-8 overflow-hidden rounded">
                    <img
                      src="https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-03.jpg"
                      alt="image"
                      class="w-full"
                    />
                  </div>
                  <div>
                    <span class="bg-primary mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
                      Jan 05, 2023
                    </span>
                    <h3>
                      <a
                        href="javascript:void(0)"
                        class="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                      >
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Minus, dolor?
                      </a>
                    </h3>
                    <p class="text-body-color text-base">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
