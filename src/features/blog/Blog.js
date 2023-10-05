import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const posts = [
  {
    id: 1,
    title:
      "Dazzling Durga Puja Outfit Ideas: Embrace Tradition with a Modern Twist",
    href: "#",
    imgSrc:
      "https://cloudtailor-cdn.s3.ap-south-1.amazonaws.com/blogs/2309_Blog15_Dazzling_Durga_Puja_Outfit_Ideas/2309_Blog15_Banner.webp",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    heding: "DURGA PUJA OUTFIT IDEAS",
  },
  {
    id: 2,
    title:
      "Dazzling Durga Puja Outfit Ideas: Embrace Tradition with a Modern Twist",
    href: "#",
    imgSrc:
      "https://cloudtailor-cdn.s3.ap-south-1.amazonaws.com/blogs/2309_Blog14_Captivating_Colours_of_Navratri/2309_Blog14_Banner_11zon.webp",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit.Obcaecati alias perferendis ut quidem, voluptates quam possimus ratione recusandae reprehenderit reiciendis! Esse vero optio,assumenda et officiis perferendis labore aperiam nam, velit sedeos. Illo laborum recusandae, ipsum omnis exercitationemasperiores esse voluptate inventore, reiciendis nisi oditaliquam qui. Nobis, rem. Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    heding: "DURGA PUJA OUTFIT IDEAS",
  },
  {
    id: 3,
    title:
      "Dazzling Durga Puja Outfit Ideas: Embrace Tradition with a Modern Twist",
    href: "#",
    imgSrc:
      "https://cloudtailor-cdn.s3.ap-south-1.amazonaws.com/blogs/2309_Blog13_The_Art_of_Colour/2309_Blog13_Banner_11zon.webp",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit.Obcaecati alias perferendis ut quidem, voluptates quam possimus ratione recusandae ",
    heding: "DURGA PUJA OUTFIT IDEAS",
  },
  {
    id: 1,
    title:
      "Dazzling Durga Puja Outfit Ideas: Embrace Tradition with a Modern Twist",
    href: "#",
    imgSrc:
      "https://cloudtailor-cdn.s3.ap-south-1.amazonaws.com/blogs/2309_Blog15_Dazzling_Durga_Puja_Outfit_Ideas/2309_Blog15_Banner.webp",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    heding: "DURGA PUJA OUTFIT IDEAS",
  },
  {
    id: 1,
    title:
      "Dazzling Durga Puja Outfit Ideas: Embrace Tradition with a Modern Twist",
    href: "#",
    imgSrc:
      "https://cloudtailor-cdn.s3.ap-south-1.amazonaws.com/blogs/2309_Blog15_Dazzling_Durga_Puja_Outfit_Ideas/2309_Blog15_Banner.webp",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    heding: "DURGA PUJA OUTFIT IDEAS",
  },
  {
    id: 1,
    title:
      "Dazzling Durga Puja Outfit Ideas: Embrace Tradition with a Modern Twist",
    href: "#",
    imgSrc:
      "https://cloudtailor-cdn.s3.ap-south-1.amazonaws.com/blogs/2309_Blog15_Dazzling_Durga_Puja_Outfit_Ideas/2309_Blog15_Banner.webp",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    heding: "DURGA PUJA OUTFIT IDEAS",
  },
  {
    id: 1,
    title:
      "Dazzling Durga Puja Outfit Ideas: Embrace Tradition with a Modern Twist",
    href: "#",
    imgSrc:
      "https://cloudtailor-cdn.s3.ap-south-1.amazonaws.com/blogs/2309_Blog15_Dazzling_Durga_Puja_Outfit_Ideas/2309_Blog15_Banner.webp",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    heding: "DURGA PUJA OUTFIT IDEAS",
  },
];

const Blog = () => {
  return (
    <>
      <div>
        <Navbar />

        <div className="bg-yellow-50 py-10">
          <div className="flex flex-row">
            <div className=" lg:w-[75%] md:w[70%]  sm:w-full border-r-2 overflow-hidden">
              <div className="mx-auto max-w-7xl px-6 lg:px-8 overflow-y-scroll scrollbars-none">
                <div className="flex flex-wrap -mx-4 border-b-[1px] border-black">
                  <div className="w-full px-4">
                    <div className="mx-auto mb-[60px] lg:mb-10">
                      <h2 className="mb-4 text-2xl font-normal text-dark sm:text-4xl md:text-[40px]">
                        Explore, be curious.
                      </h2>
                      <p className="text-xl text-body-color">
                        Discover stories, thinking, and expertise from designers
                        on any category.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="h-[30rem] mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-y-16 border-gray-200  lg:mx-0 lg:max-w-none lg:grid-col-3">
                  <div className="">
                    {posts.map((post) => (
                      <article key={post.id} className="">
                        <div className="grid my-10 lg:flex lg:flex-row md:flex-row sm:flex-col ">
                          <div className="row-span-5-span-5 lg:w-[70%] md:w-[70%] sm:w-full ">
                            <img src={post.imgSrc} alt="" className="" />
                          </div>
                          <div className="grid row-span-7 w-[100%]">
                            <div className="flex flex-col sm:mt-5 md:mt-0 lg:mt-0 sm:ml-5">
                              <div className="flex items-center gap-x-4 text-xs">
                                <p>{post.heding}</p>
                              </div>
                              <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                  <p p>
                                    <span className="absolute inset-0"></span>
                                    {post.title}
                                  </p>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                                  {post.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[25%] px-10 sm:hidden md:block lg:block">
              <h1 className="text-xl">Categories</h1>
              <div className="mx-3 my-5 text-xl flex-wrap">
                <button className=" px-5 py-2 my-3 rounded-full hover:bg-gray-300">
                  All
                </button>
                <button className=" px-5 py-2 rounded-full hover:bg-gray-300">
                  Blouse
                </button>
                <button className=" px-5 py-2 my-3 rounded-full hover:bg-gray-300">
                  Dress
                </button>
                <button className=" px-5 py-2 rounded-full hover:bg-gray-300">
                  Salwar Kameez
                </button>
                <button className=" px-5 py-2 my-3 rounded-full hover:bg-gray-300">
                  trousers
                </button>
                <button className=" px-5 py-2 rounded-full hover:bg-gray-300">
                  Pants
                </button>
                <button className=" px-5 py-2 my-3 rounded-full hover:bg-gray-300">
                  Tops
                </button>
                <button className=" px-5 py-2 rounded-full hover:bg-gray-300">
                  Kurti
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Blog;
