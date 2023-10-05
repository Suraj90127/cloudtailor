import React from "react";
import Tnavbar from "./Tnavbar";
// import { Children, Fragment } from "react";
// import { Disclosure, Menu, Transition } from "@headlessui/react";
import { AiFillCheckCircle } from "react-icons/ai";
import Footer from "../footer/Footer";
import Subfooter from "../ourstore/Subfooter";

// import {
//   Bars3Icon,
//   ShoppingCartIcon,
//   XMarkIcon,
// } from "@heroicons/react/24/outline";
// import logo from "../../image/logo.png";
// import Logom from "../../image/Logom.jpeg";
import { Link, useNavigate } from "react-router-dom";
// import { CgProfile } from "react-icons/cg";

import { PiTrafficSignBold } from "react-icons/pi";
import { BsShareFill } from "react-icons/bs";
import { IoIosCall } from "react-icons/io";
import { MdOutlineWatchLater } from "react-icons/md";

import { AiFillStar } from "react-icons/ai";

// import React, { useRef, useState } from "react";
// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
// import { Autoplay, Pagination, Navigation } from "swiper/modules";

const TailorData = [
  {
    name: "CloudTailor Dholi Sati",
    state: "Patna",
    city: "dehli",
    address:
      "MIG 349 & 350, Balaji Nagar Main Road, Kukatpally Housing Board Colony, Kukatpally, Hyderabad, Telangana",
    pincode: 111111,
    phone: 9902197249,
    time: "11:00 AM to 08:00 PM",
    href: "",
  },
];

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

const Tailorinfo = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        {/* Navbar section  */}
        <Tnavbar />
        {/* qr section  */}
        <div className="mb-10 lg:mx-10 md:mx-5 sm:mx-5">
          <section className=" lg:pt-[30px] md:pt-10 sm:pt-5">
            <div className="container mx-auto">
              <div className=" flex lg:flex-row md:flex-row sm:flex-col ">
                {TailorData.map((tdata) => (
                  <div className=" sm:w-full md:w-[48%] lg:w-[48%] md:h-auto border-[1px] md:ml-5 mb-10">
                    <div className="mx-auto pb-5 max-w-full border-b-[1px]">
                      <div className="mb-4 overflow-hidden rounded">
                        <div className="border-b-[1px] py-3 bg-gray-100 px-10">
                          <div className="flex justify-between">
                            {/* <PiTrafficSignBold className="text-xl m-1"></PiTrafficSignBold> */}
                            <a href="">
                              <h1 className="text-xl text-[#a549eb]">
                                {tdata.name}
                              </h1>
                            </a>
                            <Link to="">
                              <BsShareFill className=" sm:ml-32 mt-1 text-xl text-[#a549eb]"></BsShareFill>
                            </Link>
                          </div>
                          <p className="ml- text-lg text-[#a549eb]">
                            {tdata.state}
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="text-body-color text-base px-10">
                          {tdata.address},{tdata.pincode}
                        </p>
                      </div>
                      <div className="flex md:flex-row mt-5 mx-5">
                        <div className="mobale_number flex">
                          <IoIosCall className="mt-1 mx-1"></IoIosCall>
                          <a href="">{tdata.phone}</a>
                        </div>

                        <div className="time flex ml-28">
                          <MdOutlineWatchLater className="mt-1 mx-1"></MdOutlineWatchLater>
                          <p>{tdata.time}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-center my-2 text-green-500 font-medium">
                        OPEN NOW
                      </p>
                    </div>

                    <div className="flex flex-col mx-5">
                      <div>
                        <a href="">
                          <button className="w-[95%] bg-[#492267] hover:bg-yellow-200 hover:text-black text-white font-normal py-1 px-4 rounded ">
                            <span className="m-1"></span>
                            Call
                          </button>
                        </a>
                      </div>
                      <div className="mt-5">
                        <a href="">
                          <button className="w-[95%] bg-black hover:bg-yellow-200 hover:text-black text-white font-normal py-1 px-4 rounded ">
                            <span className="m-1">
                              <ion-icon name="compass-outline"></ion-icon>
                            </span>
                            Get Direaction
                          </button>
                        </a>
                      </div>
                    </div>
                    <div className="border-t-2 py-5 bg-gray-100 mt-10">
                      <div className="flex flex-row mx-5">
                        <span>
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Sample_EPC_QR_code.png"
                            alt=""
                            className="w-28"
                          />
                        </span>
                        <span className="mt-10 ml-2">
                          {" "}
                          ADD TO YOUR CONTACTS
                        </span>
                        <samp className="mt-8 lg:ml-32 md:ml-0 sm:ml-0">
                          <img
                            src="https://stores.cloudtailor.com/cloudtailors/images/address-icon.png"
                            alt=""
                          />
                        </samp>
                      </div>
                      <div className=" justify-center items-center lg:space-y-4 md:flex md:space-x-2 sm:flex sm:space-y-0 sm:space-x-16">
                        <h2>Download App</h2>
                        <a
                          href="#"
                          className="w-[30%] flex bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                        >
                          <svg
                            className="mr-3 w-5 h-5"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fab"
                            data-icon="apple"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                          >
                            <path
                              fill="currentColor"
                              d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                            ></path>
                          </svg>
                          <div className="text-left">
                            <div className="mb-1 text-xs">Download</div>
                            <div className="-mt-1 font-sans text-xs font-semibold">
                              App Store
                            </div>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="w-[30%] flex bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                        >
                          <svg
                            className="mr-3 w-5 h-5"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fab"
                            data-icon="google-play"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="currentColor"
                              d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
                            ></path>
                          </svg>
                          <div className="text-left">
                            <div className="mb-1 text-xs">Get in on</div>
                            <div className="-mt-1 font-sans text-xs font-semibold">
                              Google Play
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
                <div className=" w-full md:w-[48%] lg:w-[48%] md:h-auto border-[1px] md:ml-5 mb-10">
                  <div className="mx-auto  max-w-full border-b-[1px]">
                    <div className=" overflow-hidden rounded m-0">
                      <div classNameN="border-b-[1px] py-3 bg-gray-100 px-10">
                        <div className="flex p-5 pb-3 border-b-2">
                          <AiFillStar className="text-2xl m-1 text-[#a549eb]"></AiFillStar>

                          <h1 className="text-2xl text-[#a549eb] ml-1">
                            Ratings & Reviews
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div className="sm:w-full">
                      <div className="w-40 mx-5">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Sample_EPC_QR_code.png"
                          alt=""
                        />
                      </div>
                      <div className="bg-gray-300 mx-5 px-5 rounded-lg w-60">
                        <h2>Please scan QR to rate us.</h2>
                      </div>
                    </div>
                    <div className="overflow-y-hidden ">
                      <div className=" overflow-scroll m-5 h-40">
                        <div>
                          {/* <AiFillStar className="text-2xl m-1 text-[#a549eb]"></AiFillStar> */}
                          <span className="flex flex-row text-2xl text-yellow-400">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                          </span>
                          <h2 className="py-2">
                            Good experience, Good service
                          </h2>
                          <h2 className="text-gray-300">
                            MEGHANA PADMINI Posted On: 11-06-2023
                          </h2>
                        </div>
                        <div className="mt-5">
                          {/* <AiFillStar className="text-2xl m-1 text-[#a549eb]"></AiFillStar> */}
                          <span className="flex flex-row text-2xl text-yellow-400">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                          </span>
                          <h2 className="py-2">
                            Good experience, Good service
                          </h2>
                          <h2 className="text-gray-300">
                            MEGHANA PADMINI Posted On: 11-06-2023
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col mx-10 mt-4">
                    <div>
                      <a href="">
                        <button className="w-[95%] bg-[#492267] hover:bg-yellow-200 hover:text-black text-white font-normal py-1 px-4 rounded ">
                          <span className="m-1">
                            <ion-icon name="globe-outline"></ion-icon>
                          </span>
                          Website
                        </button>
                      </a>
                    </div>
                    <div className="mt-5">
                      <a href="">
                        <button className="w-[95%] bg-black hover:bg-yellow-200 hover:text-black text-white font-normal py-1 px-4 rounded ">
                          <span className="m-1">
                            <ion-icon name="compass-outline"></ion-icon>
                          </span>
                          Get Direaction
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <Swiper
          spaceBetween={30}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="w-full px-4 h-96 md:w-[28%] lg:w-[28%] border-[1px] rounded-lg mx-10">
              <div className="mx-auto mb-10 max-w-[370px]">
                <div className="overflow-hidden rounded border-b-[1px] px-10 py-7">
                  <img
                    src="https://stores.cloudtailor.com/cloudtailors/images/parking-ico.jpg"
                    alt="image"
                    className="w-36 ml-8"
                  />
                  <h1 className="ml-5 mt-3 text-2xl">Parking Options</h1>
                </div>
                <div>
                  <p className="text-body-color text-base text-center flex  mt-10">
                    <span>
                      <AiFillCheckCircle className="mt-1 mr-1"></AiFillCheckCircle>
                    </span>
                    <span> On Site Parking</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 h-96 md:w-[28%]  lg:w-[28%] border-[1px] rounded-lg sm:mx-10 md:mx-0 sm:my-5 md:my-0">
              <div className="mx-auto mb-10 max-w-[370px]">
                <div className="overflow-hidden rounded border-b-[1px] px-10 py-7">
                  <img
                    src="https://stores.cloudtailor.com/cloudtailors/images/business-ico.jpg"
                    alt="image"
                    className="w-36 ml-8"
                  />
                  <h1 className="ml-5 mt-3 text-2xl">Business Hours</h1>
                </div>
                <div className="text-body-color text-base text-center flex justify-center mt-5">
                  <div>
                    <p className="font-medium text-lg">Open Today</p>
                    <h1>Mon - Sunday</h1>
                    <p>(10:30 AM to 08:00 PM)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 h-96 md:w-[28%]  lg:w-[28%] border-[1px] rounded-lg mx-10">
              <div className="mx-auto mb-10 max-w-[370px]">
                <div className="overflow-hidden rounded border-b-[1px] px-10 py-7">
                  <img
                    src="https://stores.cloudtailor.com/cloudtailors/images/payment-ico.jpg"
                    alt="image"
                    className="w-36 ml-8"
                  />
                  <h1 className="ml-5 mt-3 text-2xl">Payment Methods</h1>
                </div>
                <div>
                  <p className="text-body-color text-base text-center flex mt-5">
                    <span>
                      <AiFillCheckCircle className="mt-1 mr-1"></AiFillCheckCircle>
                    </span>
                    <span> Cash</span>
                  </p>
                  <p className="text-body-color text-base text-center flex mt-5">
                    <span>
                      <AiFillCheckCircle className="mt-1 mr-1"></AiFillCheckCircle>
                    </span>
                    <span> UPI</span>
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full px-4 h-96 md:w-[28%]  lg:w-[28%] border-[1px] rounded-lg sm:mx-10 md:mx-0 sm:my-5 md:my-0">
              <div className="mx-auto mb-10 max-w-[370px]">
                <div className="overflow-hidden rounded border-b-[1px] px-10 py-7">
                  <img
                    src="https://stores.cloudtailor.com/cloudtailors/images/business-ico.jpg"
                    alt="image"
                    className="w-36 ml-8"
                  />
                  <h1 className="ml-5 mt-3 text-2xl">Business Hours</h1>
                </div>
                <div className="text-body-color text-base text-center flex justify-center mt-5">
                  <div>
                    <p className="font-medium text-lg">Open Today</p>
                    <h1>Mon - Sunday</h1>
                    <p>(10:30 AM to 08:00 PM)</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full px-4 h-96 md:w-[28%]  lg:w-[28%] border-[1px] rounded-lg mx-10">
              <div className="mx-auto mb-10 max-w-[370px]">
                <div className="overflow-hidden rounded border-b-[1px] px-10 py-7">
                  <img
                    src="https://stores.cloudtailor.com/cloudtailors/images/payment-ico.jpg"
                    alt="image"
                    className="w-36 ml-8"
                  />
                  <h1 className="ml-5 mt-3 text-2xl">Payment Methods</h1>
                </div>
                <div>
                  <p className="text-body-color text-base text-center flex mt-5">
                    <span>
                      <AiFillCheckCircle className="mt-1 mr-1"></AiFillCheckCircle>
                    </span>
                    <span> Cash</span>
                  </p>
                  <p className="text-body-color text-base text-center flex mt-5">
                    <span>
                      <AiFillCheckCircle className="mt-1 mr-1"></AiFillCheckCircle>
                    </span>
                    <span> UPI</span>
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper> */}
          {/* card section  */}
          <section className="mb-10">
            <div className="container mx-auto">
              <div className="flex lg:flex-row md:flex-row sm:flex-col">
                <div className="w-full px-4 h-96 md:w-[28%] lg:w-[28%] border-[1px] rounded-lg mx-10">
                  <div className="mx-auto mb-10 max-w-[370px]">
                    <div className="overflow-hidden rounded border-b-[1px] px-10 py-7">
                      <img
                        src="https://stores.cloudtailor.com/cloudtailors/images/parking-ico.jpg"
                        alt="image"
                        className="w-36 ml-8"
                      />
                      <h1 className="ml-5 mt-3 text-2xl">Parking Options</h1>
                    </div>
                    <div>
                      <p className="text-body-color text-base text-center flex  mt-10">
                        <span>
                          <AiFillCheckCircle className="mt-1 mr-1"></AiFillCheckCircle>
                        </span>
                        <span> On Site Parking</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full px-4 h-96 md:w-[28%]  lg:w-[28%] border-[1px] rounded-lg sm:mx-10 md:mx-0 sm:my-5 md:my-0">
                  <div className="mx-auto mb-10 max-w-[370px]">
                    <div className="overflow-hidden rounded border-b-[1px] px-10 py-7">
                      <img
                        src="https://stores.cloudtailor.com/cloudtailors/images/business-ico.jpg"
                        alt="image"
                        className="w-36 ml-8"
                      />
                      <h1 className="ml-5 mt-3 text-2xl">Business Hours</h1>
                    </div>
                    <div className="text-body-color text-base text-center flex justify-center mt-5">
                      <div>
                        <p className="font-medium text-lg">Open Today</p>
                        <h1>Mon - Sunday</h1>
                        <p>(10:30 AM to 08:00 PM)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full px-4 h-96 md:w-[28%]  lg:w-[28%] border-[1px] rounded-lg mx-10">
                  <div className="mx-auto mb-10 max-w-[370px]">
                    <div className="overflow-hidden rounded border-b-[1px] px-10 py-7">
                      <img
                        src="https://stores.cloudtailor.com/cloudtailors/images/payment-ico.jpg"
                        alt="image"
                        className="w-36 ml-8"
                      />
                      <h1 className="ml-5 mt-3 text-2xl">Payment Methods</h1>
                    </div>
                    <div>
                      <p className="text-body-color text-base text-center flex mt-5">
                        <span>
                          <AiFillCheckCircle className="mt-1 mr-1"></AiFillCheckCircle>
                        </span>
                        <span> Cash</span>
                      </p>
                      <p className="text-body-color text-base text-center flex mt-5">
                        <span>
                          <AiFillCheckCircle className="mt-1 mr-1"></AiFillCheckCircle>
                        </span>
                        <span> UPI</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* pragraph card section  */}
          <div className="">
            <div className="pra_card border-[1px] w-[100%] h-96 bg-gray-100 overflow-hidden">
              <div className="w-full h-12 bg-blue-700 flex justify-center items-center text-white text-xl">
                <h1>CLOUDTAILOR DHOLI SATI</h1>
              </div>
              <div className="m-5 text-justify overflow-scroll">
                <div className=" mx-5 ">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Harum, voluptates? Est, quod laudantium enim consequuntur
                    voluptate necessitatibus et ea voluptas, omnis, in minus a
                    porro incidunt ad dicta praesentium aliquam voluptatum
                    dolorum? Facere provident, voluptatum assumenda illo
                    accusamus
                  </p>
                  <br />
                  <br />
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis nulla corporis tenetur vitae magnam velit dignissimos
                    dolorum maiores sequi quis pariatur nisi possimus aut
                    asperiores dicta doloribus animi saepe, a expedita minima at
                    laboriosam ipsa. Et recusandae voluptatibus quidem magnam
                    eius rem autem corrupti laudantium, aliquam iste, tenetur
                    temporibus officiis ipsum quas neque. Numquam, suscipit
                    soluta minus repellat deleniti illo accusamus officiis
                    nostrum maiores quas voluptatum quia harum vel esse nulla
                    nemo corrupti assumenda, accusantium molestiae ducimus
                    magnam perspiciatis voluptates sint eum? Sequi laborum
                    cupiditate quasi inventore, modi et asperiores delectus,
                    molestias suscipit sint perspiciatis hic aspernatur aut
                    explicabo fugiat facere unde quod voluptatem, cumque fugit.
                    Architecto tempora nesciunt fugiat aliquid minus recusandae
                    labore maxime rem
                  </p>
                </div>
                <br />
              </div>
            </div>
          </div>
          {/* product list  */}
          <div>
            <div className="flex flex-col justify-center items-center gap-6 choose-text border-b-[1px] my-10 pb-5">
              <h1 className=" text-xl md:text-xl lg:text-2xl xl:text-3xl text-primary-matte-black text-center">
                PRODUCT CATEGORIES
              </h1>
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
          </div>
        </div>
        {/* Here is why CloudTailor is your perfect tailoring partner card section */}
        <div className="antialiased bg-gray-200 text-gray-900 font-sans p-10">
          <div className="flex flex-col justify-center items-center gap-6 choose-text py-5">
            <h1 className=" text-xl md:text-xl lg:text-2xl xl:text-3xl text-primary-matte-black text-center">
              Here is why CloudTailor is your perfect tailoring partner
            </h1>
          </div>
          <div className="container mx-auto">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4 ">
                <a
                  href
                  className="h-full c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden border-[1px] border-rose-400"
                >
                  <div className="relative p-10 ml-16 overflow-hidden">
                    <img
                      className="h-20 w-20 object-cover"
                      src="https://stores.cloudtailor.com/cloudtailors/images/best-designs.svg"
                      alt
                    />
                  </div>
                  <div className="px-4">
                    <h2 className=" text-center text-xl  font-bold">
                      Wide range of style options
                    </h2>
                    <p className="text-lg text-center py-10">
                      There is absolutely nothing that we cannot stitch. Name
                      the design or the style you want to stitch, and our
                      designers will help you get the desired results.
                    </p>
                  </div>
                </a>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
                <a
                  href
                  className="h-full c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden border-[1px] border-rose-400"
                >
                  <div className="relative p-10 ml-16 overflow-hidden">
                    <img
                      className="h-20 w-20 object-cover"
                      src="https://stores.cloudtailor.com/cloudtailors/images/designer.svg"
                      alt
                    />
                  </div>
                  <div className="px-4">
                    <h2 className=" text-center text-xl  font-bold">
                      Personal fashion designer
                    </h2>
                    <p className="text-lg text-center py-10">
                      With CloudTailor, you can get your personal fashion
                      designer for every order. Your designer will assist you
                      throughout the process of creating your dream outfit.
                    </p>
                  </div>
                </a>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
                <a
                  href
                  className="h-full c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden border-[1px] border-rose-400"
                >
                  <div className="relative p-10 ml-16 overflow-hidden">
                    <img
                      className="h-20 w-20 object-cover"
                      src="https://stores.cloudtailor.com/cloudtailors/images/online-measurements.svg"
                      alt
                    />
                  </div>
                  <div className="px-4">
                    <h2 className=" text-center text-xl  font-bold">
                      Online measurement
                    </h2>
                    <p className="text-lg text-center py-10">
                      We will schedule a video call with you & our designer for
                      hassle-free online measurements. In addition, we will be
                      happy to send our designer to your doorstep in particular
                      scenarios to get your measurements.
                    </p>
                  </div>
                </a>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
                <a
                  href
                  className="h-full c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden border-[1px] border-rose-400"
                >
                  <div className="relative p-10 ml-16 overflow-hidden">
                    <img
                      className="h-20 w-20 object-cover"
                      src="https://stores.cloudtailor.com/cloudtailors/images/stitch-anywhere.svg"
                      alt
                    />
                  </div>
                  <div className="px-4">
                    <h2 className=" text-center text-xl  font-bold">
                      Stitch anywhere, alter anywhere
                    </h2>
                    <p className="text-lg text-center py-10">
                      Your convenience is our priority. Getting your outfits
                      stitched and altered from any city is now possible with
                      CloudTailor. So, order a Patiyala from Hyderabad, and get
                      it stitched in Delhi. Similarly, get it altered in any
                      city.
                    </p>
                  </div>
                </a>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
                <a
                  href
                  className="h-full c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden border-[1px] border-rose-400"
                >
                  <div className="relative p-10 ml-16 overflow-hidden">
                    <img
                      className="h-20 w-20 object-cover"
                      src="https://stores.cloudtailor.com/cloudtailors/images/drop-facility.svg"
                      alt
                    />
                  </div>
                  <div className="px-4">
                    <h2 className=" text-center text-xl  font-bold">
                      Pick up & delivery
                    </h2>
                    <p className="text-lg text-center py-10">
                      We’ll pick up your garment from your address and deliver
                      the final product back to your doorstep.
                    </p>
                  </div>
                </a>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
                <a
                  href
                  className="h-full c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden border-[1px] border-rose-400"
                >
                  <div className="relative p-10 ml-16 overflow-hidden">
                    <img
                      className="h-20 w-20 object-cover"
                      src="https://stores.cloudtailor.com/cloudtailors/images/fabric.svg"
                      alt
                    />
                  </div>
                  <div className="px-4">
                    <h2 className=" text-center text-xl  font-bold">
                      Give your fabric / buy from us
                    </h2>
                    <p className="text-lg text-center py-10">
                      Your fabric, we stitch. Or you can buy fabric from our
                      Shop that has sellers from across India
                    </p>
                  </div>
                </a>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
                <a
                  href
                  className="h-full c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden border-[1px] border-rose-400"
                >
                  <div className="relative p-10 ml-16 overflow-hidden">
                    <img
                      className="h-20 w-20 object-cover"
                      src="https://stores.cloudtailor.com/cloudtailors/images/free-alterations.svg"
                      alt
                    />
                  </div>
                  <div className="px-4">
                    <h2 className=" text-center text-xl  font-bold">
                      Free lifetime alterations
                    </h2>
                    <p className="text-lg text-center py-10">
                      We create and ensure that the dress always fits you to
                      perfection. In addition, we provide free lifetime
                      alterations for any outfits stitched by us.
                    </p>
                  </div>
                </a>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
                <a
                  href
                  className="h-full c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden border-[1px] border-rose-400"
                >
                  <div className="relative p-10 ml-16 overflow-hidden">
                    <img
                      className="h-20 w-20 object-cover"
                      src="https://stores.cloudtailor.com/cloudtailors/images/live-tracking.svg"
                      alt
                    />
                  </div>
                  <div className="px-4">
                    <h2 className=" text-center text-xl  font-bold">
                      Live order tracking
                    </h2>
                    <p className="text-lg text-center py-10">
                      Live tracking ensures that you always know the status of
                      your outfit at every step.
                    </p>
                  </div>
                </a>
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

export default Tailorinfo;
