import imEnoughLogo from "../../images/homePage/imEnoughLogo.png";
import westpacLogo from "../../images/homePage/westpacLogo.png";
import reaLogo from "../../images/homePage/reaLogo.png";
import apacInsiderLogo from "../../images/homePage/apacInsiderLogo.png";
import queenCityLawLogo from "../../images/homePage/queenCityLawLogo.png";
import topReviewsLogo from "../../images/homePage/topReviewsLogo.png";

const Sponsors = () => {
  const logoImageStyle = {
    height: "100%",
    maxWidth: "100%",
    objectFit: "contain",
  };

  return (
    <section className="bg-gray-200 h-[120px] flex items-center justify-between px-6 py-2">
      <div className="p-6 h-[150px]">
        <img src={imEnoughLogo} alt="IAmEnoughLogo" style={logoImageStyle} />
      </div>
      <div className="p-6 h-[150px]">
        <img src={westpacLogo} alt="westpacLogo" style={logoImageStyle} />
      </div>
      <div className="p-6 h-[150px]">
        <img src={reaLogo} alt="reaLogo" style={logoImageStyle} />
      </div>
      <div className="p-6 h-[110px]">
        <img
          src={apacInsiderLogo}
          alt="apacInsiderLogo"
          style={logoImageStyle}
        />
      </div>
      <div className="p-6 h-[120px]">
        <img
          src={queenCityLawLogo}
          alt="queenCityLawLogo"
          style={logoImageStyle}
        />
      </div>
      <div className="p-6 h-[150px]">
        <img src={topReviewsLogo} alt="topReviewsLogo" style={logoImageStyle} />
      </div>
    </section>
  );
};

export default Sponsors;
