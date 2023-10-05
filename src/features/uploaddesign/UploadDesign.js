import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { ProductData } from "../../Data";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UploadDesign = () => {
  const [files, setFile] = useState([]);
  const [message, setMessage] = useState();
  // console.log(files);
  const navigate = useNavigate();
  const handleFile = (e) => {
    setMessage("");
    let file = e.target.files;

    for (let i = 0; i < file.length; i++) {
      const fileType = file[i]["type"];
      const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
      if (validImageTypes.includes(fileType)) {
        setFile([...files, file[i]]);
      } else {
        setMessage("only images accepted");
      }
    }
  };

  const removeImage = (i) => {
    setFile(files.filter((x) => x.name !== i));
  };
  console.log(files);

  const hendelClick = () => {
    if (File) {
      navigate("/cart");

      toast.success("upload seucessfully!");
    } else {
      navigate("/upload-design");
      toast.error("Plese upload file");
    }
  };
  return (
    <>
      <div className="bg-gray-100">
        <Navbar />
        <div className="mx-5 h-auto ">
          <div className="">
            {/* Share Reference Images */}
            <div className="flex flex-col justify-center items-center gap-6 choose-text my-10">
              <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-primary-matte-black text-center">
                Share Reference Images
              </h1>
              <span className="text-sm md:text-base lg:text-lg text-center max-w-3xl text-gray-800">
                Share your images or sketches of any styles with us and our
                designer will take care of them or you can share these later
                after your call with our designer.
              </span>
            </div>

            {/* file uploadsection */}
            <div class="flex justify-center items-center my-10 px-3">
              <div class="rounded-lg shadow-xl bg-gray-50 md:w-1/2 w-[360px]">
                <div class="m-4">
                  <span className="flex justify-center items-center text-[12px] mb-1 text-red-500">
                    {message}
                  </span>
                  <div class="flex items-center justify-center w-full">
                    <label class="flex cursor-pointer flex-col w-full h-40 border-2 rounded-md border-dashed hover:bg-gray-100 hover:border-gray-300">
                      <div class="flex flex-col items-center justify-center pt-7">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-12 h-12 text-gray-400 group-hover:text-gray-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                          Select a photo
                        </p>
                      </div>
                      <input
                        type="file"
                        onChange={handleFile}
                        class="opacity-0"
                        multiple="multiple"
                        name="files[]"
                      />
                    </label>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {files.map((file, key) => {
                      return (
                        <div key={key} className="overflow-hidden relative">
                          <i
                            onClick={() => {
                              removeImage(files.name);
                            }}
                            className="mdi mdi-close absolute right-1 hover:text-white cursor-pointer"
                          ></i>
                          <img
                            className="h-20 w-20 rounded-md"
                            src={URL.createObjectURL(file)}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            {/* Upload Button */}
            <div className="flex items-center justify-center">
              <button
                className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-52 mb-5"
                onClick={hendelClick}
              >
                Button
              </button>
            </div>

            {/* Tailoring made easy, just for you */}
            <div className="bg-white sm:grid-cols-1">
              {/* contant section */}
              <div className="flex flex-col items-center justify-center w-full py-10 gap-4 md:gap-6 lg:gap-8">
                <div className="flex flex-col justify-center items-center gap-6 choose-text">
                  <h1 className="text-xl md:text-2xl lg:text-2xl xl:text-3xl font-medium text-primary-matte-black text-center">
                    Tailoring made easy, just for you
                  </h1>
                  <span className="text-sm md:text-base lg:text-lg text-center w-full max-w-5xl font-normal text-gray-800">
                    You deserve clothes that make YOU feel confident,
                    comfortable, and empowered. We are here to make outfits just
                    for you that make you feel so and that too in three simple
                    steps.
                  </span>
                </div>

                <div className="md:flex flex-col gap-4 md:gap-6 lg:gap-8">
                  {/* first section */}
                  <div className="grid grid-cols-12  items-start lg:items-center gap-2 md:gap-5 lg:gap-10 xl:gap-14">
                    <div className="col-span-6">
                      <span className="flex items-center gap-4 py-2">
                        <p className="hidden lg:flex text-lg font-medium border border-primary-voilet-dark bg-gray-500 text-white w-10 h-10 justify-center items-center rounded-full">
                          1
                        </p>
                        <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-medium lg:font-normal text-primary-matte-black">
                          Pick your style
                        </p>
                      </span>
                      <span>
                        <p className="py-2 text-xs md:text-sm lg:text-xl max-w-5xl font-normal text-gray-700">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Suscipit odit totam assumenda, cumque quod
                          numquam ratione?
                        </p>
                      </span>
                    </div>

                    <div className="col-span-6">
                      <img
                        src="https://www.cloudtailor.com/_next/image?url=https%3A%2F%2Fcloudtailor-cdn.s3.ap-south-1.amazonaws.com%2Fhow_it_works%2FPick-your-style.webp&w=1080&q=75"
                        alt=""
                      />
                    </div>
                  </div>

                  {/* second section */}
                  <div className="grid grid-cols-12  items-start lg:items-center gap-2 md:gap-5 lg:gap-10 xl:gap-14">
                    <div className="col-span-6">
                      <img
                        src="https://t3.ftcdn.net/jpg/00/84/87/80/360_F_84878016_Zs9yLjT1XecTYJXoUH44oErWi9XHMqtl.jpg"
                        alt=""
                      />
                    </div>
                    <div className="col-span-6">
                      <span className="flex items-center gap-4 py-2">
                        <p className="hidden lg:flex text-lg font-medium border border-primary-voilet-dark bg-gray-500 text-white w-10 h-10 justify-center items-center rounded-full">
                          2
                        </p>
                        <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-medium lg:font-normal text-primary-matte-black">
                          Pick your style
                        </p>
                      </span>
                      <span>
                        <p className="py-2 text-xs md:text-sm lg:text-xl max-w-5xl font-normal text-gray-700">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Suscipit odit totam assumenda, cumque quod
                          numquam ratione?
                        </p>
                      </span>
                    </div>
                  </div>

                  {/* third section */}

                  <div className="grid grid-cols-12  items-start lg:items-center gap-2 md:gap-5 lg:gap-10 xl:gap-14">
                    <div className="col-span-6">
                      <span className="flex items-center gap-4 py-2">
                        <p className="hidden lg:flex text-lg font-medium border border-primary-voilet-dark bg-gray-500 text-white w-10 h-10 justify-center items-center rounded-full">
                          3
                        </p>
                        <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-medium lg:font-normal text-primary-matte-black">
                          Pick your style
                        </p>
                      </span>
                      <span>
                        <p className="py-2 text-xs md:text-sm lg:text-xl max-w-5xl font-normal text-gray-700">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Suscipit odit totam assumenda, cumque quod
                          numquam ratione? Lorem ipsum dolor sit amet
                          consectetur adipisicing elit. Dolorum, corrupti?
                        </p>
                      </span>
                    </div>
                    <div className="col-span-6">
                      <img
                        src="https://content3.jdmagicbox.com/comp/def_content/tailors/shutterstock-147651662-tailors-1-w1j93.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Explore other categories */}
            <div className="flex flex-col justify-center items-center gap-6 choose-text my-10">
              <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-primary-matte-black text-center">
                Explore other categories
              </h1>

              <div className="grid grid-cols-1gap-x-4 gap-y-10 sm:grid-cols-2 lg:mx-10 lg:grid-cols-4 xl:gap-x-8">
                {ProductData.map((product) => (
                  <div key={product.id} className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 bg-gray-800">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-32 object-cover object-center lg:h-full lg:w-full bg-slate-600"
                        style={{ width: "350px", height: "500px" }}
                        sty
                      />
                    </div>

                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center xl:text-2xl lg:text-2xl md:text-xl sm:text-lg text-base text-center z-10 opacity-100 text-gray-950 font-medium">
                          <a href={product.href}>
                            <span
                              aria-hidden="true"
                              className="absolute opacity-0"
                            />
                            {product.name}
                          </a>
                        </h3>
                        {/* <p className="mt-1 text-sm text-gray-500 ml-52">
                      {product.color}
                    </p> */}
                      </div>
                      {/* <p className="text-sm font-medium text-gray-900">
                    {product.price}
                  </p> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <ToastContainer />
    </>
  );
};

export default UploadDesign;
