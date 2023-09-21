import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-200 h-[293px] relative">
      {/* Left content */}
      <div className="absolute left-[60px] top-[36px] w-[270px] text-zinc-900 text-xs font-normal font-['Plus Jakarta Sans'] leading-normal">
        Metro NZ Property Management has offices conveniently located in Central
        Auckland but operates throughout New Zealand and also internationally.
      </div>
      <div className="absolute left-[65px] top-[135px]">
        <a
          href="https://www.facebook.com/MetroNZ/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookRoundedIcon
            style={{ width: "33.60px", height: "33.60px", color: "#000" }}
          />
        </a>
      </div>
      <div className="absolute left-[118.60px] top-[135px]">
        <a
          href="https://twitter.com/MetroNz_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon
            style={{ width: "33.60px", height: "33.60px", color: "#000" }}
          />
        </a>
      </div>

      <div className="absolute left-[172.20px] top-[135px]">
        <a
          href="https://www.instagram.com/metronzproperty/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon
            style={{ width: "33.60px", height: "33.60px", color: "#000" }}
          />{" "}
        </a>
      </div>
      <div
        className="absolute left-[100%] top-[199px] -rotate-180 border border-slate-600 border-opacity-20 origin-top-left"
        style={{ width: "100%", height: "0px" }}
      ></div>
      <div className="absolute left-[60px] top-[231px] text-zinc-900 text-xs font-normal font-['Plus Jakarta Sans'] leading-[35px]">
        © 2022 Metro NZ Property Management | Disputes Process
      </div>
      {/* Right content */}
      <div className="absolute right-[20px] top-0 flex flex-row">
        {/* Menu */}
        <div className="w-[152px]">
          <div className="h-8 text-gray-900 text-base font-bold font-['Plus Jakarta Sans'] leading-[35px] mb-1 mt-5">
            Menu
          </div>
          <div className="h-[188px]">
            <span
              className="text-gray-900 text-xs font-normal font-['Plus Jakarta Sans'] leading-[18px] cursor-pointer"
              style={{ lineHeight: "3.5" }}
            >
              Home
              <br />
              About us
              <br />
              Contact Us
            </span>
          </div>
        </div>

        {/* Property Owners */}
        <div className="w-[152px] mr-7">
          <div className="h-8 text-gray-900 text-base font-bold font-['Plus Jakarta Sans'] leading-[35px] mb-1 mt-5">
            Property Owners
          </div>
          <div className="h-[188px]">
            <span
              className="text-gray-900 text-xs font-normal font-['Plus Jakarta Sans'] leading-[18px] cursor-pointer"
              style={{ lineHeight: "3.5" }}
            >
              Our services
              <br />
              Request an appraisal
              <br />
              Property news
            </span>
          </div>
        </div>

        {/* Tenants */}
        <div className="w-[152px] ml-8">
          <div className="h-8 text-gray-900 text-base font-bold font-['Plus Jakarta Sans'] leading-[35px] mb-1 mt-5">
            Tenants
          </div>
          <div className="h-[188px]">
            <span
              className="text-gray-900 text-xs font-normal font-['Plus Jakarta Sans'] leading-[18px] cursor-pointer"
              style={{ lineHeight: "3.5" }}
            >
              Services & Support
              <br />
              Tenant application
              <br />
              <Link to="/listings">Listings</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
