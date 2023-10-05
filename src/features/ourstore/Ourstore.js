import React, { useEffect, useState, Children, Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ShoppingCartIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Logom from "../../image/Logom.jpeg";
import { Link, useNavigate } from "react-router-dom";
import Selector from "./Selector";
import { City, Country, State } from "country-state-city";
import { FaLocationDot } from "react-icons/fa6";
import { PiTrafficSignBold } from "react-icons/pi";
import { BsShareFill } from "react-icons/bs";
import { IoIosCall } from "react-icons/io";
import { MdOutlineWatchLater } from "react-icons/md";
import "./style.css";

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
  {
    name: "CloudTailor suraj Sati",
    state: "Hyderabad",
    city: "hhhhhh",
    address:
      "MIG 349 & 350, Balaji Nagar Main Road, Kukatpally Housing Board Colony, Kukatpally, Hyderabad, Telangana",
    pincode: 111111,
    phone: 9902197220,
    time: "11:00 AM to 08:00 PM",
    href: "",
  },
  {
    name: "CloudTailor suraj Sati",
    state: "Hyderabad",
    city: "hhhhhh",
    address:
      "MIG 349 & 350, Balaji Nagar Main Road, Kukatpally Housing Board Colony, Kukatpally, Hyderabad, Telangana",
    pincode: 111111,
    phone: 9902197220,
    time: "11:00 AM to 08:00 PM",
    href: "",
  },
  {
    name: "CloudTailor suraj Sati",
    state: "Hyderabad",
    city: "hhhhhh",
    address:
      "MIG 349 & 350, Balaji Nagar Main Road, Kukatpally Housing Board Colony, Kukatpally, Hyderabad, Telangana",
    pincode: 111111,
    phone: 9902197220,
    time: "11:00 AM to 08:00 PM",
    href: "",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Ourstore = ({ children }) => {
  const navigate = useNavigate();

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

  return (
    <>
      <div>
        <div className="postito min-h-full">
          <Disclosure as="nav" className="bg-slate-300 ">
            {({ open }) => (
              <>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <img
                          className="h-12 w-12  rounded-full"
                          src={Logom}
                          alt="Your Company"
                        />
                      </div>
                      <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4"></div>
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-4 flex items-center md:ml-6">
                        <Link to="/cart">
                          <button
                            type="button"
                            className="mr-10 relative rounded-lg bg-blue-400 p-2 text-white hover:bg-yellow-100 hover:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                          >
                            {/* <span className="absolute -inset-1.5" /> */}
                            <span>Contact: +91 9720 902 763</span>
                          </button>
                        </Link>

                        {/* Profile dropdown */}
                        <Link to="/cart">
                          <button
                            type="button"
                            className="px-3 relative rounded-lg bg-blue-400 p-2 text-white hover:bg-yellow-100 hover:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                          >
                            {/* <span className="absolute -inset-1.5" /> */}
                            <span>Blogs</span>
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                      {/* Mobile menu button */}
                      <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XMarkIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <Bars3Icon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className="md:hidden">
                  <div className="border-t border-gray-700 pb-3 pt-4">
                    <div className="flex items-center px-5">
                      <Link to="/cart">
                        <button
                          type="button"
                          className="px-3 relative rounded-lg bg-blue-400 p-2 text-white hover:bg-yellow-100 hover:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                          {/* <span className="absolute -inset-1.5" /> */}
                          <span>Contact: +91 9720 902 763</span>
                        </button>
                      </Link>
                    </div>
                    <div className="mt-3 space-y-1 px-5">
                      <Link to="/cart">
                        <button
                          type="button"
                          className="px-3 relative rounded-lg bg-blue-400 p-2 text-white hover:bg-yellow-100 hover:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                          <span className="absolute -inset-1.5" />
                          <span>Blogs</span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <main>
            <div className="mx-auto sm:px-6">{children}</div>
          </main>
        </div>
        <div>
          <img
            src="https://static.locowiz.com/locomedia/cloud-tailor/banner/1685593561.png"
            alt="https://static.locowiz.com/locomedia/cloud-tailor/banner/1685593561.png"
          />
        </div>
        <form className="p-5 bg-gray-100 lg:mx-10 mt-12 rounded-lg">
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-2xl font-semibold leading-7 text-gray-900">
                Find Our Fashion Centres
              </h2>

              <div className="sm:col-span-2 sm:col-start-1 mt-5">
                <button class="w-[100%] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Use My Current Location
                </button>
              </div>
              <div className="sm:col-span-2 sm:col-start-1 w-full mt-5">
                <h1 className="w-full text-center">
                  <span className="flex justify-center text-xl font-semibold">
                    --OR--
                  </span>
                </h1>
              </div>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-2 sm:col-start-1">
                  {state && (
                    <div className="w-full mr-2">
                      <p className="text-teal-800 font-semibold">State :</p>
                      <Selector
                        data={stateData}
                        selected={state}
                        setSelected={setState}
                      />
                    </div>
                  )}
                </div>

                <div className="sm:col-span-2">
                  {city && (
                    <div className="mx-2">
                      <p className="text-teal-800 font-semibold">City :</p>
                      <Selector
                        data={cityData}
                        selected={city}
                        setSelected={setCity}
                      />
                    </div>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <div className="mx-5 mt-1">
                    <p className="text-teal-800 font-semibold">Radius :</p>
                    <select
                      id="fndeep"
                      name="fndeep"
                      autoComplete=""
                      className="w-full block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <option>Select Radius</option>
                      <option value="50">50 Kms</option>
                      <option value="30">30 Kms</option>
                      <option value="10">10 Kms</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="mt-10 flex md:items-center md:justify-end gap-x-6">
                <button
                  type="submit"
                  className="rounded-md w-[100%] bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Search
                </button>
                <div className=" w-1/2 border-b-2 border-dashed border-neutral-950 lg:mx-10">
                  <p className="text-center font-semibold">34 Storage</p>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div>
          {/* Fashion Centres Close to You  */}

          <div className="my-12 mt-5 mx-10 ">
            <h2 className="lg:w-full md:w-[100%] sm:w-1/2 text-center text-3xl bg-[#492267] hover:bg-blue-700 text-white font-semibold tracking-wide py-2 rounded">
              Fashion Centres Close to You
            </h2>
          </div>
        </div>
        {/* tailor data  */}

        <section class=" lg:pt-[30px] lg:pb-10 mx-5">
          <div className="flex flex-col items-center justify-center w-full lg:px-10 xl:px-20 gap-4 md:gap-6 lg:gap-8"></div>
          <div class="container mx-auto">
            <div class=" flex flex-wrap">
              {TailorData.map((tdata) => (
                <div class=" w-full md:w-[48%] lg:w-[48%] md:h-80 border-[1px] md:ml-5 mb-10">
                  <div class="mx-auto pb-5 max-w-full border-b-[1px]">
                    <div class="mb-4 overflow-hidden rounded">
                      <div className="border-b-[1px] py-3 bg-gray-100 px-10">
                        <div className="flex">
                          <PiTrafficSignBold className="text-xl m-1"></PiTrafficSignBold>
                          <a href="">
                            <h1 className="text-xl text-[#a549eb]">
                              {tdata.name}
                            </h1>
                          </a>
                          <Link to="">
                            <BsShareFill className=" sm:ml-32 mt-1 text-xl text-[#a549eb]"></BsShareFill>
                          </Link>
                        </div>
                        <p className="ml-7 text-lg text-[#a549eb]">
                          {tdata.state}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p class="text-body-color text-base px-10">
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
                  <div className="flex flex-row mx-10">
                    <div>
                      <a href="/tailorinfo">
                        <button className="lg:w-60 md:w-52 bg-[#492267] hover:bg-yellow-200 hover:text-black text-white font-normal py-1 px-4 rounded ">
                          <span className="m-1">
                            <ion-icon name="globe-outline"></ion-icon>
                          </span>
                          Website
                        </button>
                      </a>
                    </div>
                    <div className="ml-5">
                      <a href="">
                        <button className="lg:w-60 md:w-52 bg-black hover:bg-yellow-200 hover:text-black text-white font-normal py-1 px-4 rounded ">
                          <span className="m-1">
                            <ion-icon name="compass-outline"></ion-icon>
                          </span>
                          Get Direaction
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Ourstore;
