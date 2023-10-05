import React from "react";
import Navbar from "../../navbar/Navbar";
import { Link } from "react-router-dom";
import Footer from "../../footer/Footer";
import list from "../../../image/list.gif";

import Logom from "../../../image/Logom.jpeg";
import { AiFillCaretRight } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FcAddressBook } from "react-icons/fc";
import { FaBagShopping } from "react-icons/fa6";
import { BsGift } from "react-icons/bs";

const MyOder = () => {
  return (
    <>
      <div>
        <Navbar />

        <div className="flex h-full sm:w-full md:w-full bg-[#f9f8f3]">
          <div className="lg:w-[30%] sm:hidden md:hidden lg:block border-r-2 bg-white">
            <div className=" text-sm font-medium text-gray-900 bg-white   rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white mx-10">
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
                <div className="flex text-blue-200  text-base">
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
                <div className="flex text-gray-400 text-base">
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
          <div className=" p-10 lg:w-[70%] md:w-[100%] sm:[100%]">
            <div className="">
              <ol className="flex flex-row text-lg font-sans font-normal text-gray-500">
                <li>
                  <a href="">My Account</a>
                </li>
                <li>
                  <AiFillCaretRight className="mx-1 mt-2"></AiFillCaretRight>
                </li>
                <li>
                  <a href="">My Orders</a>
                </li>
              </ol>
            </div>
            <div className="lg:w-[100%] md:[100%] sm:[100%]">
              <div className="p-5 py-20 bg-white mt-5 rounded-lg  ">
                <div>
                  <img src={list} alt="" className="ml-52 w-60 h-60" />
                </div>
                <div className="flex text-center lg:ml-60 md:ml-40 sm:ml-20">
                  <h1 className="text-xl text-gray-400">No Orders Yet</h1>
                </div>
                <div className="flex text-center lg:ml-56 md:ml-40 sm:ml-20 mt-10">
                  {" "}
                  <Link to="/">
                    <button className="bg-blue-600 py-3 rounded-full text-white text-xl px-5">
                      Place Order now
                    </button>
                  </Link>
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

export default MyOder;
