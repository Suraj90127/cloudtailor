import React, { useState } from "react";
import Tnavbar from "../Tnavbar";
import { Link } from "react-router-dom";
import Footer from "../../footer/Footer";
import Subfooter from "../../ourstore/Subfooter";

import FAQ from "./FAQ";
import "./style.css";

import { AiFillCaretRight } from "react-icons/ai";

import { CiViewList } from "react-icons/ci";
import { AiOutlinePlusCircle } from "react-icons/ai";

const Faqs = () => {
  const [faqs, setfaqs] = useState([
    {
      question: "How many programmers does it take to screw in a lightbulb?",
      answer: "None. We don't address hardware issues.",
      open: false,
    },
    {
      question: "Who is the most awesome person?",
      answer: "You. The Viewer.",
      open: false,
    },
    {
      question:
        "How many questions does it take to make a successful FAQ Page?",
      answer: "This many.",
      open: false,
    },
    {
      question:
        "How many questions does it take to make a successful FAQ Page?",
      answer: "This many.",
      open: false,
    },
    {
      question:
        "How many questions does it take to make a successful FAQ Page?",
      answer: "This many.",
      open: false,
    },
    {
      question:
        "How many questions does it take to make a successful FAQ Page?",
      answer: "This many.",
      open: false,
    },
    {
      question:
        "How many questions does it take to make a successful FAQ Page?",
      answer: "This many.",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    //console.log("toggled - nr:" + index);
    setfaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };

  return (
    <>
      <div>
        <Tnavbar />
        <div>
          <div className="sm:col-span-2 sm:col-start-1 m-10 ">
            <div class="w-[100%] bg-gray-100 text-[#492267] font-medium py-3 px-5 rounded flex">
              <h1>Home</h1>
              <span className="mx-2">/</span>
              <a href="">FAQs</a>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-6 choose-text my-10">
            <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-primary-matte-black text-center">
              <span className="text-[#492267] "> CloudTailor Dholi Sati -</span>
              <span className="text-[#cbbf81]">FAQs</span>
            </h1>
          </div>
        </div>
        <div className="flex h-full">
          <div className="w-[30%]">
            <div className="sm:hidden md:hidden lg:block text-sm font-medium text-gray-900 bg-white   rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white mx-10">
              <Link
                to="/faqs"
                className=" text-primary-gray-black py-2 px-4  flex justify-between bg-white items-center  border-[1px] border-primary-gray-blacks"
              >
                <div className="flex text-blue-200 text-base">
                  <span>
                    <CiViewList className="m-1 text-lg"></CiViewList>
                  </span>
                  <p> ABOUT CLOUDTAILOR (8)</p>
                </div>

                <div>
                  <AiFillCaretRight></AiFillCaretRight>
                </div>
              </Link>
              <Link
                to="/giftcard/my-address"
                className=" text-primary-gray-black py-2 px-4 flex justify-between bg-white items-center  border-[1px] border-primary-gray-blacks"
              >
                <div className="flex text-gray-400 text-base">
                  <span>
                    <CiViewList className="m-1 text-lg"></CiViewList>
                  </span>
                  <p>ORDERS (18)</p>
                </div>

                <div>
                  <AiFillCaretRight></AiFillCaretRight>
                </div>
              </Link>
              <Link
                to="/giftcard/my-order"
                className=" text-primary-gray-black py-2 px-4 flex justify-between bg-white items-center  border-[1px] border-primary-gray-blacks"
              >
                <div className="flex text-gray-400 text-base">
                  <span>
                    <CiViewList className="m-1 text-lg"></CiViewList>
                  </span>
                  <p>SHIPPING AND DELIVERY (8)</p>
                </div>

                <div>
                  <AiFillCaretRight></AiFillCaretRight>
                </div>
              </Link>
              <Link
                to="/giftcard"
                aria-current="true"
                className=" text-primary-gray-black py-2 px-4  flex justify-between bg-white items-center  border-[1px] border-primary-gray-blacks"
              >
                <div className="flex ">
                  <span>
                    <CiViewList className="m-1 text-lg"></CiViewList>
                  </span>
                  <p>RETURNS AND REFUNDS (6)</p>
                </div>

                <div>
                  <AiFillCaretRight></AiFillCaretRight>
                </div>
              </Link>
            </div>
            <div className="sm:hidden md:hidden lg:block text-sm font-medium text-gray-900 bg-white   rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white mx-10">
              <Link
                to="/giftcard/profile"
                className=" text-primary-gray-black py-2 px-4  flex justify-between bg-white items-center  border-[1px] border-primary-gray-blacks"
              >
                <div className="flex text-blue-200 text-base">
                  <span>
                    <CiViewList className="m-1 text-lg"></CiViewList>
                  </span>
                  <p> PAYMENTS (11)</p>
                </div>

                <div>
                  <AiFillCaretRight></AiFillCaretRight>
                </div>
              </Link>
              <Link
                to="/giftcard/my-address"
                className=" text-primary-gray-black py-2 px-4 flex justify-between bg-white items-center  border-[1px] border-primary-gray-blacks"
              >
                <div className="flex text-gray-400 text-base">
                  <span>
                    <CiViewList className="m-1 text-lg"></CiViewList>
                  </span>
                  <p>YOUR ACCOUNT (8)</p>
                </div>

                <div>
                  <AiFillCaretRight></AiFillCaretRight>
                </div>
              </Link>
              <Link
                to="/giftcard/my-order"
                className=" text-primary-gray-black py-2 px-4 flex justify-between bg-white items-center  border-[1px] border-primary-gray-blacks"
              >
                <div className="flex text-gray-400 text-base">
                  <span>
                    <CiViewList className="m-1 text-lg"></CiViewList>
                  </span>
                  <p>OUTFITS (8)</p>
                </div>

                <div>
                  <AiFillCaretRight></AiFillCaretRight>
                </div>
              </Link>
              <Link
                to="/giftcard"
                aria-current="true"
                className=" text-primary-gray-black py-2 px-4  flex justify-between bg-white items-center  border-[1px] border-primary-gray-blacks"
              >
                <div className="flex ">
                  <span>
                    <CiViewList className="m-1 text-lg"></CiViewList>
                  </span>
                  <p>SKIRTS (5)</p>
                </div>

                <div>
                  <AiFillCaretRight></AiFillCaretRight>
                </div>
              </Link>
            </div>
          </div>
          <div className="w-[70%]">
            <div className="">
              <ol className="flex flex-row text-lg font-sans font-normal text-gray-500">
                <li className="text-2xl text-purple-500 font-semibold">
                  <a href="">CloudTailor 2022</a>
                </li>
              </ol>
            </div>
            <div className="w-[80%]">
              <div className="App">
                {/* <Header title="Meine FAQ!" /> */}
                <div className="faqs">
                  {faqs.map((faq, i) => {
                    //console.log("i: " + i);
                    return (
                      <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} key={i} />
                    );
                  })}
                </div>
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

export default Faqs;
