import React from "react";
import Tnavbar from "./Tnavbar";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import Subfooter from "../ourstore/Subfooter";

import { PiTrafficSignBold } from "react-icons/pi";
import { BsShareFill } from "react-icons/bs";
import { IoIosCall } from "react-icons/io";
import { MdOutlineWatchLater } from "react-icons/md";

import { AiFillStar } from "react-icons/ai";

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

const ContactUs = () => {
  return (
    <>
      <div>
        <Tnavbar />
        <div className="mx-10">
          <div className="sm:col-span-2 sm:col-start-1 mt-10 ">
            <div class="w-[100%] bg-gray-100 text-[#492267] font-medium py-3 px-5 rounded flex">
              <h1>Home</h1>
              <span className="mx-2">/</span>
              <a href="">Contact Us</a>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-6 choose-text my-10">
            <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-primary-matte-black text-center">
              <span className="text-[#492267] font-semibold">
                {" "}
                Get In Touch
              </span>
            </h1>
          </div>
        </div>

        <div className=" flex lg:flex-row md:flex-row sm:flex-col mx-10 ">
          {TailorData.map((tdata) => (
            <div className=" sm:w-full md:w-[48%] lg:w-[48%] md:h-auto border-[1px] md:ml-5 mb-10">
              <div className="bg-black py-2 text-white text-center">
                <h1 className="text-2xl font-semibold">Addresses</h1>
              </div>
              <div className="mx-auto pb-5 max-w-full border-b-[1px]">
                <div className="mb-4 overflow-hidden rounded">
                  <div className="border-b-[1px] py-3 bg-gray-100 px-10">
                    <div className="flex justify-between">
                      {/* <PiTrafficSignBold className="text-xl m-1"></PiTrafficSignBold> */}
                      <a href="">
                        <h1 className="text-xl text-[#a549eb]">{tdata.name}</h1>
                      </a>
                      <Link to="">
                        <BsShareFill className=" sm:ml-32 mt-1 text-xl text-[#a549eb]"></BsShareFill>
                      </Link>
                    </div>
                    <p className=" text-lg text-[#a549eb]">{tdata.state}</p>
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

              <div className="flex flex-col mx-5">
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
                  <span className="mt-10 ml-2"> ADD TO YOUR CONTACTS</span>
                  <samp className="mt-8 lg:ml-32 md:ml-0 sm:ml-0">
                    <img
                      src="https://stores.cloudtailor.com/cloudtailors/images/address-icon.png"
                      alt=""
                    />
                  </samp>
                </div>
              </div>
            </div>
          ))}
          <div className=" w-full md:w-[48%] lg:w-[48%] md:h-auto border-[1px] md:ml-5 mb-10">
            <div className="bg-black py-2 text-white text-center">
              <h1 className="text-2xl font-semibold">Submit Your Query</h1>
            </div>
            <div className="m-10  max-w-full">
              <form>
                <div className="mb-6">
                  <input
                    type="text"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter Your Name"
                    required
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="number"
                    id="phone"
                    placeholder="Enter your Mobile no."
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your Email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <textarea
                    id="message"
                    rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter Your Message"
                  ></textarea>
                </div>
                <div className="flex items-start mb-6 mt-5">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      defaultValue
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      required
                    />
                  </div>

                  <label
                    htmlFor="remember"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    I have read and accept the{" "}
                    <span>
                      <a href="#">privacy policy. </a>
                    </span>
                  </label>
                </div>
                <button
                  type="submit"
                  className=" w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div>
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
      </div>
    </>
  );
};

export default ContactUs;
