import { useState } from "react";
import StarImage from "../../../images/homePage/star.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Reviews = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const reviewsData = [
    {
      rating: 4.5,
      name: "Bard",
      text: "Outstanding service! This website made renting my property a breeze. The user-friendly interface and responsive support team are a lifesaver.",
    },
    {
      rating: 4.5,
      name: "Sarah Robert",
      text: "Outstanding service! This website made renting my property a breeze. The user-friendly interface and responsive support team are a lifesaver.",
    },
    {
      rating: 5.0,
      name: "David Monty",
      text: "Five stars! Managing my investments is now hassle-free, thanks to this platform. Efficient, reliable, and highly recommended for property owners.",
    },
  ];

  const handlePrevClick = () => {
    setCurrentCard((prevCard) =>
      prevCard === 0 ? reviewsData.length - 1 : prevCard - 1
    );
  };

  const handleNextClick = () => {
    setCurrentCard((prevCard) =>
      prevCard === reviewsData.length - 1 ? 0 : prevCard + 1
    );
  };
  return (
    <div className="bg-white ">
      <div className="flex flex-col items-center justify-center py-10">
        <img src={StarImage} alt="Star" className="w-20 h-auto" />

        <div className="text-zinc-900 text-2xl font-bold font-['Plus Jakarta Sans'] leading-[1.3] mt-5 text-center w-[350px]">
          Trusted by Thousands of Happy Customers
        </div>

        <div className="text-zinc-900 text-base font-normal font-['Plus Jakarta Sans'] leading-[30px] mt-5 text-center">
          See what our delighted customers have to say about us
        </div>
      </div>

      {/* Review Cards Container */}
      <div className="flex justify-center items-center space-x-5  p-5">
        {/* Review Card 1 */}
        <div className="w-[364.21px] h-[209.42px] bg-gray-200 rounded-[10px] relative">
          <div className="text-stone-500 text-base font-bold font-['Plus Jakarta Sans'] leading-[35px] mx-4 mt-4 absolute top-0 right-0">
            4.5
          </div>
          <div className="text-stone-500 text-base font-bold font-['Plus Jakarta Sans'] leading-[35px] mx-4 mt-4 absolute top-0 left-0">
            Bard
          </div>
          <br /> <br />
          <div className="text-stone-500 text-xs font-normal font-['Plus Jakarta Sans'] leading-[30px] mx-4 mt-4">
            "Outstanding service! This website made renting my property a
            breeze. The user-friendly interface and responsive support team are
            a lifesaver."
          </div>
        </div>

        {/* Review Card 2 */}
        <div className="w-[370px] h-[209.42px] bg-zinc-200 rounded-[10px] relative">
          <div className="text-stone-500 text-base font-bold font-['Plus Jakarta Sans'] leading-[35px] mx-4 mt-4 absolute top-0 right-0">
            4.5
          </div>
          <div className="text-stone-500 text-base font-bold font-['Plus Jakarta Sans'] leading-[35px] mx-4 mt-4 absolute top-0 left-0 ">
            Sarah Robert
          </div>
          <br /> <br />
          <div className="text-stone-500 text-xs font-normal font-['Plus Jakarta Sans'] leading-[30px] mx-4 mt-4">
            "Outstanding service! This website made renting my property a
            breeze. The user-friendly interface and responsive support team are
            a lifesaver."
          </div>
        </div>

        {/* Review Card 3 */}
        <div className="w-[364.21px] h-[209.42px] bg-slate-300 rounded-[10px] relative">
          <div className="text-stone-500 text-base font-bold font-['Plus Jakarta Sans'] leading-[35px] mx-4 mt-4 absolute top-0 right-0">
            5.0
          </div>
          <div className="text-stone-500 text-base font-bold font-['Plus Jakarta Sans'] leading-[35px] mx-4 mt-4 absolute top-0 left-0">
            David Monty
          </div>
          <br /> <br />
          <div className="text-stone-500 text-xs font-normal font-['Plus Jakarta Sans'] leading-[30px] mx-4 mt-4">
            "Five stars! Managing my investments is now hassle-free, thanks to
            this platform. Efficient, reliable, and highly recommended for
            property owners."
          </div>
        </div>
      </div>
      <div className=" w-[100%] h-[26.37px] justify-center items-start gap-[43.94px] inline-flex m-7">
        <ArrowBackIcon style={{ cursor: "pointer" }} />
        <div className="w-[26.37px] h-[26.37px] relative origin-top-left rotate-180 flex-col justify-start items-start flex" />{" "}
        <ArrowForwardIcon style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
};

export default Reviews;
