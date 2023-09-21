import { useState } from "react";
import StarImage from "../../../images/homePage/star.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ReviewCard = ({ rating, name, text }) => {
  return (
    <div className="w-[364.21px] h-[209.42px] bg-gray-200 rounded-[10px] relative">
      <div className="text-stone-500 text-base font-bold font-['Plus Jakarta Sans'] leading-[35px] mx-4 mt-4 absolute top-0 right-5">
        {rating}
      </div>
      <div className="text-stone-500 text-base font-bold font-['Plus Jakarta Sans'] leading-[35px] mx-4 mt-4 absolute top-0 left-0">
        {name}
      </div>
      <br /> <br />
      <div className="text-stone-500 text-xs font-normal font-['Plus Jakarta Sans'] leading-[20px] mx-4 mt-4">
        "{text}"
      </div>
    </div>
  );
};

const Reviews = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const reviewsData = [
    {
      rating: 5,
      name: "Helena",
      text: "The team at Metro property management are fantastic. They are always friendly and helpful. They are quick to respond to any queries and are always willing to go the extra mile to help out. I would highly recommend them to anyone looking for a property manager.",
    },
    {
      rating: 4.5,
      name: "Marnie",
      text: "I have been renting with Metro Property Management for over 2 years now and I have had nothing but great experiences with them. They are always quick to respond to any queries and are very helpful.",
    },
    {
      rating: 5.0,
      name: "Jacquie",
      text: "I have been renting with Metro for over 2 years now and I have had nothing but great experiences with them. They are always quick to respond to any queries and are very helpful.",
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
    <div className="bg-white">
      <div className="flex flex-col items-center justify-center py-10">
        <img src={StarImage} alt="StarsImage" className="w-20 h-auto" />

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
        <ReviewCard
          rating={reviewsData[currentCard].rating}
          name={reviewsData[currentCard].name}
          text={reviewsData[currentCard].text}
        />

        {/* Review Card 2 */}
        <ReviewCard
          rating={reviewsData[(currentCard + 1) % reviewsData.length].rating}
          name={reviewsData[(currentCard + 1) % reviewsData.length].name}
          text={reviewsData[(currentCard + 1) % reviewsData.length].text}
        />

        {/* Review Card 3 */}
        <ReviewCard
          rating={reviewsData[(currentCard + 2) % reviewsData.length].rating}
          name={reviewsData[(currentCard + 2) % reviewsData.length].name}
          text={reviewsData[(currentCard + 2) % reviewsData.length].text}
        />
      </div>
      <div className="w-[100%] h-[26.37px] justify-center items-start gap-[43.94px] mt-7 mb-7 inline-flex ">
        <ArrowBackIcon
          style={{ cursor: "pointer" }}
          onClick={handlePrevClick}
        />
        <div className="w-[26.37px] h-[26.37px] relative origin-top-left rotate-180 flex-col justify-start items-start flex" />
        <ArrowForwardIcon
          style={{ cursor: "pointer" }}
          onClick={handleNextClick}
        />
      </div>
    </div>
  );
};

export default Reviews;
