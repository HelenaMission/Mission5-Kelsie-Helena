import imEnoughLogo from "../../../images/homePage/imEnoughLogo.png";
import westpacLogo from "../../../images/homePage/westpacLogo.png";
import reaLogo from "../../../images/homePage/reaLogo.png";
import apacInsiderLogo from "../../../images/homePage/apacInsiderLogo.png";
import queenCityLawLogo from "../../../images/homePage/queenCityLawLogo.png";
import topReviewsLogo from "../../../images/homePage/topReviewsLogo.png";

const Sponsors = () => {
  return (
    <section className="bg-gray-200 h-92 flex items-center justify-between px-6 py-2">
      <img src={imEnoughLogo} alt="Logo 1" className="w-1/6 p-6 h-40" />
      <img src={westpacLogo} alt="Logo 2" className="w-1/6 p-6 h-40" />
      <img src={reaLogo} alt="Logo 3" className="w-1/6 p-6 h-40" />
      <img src={apacInsiderLogo} alt="Logo 4" className="w-1/6 p-6 h-40" />
      <img src={queenCityLawLogo} alt="Logo 5" className="w-1/6 p-6 h-40" />
      <img src={topReviewsLogo} alt="Logo 6" className="w-1/6 p-6 h-40" />
    </section>
  );
};

export default Sponsors;
