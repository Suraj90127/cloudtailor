import React from "react";
import Navbar from "../../navbar/Navbar";
import { Link } from "react-router-dom";
import Footer from "../../footer/Footer";

import Logom from "../../../image/Logom.jpeg";
import { AiFillCaretRight } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FcAddressBook } from "react-icons/fc";
import { FaBagShopping } from "react-icons/fa6";
import { BsGift } from "react-icons/bs";

const addresses = [
  {
    email: "surajsingh@gmail.com",
    name: "suraj",
    street: "11th Main",
    city: "dehli",
    pincode: 111111,
    state: "up",
    phone: 9902197249,
  },
  {
    email: "surajsingh3343@gmail.com",
    name: "jitendra",
    street: "12th Main",
    city: "Agra",
    pincode: 2222222,
    state: "mp",
    phone: 985987937892,
  },
];

const Profile = () => {
  return (
    <>
      <div>
        <Navbar />

        <div className="flex h-full bg-[#f9f8f3]">
          <div className="w-[30%] border-r-2 bg-white">
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
                <div className="flex text-blue-200 text-base">
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
          <div className=" p-10 w-[70%]">
            <div className="">
              <ol className="flex flex-row text-lg font-sans font-normal text-gray-500">
                <li>
                  <a href="">My Account</a>
                </li>
                <li>
                  <AiFillCaretRight className="mx-1 mt-2"></AiFillCaretRight>
                </li>
                <li>
                  <a href="">My Profile</a>
                </li>
              </ol>
            </div>
            <div className="w-[80%]">
              <form className="p-5 bg-white mt-5 rounded-lg">
                <div className="space-y-6">
                  <div className="border-b border-gray-900/10 pb-12">
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                      <div className="sm:col-span-4 md:col-span-6">
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          First name
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-4 md:col-span-6">
                        <label
                          htmlFor="last-name"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Last name
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-4 md:col-span-6">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Email address
                        </label>
                        <div className="mt-2">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-4 md:col-span-6">
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Phone
                        </label>
                        <div className="mt-2">
                          <input
                            id="phone"
                            name="phone"
                            type="phone"
                            autoComplete="phone"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      {/* 
                      <div className="sm:col-span-3">
                        <label
                          htmlFor="country"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Country
                        </label>
                        <div className="mt-2">
                          <select
                            id="country"
                            name="country"
                            autoComplete="country-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                          >
                            <option>United States</option>
                            <option>Canada</option>
                            <option>Mexico</option>
                          </select>
                        </div>
                      </div> */}

                      {/* <div className="col-span-full">
                        <label
                          htmlFor="street-address"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Street address
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="street-address"
                            id="street-address"
                            autoComplete="street-address"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div> */}

                      <div className="sm:col-span-4 md:col-span-6">
                        <label
                          htmlFor="city"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          City
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="city"
                            id="city"
                            autoComplete="address-level2"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-4 md:col-span-6">
                        <label
                          htmlFor="region"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Birth Date
                        </label>
                        <div className="mt-2">
                          <input
                            type="date"
                            name="birth-date"
                            id="birth-date"
                            autoComplete="birth-date"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-4 md:col-span-6">
                        <label
                          htmlFor="postal-code"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Anniversary date
                        </label>
                        <div className="mt-2">
                          <input
                            type="date"
                            name="anniversary-date"
                            id="anniversary-date"
                            autoComplete="anniversary-date"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-4 md:col-span-6">
                        <label
                          htmlFor="last-name"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Profile Picture
                        </label>
                        <div className="mt-2">
                          <input
                            type="file"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            // className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-4 md:col-span-6">
                        <label
                          htmlFor="last-name"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Referral code
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="referral-code"
                            id="referral-code"
                            autoComplete="referral-code"
                            placeholder="9Q34MP57LB"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      {/* <div className="border-b border-gray-900/10 pb-12">
                        <div className="mt-10 space-x-10">
                          <fieldset>
                            <legend className="text-sm font-semibold leading-6 text-gray-900">
                              Payment Methods
                            </legend>

                            <div className="mt-6 flex flex-row px-10">
                              <div className="flex items-center gap-x-3">
                                <input
                                  id="cash"
                                  name="payments"
                                  type="radio"
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label
                                  htmlFor="cash"
                                  className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                  Cash On Delacery
                                </label>
                              </div>
                              <div className="flex items-center gap-x-3">
                                <input
                                  id="card"
                                  name="payments"
                                  type="radio"
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label
                                  htmlFor="card"
                                  className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                  Card Payment
                                </label>
                              </div>
                              <div className="flex items-center gap-x-3">
                                <input
                                  id="paytm"
                                  name="payments"
                                  type="radio"
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label
                                  htmlFor="paytm"
                                  className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                  Paytm
                                </label>
                              </div>
                            </div>
                          </fieldset>
                        </div>
                      </div> */}

                      <div className="border-b border-gray-900/10 pb-12 ml-5">
                        <div className=" space-x-10">
                          <fieldset>
                            <legend className="text-sm font-semibold leading-6 text-gray-900">
                              Gender
                            </legend>
                            <div className="flex justify-center mt-5">
                              {/*First radio*/}
                              <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
                                <input
                                  className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  defaultValue="option1"
                                />
                                <label
                                  className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                                  htmlFor="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              {/*Second radio*/}
                              <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
                                <input
                                  className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  defaultValue="option2"
                                />
                                <label
                                  className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                                  htmlFor="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                              {/*Third radio (disabled)*/}
                              <div className="mb-[0.125rem] inline-block min-h-[1.5rem] pl-[1.5rem]">
                                <input
                                  className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] disabled:opacity-60 dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio3"
                                  defaultValue="option3"
                                />
                                <label
                                  className="mt-px inline-block pl-[0.15rem] opacity-50 hover:pointer-events-none"
                                  htmlFor="inlineRadio3"
                                >
                                  {" "}
                                  Other
                                </label>
                              </div>
                            </div>
                          </fieldset>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button
                      type="button"
                      className="text-sm font-semibold leading-6 text-gray-900"
                    >
                      Reset
                    </button>
                    <button
                      type="submit"
                      className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Profile;
