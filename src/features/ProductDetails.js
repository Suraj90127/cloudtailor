import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";

const product = {
  name: "Blouse",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://ct-product-assets.s3.ap-south-1.amazonaws.com/blouse-princesscut-0-340.webp",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://ct-product-assets.s3.ap-south-1.amazonaws.com/blouse-katori-1-720.webp",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://ct-product-assets.s3.ap-south-1.amazonaws.com/blouse-katori-2-720.webp",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://ct-product-assets.s3.ap-south-1.amazonaws.com/blouse-transparent.png",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  zips: [
    { name: "Back Open", class: "bg-white", selectedClass: "ring-gray-400" },
    {
      name: "Frant Open",
      class: "bg-gray-200",
      selectedClass: "ring-gray-400",
    },
    { name: "Szide Zip", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  productSize: [
    { size: "16", inStock: true },
    { size: "18", inStock: true },
    { size: "20", inStock: true },
    { size: "22", inStock: true },
    { size: "24", inStock: true },
    { size: "26", inStock: true },
    { size: "28", inStock: true },
    { size: "30", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {
  // const [selectedZip, setSelectedZip] = useState(product.colors[0]);
  // const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={product.images[0].src}
              alt={product.images[0].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={product.images[1].src}
                alt={product.images[1].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={product.images[2].src}
                alt={product.images[2].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              src={product.images[3].src}
              alt={product.images[3].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Product info */}
        <form action="">
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {product.name}
              </h1>
              <div className="sm:col-span-3 lg:col-span-3 w-full border-2 mt-10 p-5 rounded-lg bg-gray-200">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-900 py-5"
                >
                  Blouse Mesument
                </label>
                {/* dropdun option */}
                <div className="flex flex-row mb-10">
                  <div className="mx-5 mt-2">
                    <select
                      id="flenth"
                      name="flenth"
                      autoComplete="frent-lenth"
                      className="w-36 block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <option>FRANT LENTH</option>
                      {product.productSize.map((f) => (
                        <option key={f.id}>{f.size}</option>
                      ))}
                    </select>
                  </div>
                  <div className="mt-2 mx-5">
                    <select
                      id="blenth"
                      name="blenth"
                      autoComplete="back-lenth"
                      className="block w-36 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>BACK LENTH</option>
                      {product.productSize.map((b) => (
                        <option key={b.id}>{b.size}</option>
                      ))}
                    </select>
                  </div>
                  <div className="mt-2 mx-5">
                    <select
                      id="dout"
                      name="dout"
                      autoComplete="dout-point"
                      className="block w-36 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>DOUT POINT</option>
                      {product.productSize.map((d) => (
                        <option key={d.id}>{d.size}</option>
                      ))}
                    </select>
                  </div>
                  <div className="mt-2 mx-5">
                    <select
                      id="uchest"
                      name="uchest"
                      autoComplete="uper-chest"
                      className="block w-36 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>UPER CHEST</option>
                      {product.productSize.map((up) => (
                        <option key={up.id}>{up.size}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="mx-5 mt-2">
                    <select
                      id="chest"
                      name="chest"
                      autoComplete="chest"
                      className="w-36 block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <option>CHEST</option>
                      {product.productSize.map((c) => (
                        <option key={c.id}>{c.size}</option>
                      ))}
                    </select>
                  </div>
                  <div className="mt-2 mx-5">
                    <select
                      id="west"
                      name="west"
                      autoComplete="west"
                      className="block w-36 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>WEST</option>
                      {product.productSize.map((w) => (
                        <option key={w.id}>{w.size}</option>
                      ))}
                    </select>
                  </div>
                  <div className="mt-2 mx-5">
                    <select
                      id="sholder"
                      name="sholder"
                      autoComplete="sholder"
                      className="block w-36 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>SHOLDER</option>
                      {product.productSize.map((s) => (
                        <option key={s.id}>{s.size}</option>
                      ))}
                    </select>
                  </div>
                  <div className="mt-2 mx-5">
                    <select
                      id="armhole"
                      name="armhol"
                      autoComplete="arm-hole"
                      className="block w-36 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>ARM HOLE</option>
                      {product.productSize.map((a) => (
                        <option key={a.id}>{a.size}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex flex-row mt-10">
                  <div className="mx-5 mt-2">
                    <select
                      id="fndeep"
                      name="fndeep"
                      autoComplete=""
                      className="w-44 block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <option>FRANT NECK DEEP</option>
                      {product.productSize.map((fnd) => (
                        <option key={fnd.id}>{fnd.size}</option>
                      ))}
                    </select>
                  </div>
                  <div className="mt-2 ml-14">
                    <select
                      id="bndeep"
                      name="bndeep"
                      autoComplete=""
                      className="block w-44 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>BACK NECK DEEP</option>
                      {product.productSize.map((bnd) => (
                        <option key={bnd.id}>{bnd.size}</option>
                      ))}
                    </select>
                  </div>
                  <div className="mt-2 ml-24">
                    <select
                      id="sholder"
                      name="sholder"
                      autoComplete="sholder"
                      className="block w-44 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>SLEEV</option>
                      {product.productSize.map((sleev) => (
                        <option key={sleev.id}>{sleev.size}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Options */}
            <div className="lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">
                {product.price}
              </p>

              {/* Reviews */}
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          reviews.average > rating
                            ? "text-gray-900"
                            : "text-gray-200",
                          "h-5 w-5 flex-shrink-0"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{reviews.average} out of 5 stars</p>
                  <a
                    href={reviews.href}
                    className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    {reviews.totalCount} reviews
                  </a>
                </div>
              </div>

              <div className="mt-10">
                {/* Zip position */}

                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    ZIP POSITION
                  </h3>
                  {product.zips.map((zip) => (
                    <div className="flex items-center my-4">
                      <input
                        id="default-radio-1"
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="default-radio-1"
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {zip.name}
                      </label>
                    </div>
                  ))}

                  {/* <RadioGroup
                  value={selectedZip}
                  onChange={setSelectedZip}
                  className="mt-4"
                >
                  <RadioGroup.Label className="sr-only">
                    Choose a color
                  </RadioGroup.Label>
                  <div className="flex flex-col items-center mr-48">
                    {product.colors.map((color) => (
                      <RadioGroup.Option
                        key={color.name}
                        value={color}
                        className={({ active, checked }) =>
                          classNames(
                            color.selectedClass,
                            active && checked ? "ring ring-offset-1" : "",
                            !active && checked ? "ring-2" : "",
                            "relative -m-0.5 flex cursor-pointer rounded-full my-2 focus:outline-none"
                          )
                        }
                      >
                        <span>{color.name}</span>
                        <RadioGroup.Label as="span" className="sr-only">
                          {color.name}
                        </RadioGroup.Label>
                        <span
                          className={classNames(
                            color.class,
                            "h-5 w-5 rounded-full border border-black border-opacity-10"
                          )}
                        />
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup> */}
                </div>

                {/* Sizes */}
                {/* <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  <a
                    href="#"
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Size guide
                  </a>
                </div>

                <RadioGroup
                  value={selectedSize}
                  onChange={setSelectedSize}
                  className="mt-4"
                >
                  <RadioGroup.Label className="sr-only">
                    Choose a size
                  </RadioGroup.Label>
                  <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                    {product.sizes.map((size) => (
                      <RadioGroup.Option
                        key={size.name}
                        value={size}
                        disabled={!size.inStock}
                        className={({ active }) =>
                          classNames(
                            size.inStock
                              ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                              : "cursor-not-allowed bg-gray-50 text-gray-200",
                            active ? "ring-2 ring-indigo-500" : "",
                            "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                          )
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <RadioGroup.Label as="span">
                              {size.name}
                            </RadioGroup.Label>
                            {size.inStock ? (
                              <span
                                className={classNames(
                                  active ? "border" : "border-2",
                                  checked
                                    ? "border-indigo-500"
                                    : "border-transparent",
                                  "pointer-events-none absolute -inset-px rounded-md"
                                )}
                                aria-hidden="true"
                              />
                            ) : (
                              <span
                                aria-hidden="true"
                                className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                              >
                                <svg
                                  className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                  viewBox="0 0 100 100"
                                  preserveAspectRatio="none"
                                  stroke="currentColor"
                                >
                                  <line
                                    x1={0}
                                    y1={100}
                                    x2={100}
                                    y2={0}
                                    vectorEffect="non-scaling-stroke"
                                  />
                                </svg>
                              </span>
                            )}
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div> */}

                <button
                  type="submit"
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
