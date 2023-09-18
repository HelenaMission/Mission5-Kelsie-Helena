import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import Arrow from "../../../images/homePage/arrow.png";
import Carousel1 from "../../../images/homePage/carousel1.png";
import Carousel2 from "../../../images/homePage/carousel2.png";
import Carousel3 from "../../../images/homePage/carousel3.png";

const Blog = () => {
  const [activePost, setActivePost] = useState(0);

  const blogPosts = [
    {
      title: "What Investors Should Know About Property Management Reports",
      content:
        "These reports are provided to you by your property manager, and they can give you all of the information you need.",
      link: "#",
    },
    {
      title:
        "Recent Changes In the 2023 Auckland Rental Market That You Should Know About",
      content:
        "Staying on top of things is important if you’re a rental property owner who wishes to keep their properties filled.",
      link: "#",
    },
    {
      title: "Tips On Finding The Right Property Management Company in NZ",
      content:
        "The right property management company can do wonders for any landlord. Their help can make a stressful job more manageable.",
      link: "#",
    },
  ];

  const carouselImages = [Carousel1, Carousel2, Carousel3];

  const nextSlide = () => {
    setActivePost((prev) => (prev === blogPosts.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActivePost((prev) => (prev === 0 ? blogPosts.length - 1 : prev - 1));
  };

  return (
    <div className="bg-zinc-200 min-h-[600px] flex justify-center items-center ">
      <div className="w-[998px] h-[519px] relative mx-auto">
        <div className="absolute left-[462px] top-0 text-center text-black text-4xl font-bold font-['Plus Jakarta Sans'] leading-loose">
          Blog
        </div>
        {/* Previous Slide Button */}
        <ChevronLeftIcon
          className="relative w-[60px] h-[60px] left-0 top-[250px] cursor-pointer"
          onClick={prevSlide}
        />

        <div className="absolute w-[305px] h-[42px] left-[406px] top-[70px]">
          <div className="absolute w-[305px] h-[42px] left-0 top-0 text-zinc-600 text-lg font-bold font-['Plus Jakarta Sans'] leading-loose">
            See more blog posts{" "}
          </div>
          <div className="absolute w-[20.17px] h-[20.17px] left-[189px] top-[13px] inline-flex justify-center items-center">
            <img className="w-[20.17px] h-[20.17px]" src={Arrow} alt="icon" />
          </div>
        </div>
        <div className="absolute w-[125px] h-[0px] left-[441px] top-[46px] border-2 border-red-600"></div>
        <div className="absolute w-[685px] h-[324px] left-[173px] top-[133px]">
          <div className="absolute w-[219.69px] h-[30.24px] left-[329.17px] top-[284.40px] text-slate-500 text-2xl font-bold font-['Plus Jakarta Sans'] leading-9">
            See more
          </div>
          <div className="absolute w-[685px] h-[324px] left-0 top-0 bg-white rounded-[18px]">
            <div className="absolute w-[337.10px] h-[92.88px] left-[327.99px] top-[52.98px] text-stone-900 text-xl font-bold font-['Plus Jakarta Sans'] leading-loose">
              {blogPosts[activePost].title}
            </div>
            <div className="absolute w-[320.53px] h-[123.84px] left-[327.99px] top-[128.94px] text-black text-base font-normal font-['Plus Jakarta Sans'] leading-[30px]">
              {blogPosts[activePost].content}
            </div>
            <div className="absolute w-[219.69px] h-[30.24px] left-[327.99px] top-[269.88px] text-stone-500 text-base font-normal font-['Plus Jakarta Sans'] leading-[30px]">
              <a href={blogPosts[activePost].link} className="underline">
                See more
              </a>
            </div>
            <img
              className="absolute w-[304.99px] h-[323.86px] left-0 top-0 rounded-tl-[18px] rounded-bl-[18px]"
              src={carouselImages[activePost]}
              alt="Blog Image"
            />
            <div className="absolute w-[20.17px] h-[20.16px] left-[410.98px] top-[276.88px] inline-flex justify-center items-center">
              <img
                className="w-[20.17px] h-[20.16px] text-#6E6862"
                src={Arrow}
                alt="icon"
              />
            </div>
          </div>
          <ChevronRightIcon
            className="relative left-[800px] w-[60px] h-[60px] top-[110px] cursor-pointer"
            onClick={nextSlide}
          />
        </div>
        <div className="absolute bottom-[10px] left-[50%] transform translate-x-[-50%] flex space-x-2">
          {blogPosts.map((_, index) => (
            <div
              key={index}
              className={`w-[8px] h-[8px] rounded-full ${
                index === activePost
                  ? "bg-[#6E6862] cursor-pointer"
                  : "bg-[#CACACA] cursor-pointer"
              } transition duration-300`}
              onClick={() => setActivePost(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
