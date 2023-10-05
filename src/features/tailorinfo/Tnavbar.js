import React from "react";
import { Children } from "react";
import { Disclosure } from "@headlessui/react";
// import { AiFillCheckCircle } from "react-icons/ai";
// import Footer from "../footer/Footer";
// import Subfooter from "../ourstore/Subfooter";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import Logom from "../../image/Logom.jpeg";
// import { Link, useNavigate } from "react-router-dom";
// import { CgProfile } from "react-icons/cg";

// import { PiTrafficSignBold } from "react-icons/pi";
// import { BsShareFill } from "react-icons/bs";
// import { IoIosCall } from "react-icons/io";
// import { MdOutlineWatchLater } from "react-icons/md";

import { AiFillStar } from "react-icons/ai";

const navigation = [
  { name: "Home", href: "/tailorinfo", current: true },
  { name: "Gift Cards", href: "/giftcard", current: false },
  { name: "Gallery", href: "/gallery", current: false },
  { name: "FAQs", href: "/faqs", current: false },
  { name: "Map", href: "/map", current: false },
  { name: "Contact Us", href: "/contactus", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Tnavbar = ({ children }) => {
  return (
    <>
      <div className="postito min-h-full">
        <Disclosure as="nav" className="bg-white shadow-lg ">
          {({ open }) => (
            <>
              <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex w-full items-center justify-between">
                    <div className="flex-shrink-0">
                      <img
                        className="h-12 w-12  rounded-full"
                        src={Logom}
                        alt="Your Company"
                      />
                    </div>
                    <div className="hidden md:block ">
                      <div className="flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                            // aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="-mr-2 flex md:hidden">
                    {/* * Mobile menu button * */}
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

              <Disclosure.Panel className="md:hidden bg-yellow-50">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3 text-center">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? " text-black text-center"
                          : "text-black hover:bg-gray-700 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4"></div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <main>
          <div className="mx-auto sm:px-6">{children}</div>
        </main>
      </div>
    </>
  );
};

export default Tnavbar;
