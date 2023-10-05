import React, { useRef, useState } from "react";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import { Link } from "react-router-dom";
import { Carousel } from "@material-tailwind/react";

import { NavLink } from "react-router-dom";
import Logom from "../../../image/Logom.jpeg";
import { AiFillCaretRight } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FcAddressBook } from "react-icons/fc";
import { FaBagShopping } from "react-icons/fa6";
import { BsGift } from "react-icons/bs";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { FreeMode, Autoplay, Pagination } from "swiper/modules";

const Tag = [
  {
    name: "Cloud Tailor",
    href: "https://cloudtailor-cdn.s3.ap-south-1.amazonaws.com/giftcards/gift_card_anniversary.png",
  },
  { name: "Anniversary" },
  { name: "Motherday " },
  { name: "birthday" },
  { name: "Christmas" },
  { name: "Dhanteras" },
  { name: "Diwali" },
  { name: "Holi" },
  { name: "New Year" },
  { name: "Pongal" },
  { name: "Promotion" },
];

const Giftcrd = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="flex h-[40rem]">
          <div className="w-[30%] border-r-2 ">
            <div className="sm:hidden md:hidden lg:block text-sm font-medium text-gray-900 bg-white   rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white mx-10">
              <div className="flex flex-row py-10">
                <img src={Logom} alt="" className="w-20 h-20 rounded-full" />
                <span className="my-2 mx-5 text-base text-blue-400">
                  <h1 className="py-1">suraj singh</h1>
                  <p>+91 7983247157</p>
                </span>
              </div>

              <Link
                to="/giftcard/profile"
                className=" text-primary-gray-black py-2 px-4 my-2 rounded-full flex justify-between bg-white items-center  border-[1px] border-primary-gray-blacks"
              >
                <div className="flex text-gray-400 text-base">
                  <span>
                    <CgProfile className="m-1 text-lg"></CgProfile>
                  </span>
                  <p> Profile</p>
                </div>

                <div>
                  <AiFillCaretRight></AiFillCaretRight>
                </div>
              </Link>
              <Link
                to="/giftcard/my-address"
                className=" text-primary-gray-black py-2 px-4 my-2 rounded-full flex justify-between bg-white items-center  border-[1px] border-primary-gray-blacks"
              >
                <div className="flex text-gray-400 text-base">
                  <span>
                    <FcAddressBook className="m-1 text-lg"></FcAddressBook>
                  </span>
                  <p> My Addresses</p>
                </div>

                <div>
                  <AiFillCaretRight></AiFillCaretRight>
                </div>
              </Link>
              <Link
                to="/giftcard/my-order"
                className=" text-primary-gray-black py-2 px-4 my-2 rounded-full flex justify-between bg-white items-center  border-[1px] border-primary-gray-blacks"
              >
                <div className="flex text-gray-400 text-base">
                  <span>
                    <FaBagShopping className="m-1 text-lg"></FaBagShopping>
                  </span>
                  <p> My Orders</p>
                </div>

                <div>
                  <AiFillCaretRight></AiFillCaretRight>
                </div>
              </Link>
              <Link
                to="/giftcard"
                aria-current="true"
                className=" text-primary-gray-black py-2 px-4 my-2 rounded-full flex justify-between bg-white items-center  border-[1px] border-primary-gray-blacks"
              >
                <div className="flex text-blue-200 text-base">
                  <span>
                    <BsGift className="m-1 text-lg"></BsGift>
                  </span>
                  <p> Gift Card</p>
                </div>

                <div>
                  <AiFillCaretRight></AiFillCaretRight>
                </div>
              </Link>
            </div>
          </div>
          <div className="bg-gray-200 p-10 lg:w-[70%] sm:after:items-start ">
            <div className="">
              <ol className="flex flex-row text-lg font-sans font-normal text-gray-500">
                <li>
                  <a href="">My Account</a>
                </li>
                <li>
                  <AiFillCaretRight className="mx-1 mt-2"></AiFillCaretRight>
                </li>
                <li>
                  <a href="">Gift Cards</a>
                </li>
              </ol>
            </div>
            <div>
              <div className="flex flex-row">
                <div className="w-[70%] pt-5">
                  <h1 className="text-xl font-semibold font-sans sans-serif">
                    Say It With Our Gift Cards
                  </h1>
                  <p className="my-3 text-gray-500">
                    Wish your loved ones by sending Cloud Tailor gift cards...
                  </p>
                  <div className="flex flex-row mt-7 flex-wrap ">
                    {Tag.map((t) => (
                      <a
                        href=""
                        className="border-[1px] border-gray-950	py-2 px-4 rounded-full m-3"
                      >
                        {t.name}
                      </a>
                    ))}
                  </div>
                  <div className=" mr-5">
                    <Swiper
                      slidesPerView={3}
                      spaceBetween={30}
                      freeMode={true}
                      pagination={{
                        clickable: true,
                      }}
                      loop={true}
                      centeredSlides={true}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      modules={[FreeMode, Autoplay, Pagination]}
                      className="mySwiper"
                    >
                      <SwiperSlide>
                        <img
                          src="https://cloudtailor-cdn.s3.ap-south-1.amazonaws.com/giftcards/gift_card_anniversary.png"
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src="https://cloudtailor-cdn.s3.ap-south-1.amazonaws.com/giftcards/gift_card_mom.png"
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src="https://cloudtailor-cdn.s3.ap-south-1.amazonaws.com/giftcards/gift_card_promotion.png"
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src="https://cloudtailor-cdn.s3.ap-south-1.amazonaws.com/giftcards/gift_card_ct.png"
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src="https://cloudtailor-cdn.s3.ap-south-1.amazonaws.com/giftcards/gift_card_birthday.png"
                          alt=""
                        />
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>

                <div className="w-[30%] border-l-2 border-[#B59410] pl-5">
                  <h1 className="text-xl font-semibold font-sans sans-serif">
                    Check balance
                  </h1>
                  <p className="my-3 text-gray-500">Card details</p>
                  <form action="submit">
                    <input
                      type="text"
                      className="rounded-full bg-transparent w-60"
                      placeholder="Card Number"
                      required
                    />
                    <input
                      type="text"
                      className="rounded-full bg-transparent w-60 my-5"
                      placeholder="Card Number"
                      required
                    />
                    <button
                      className="rounded-full py-2 text-white w-60 bg-blue-700"
                      type="submit"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Giftcrd;
