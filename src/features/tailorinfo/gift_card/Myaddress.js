import React, { useEffect, useState } from "react";
import Navbar from "../../navbar/Navbar";
import { Link } from "react-router-dom";
import Footer from "../../footer/Footer";
import Selector from "../../ourstore/Selector";
import { City, Country, State } from "country-state-city";

import Logom from "../../../image/Logom.jpeg";
import { AiFillCaretRight } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FcAddressBook } from "react-icons/fc";
import { FaBagShopping } from "react-icons/fa6";
import { BsGift } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";

const Myaddress = () => {
  let countryData = Country.getAllCountries();
  const [stateData, setStateData] = useState();
  const [cityData, setCityData] = useState();

  const [country, setCountry] = useState(countryData[100]);
  const [state, setState] = useState();
  const [city, setCity] = useState();

  useEffect(() => {
    setStateData(State.getStatesOfCountry(country?.isoCode));
  }, [country]);

  useEffect(() => {
    setCityData(City.getCitiesOfState(country?.isoCode, state?.isoCode));
  }, [state]);

  useEffect(() => {
    stateData && setState(stateData[0]);
  }, [stateData]);

  useEffect(() => {
    cityData && setCity(cityData[0]);
  }, [cityData]);

  const [showModal, setShowModal] = React.useState(false);
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
                <div className="flex text-blue-200  text-base">
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
                  <a href="">My Addressess</a>
                </li>
              </ol>
            </div>

            <div className="w-[80%] h-[40rem]">
              <div className="mt-10">
                <button
                  className="bg-white text-gray-400 text-2xl font-bold active:white  uppercase px-14 py-10 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(true)}
                >
                  <BiPlus className="ml-20 text-3xl"></BiPlus>
                  <p className="mt-5">Add Adresses</p>
                </button>
                {showModal ? (
                  <>
                    <div className="mt-16 z-50 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none">
                      <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {/*content*/}
                        <div className="border-0 mt-[30rem] rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                          {/*header*/}
                          <div className="flex items-start justify-between p-5 text-black border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold text-black">
                              Add address
                            </h3>
                            <button
                              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                              onClick={() => setShowModal(false)}
                            >
                              <span className="bg-transparent text-gray-500 h-10 w-10 text-4xl block outline-none focus:outline-none">
                                ×
                              </span>
                            </button>
                          </div>
                          {/*body*/}
                          <div className="relative px-6 flex-auto">
                            <div className="">
                              <form className="px-5 bg-white rounded-lg">
                                <div className="space-y-1">
                                  <div className=" border-gray-900/10">
                                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                      <div className="sm:col-span-4 md:col-span-6">
                                        <label
                                          htmlFor="first-name"
                                          className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                          Tag
                                        </label>
                                        <div className="mt-2">
                                          <input
                                            type="text"
                                            name="tag"
                                            id="tag"
                                            autoComplete="tag"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                          />
                                        </div>
                                      </div>

                                      <div className="sm:col-span-4 md:col-span-6">
                                        <label
                                          htmlFor="last-name"
                                          className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                          Street address 1
                                        </label>
                                        <div className="mt-1">
                                          <input
                                            type="text"
                                            name="adress1"
                                            id="address1"
                                            autoComplete="address"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                          />
                                        </div>
                                      </div>

                                      <div className="sm:col-span-4 md:col-span-6">
                                        <label
                                          htmlFor="email"
                                          className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                          Street address 2
                                        </label>
                                        <div className="mt-2">
                                          <input
                                            id="address2"
                                            name="address"
                                            type="text"
                                            autoComplete="address"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                          />
                                        </div>
                                      </div>
                                      <div className="sm:col-span-4 md:col-span-6">
                                        <label
                                          htmlFor="phone"
                                          className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                          Landmark
                                        </label>
                                        <div className="mt-1">
                                          <input
                                            id="landmark"
                                            name="landmark"
                                            type="text"
                                            autoComplete="phone"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                          />
                                        </div>
                                      </div>

                                      <div className="sm:col-span-3">
                                        {country && (
                                          <div className="w-full mr-2">
                                            <p className="text-teal-800 font-semibold">
                                              Country :
                                            </p>
                                            <Selector
                                              data={countryData}
                                              selected={country}
                                              setSelected={setCountry}
                                            />
                                          </div>
                                        )}
                                      </div>

                                      <div className="sm:col-span-2 md:col-span-3">
                                        {state && (
                                          <div className="w-full mr-2">
                                            <p className="text-teal-800 font-semibold">
                                              State :
                                            </p>
                                            <Selector
                                              data={stateData}
                                              selected={state}
                                              setSelected={setState}
                                            />
                                          </div>
                                        )}
                                      </div>
                                      <div className="sm:col-span-2 sm:col-start-1 md:col-span-3 z-0">
                                        {city && (
                                          <div className="">
                                            <p className="text-teal-800 font-semibold">
                                              City :
                                            </p>
                                            <Selector
                                              data={cityData}
                                              selected={city}
                                              setSelected={setCity}
                                            />
                                          </div>
                                        )}
                                      </div>

                                      <div className="sm:col-span-2 md:col-span-3">
                                        <label
                                          htmlFor="postal-code"
                                          className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                          ZIP / Postal code
                                        </label>
                                        <div className="mt-2">
                                          <input
                                            type="text"
                                            name="postal-code"
                                            id="postal-code"
                                            autoComplete="postal-code"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                          {/*footer*/}
                          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            <button
                              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => setShowModal(false)}
                            >
                              Close
                            </button>
                            <button
                              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => setShowModal(false)}
                            >
                              Save Changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Myaddress;
