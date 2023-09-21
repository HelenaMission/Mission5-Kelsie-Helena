import { useEffect, useState } from "react";
import axios from "axios";
import background from "../../../images/homePage/background.png";

const ServiceCard = ({ icons, service, description, button }) => {
  const [iconDataUrl, setIconDataUrl] = useState(null);

  useEffect(() => {
    const arrayBufferToBase64 = (buffer) => {
      let binary = "";
      const bytes = new Uint8Array(buffer);
      for (let i = 0; i < bytes.byteLength; i++) {
        binary += String.fromCharCode(bytes[i]);
      }
      return "data:image/jpeg;base64," + btoa(binary);
    };

    if (icons && icons.data) {
      const reader = new FileReader();
      reader.onload = () => {
        const dataUrl = arrayBufferToBase64(reader.result);
        setIconDataUrl(dataUrl);
      };
      reader.readAsArrayBuffer(new Blob([new Uint8Array(icons.data)]));
    }
  }, [icons]);

  return (
    <div className="w-1/4 p-4 m-1 flex space-evenly justify-center items-center">
      <div className="p-6 text-center">
        <div
          className="w-[94px] h-[94px] mx-auto mb-4 relative"
          style={{
            backgroundColor: "#E9EAF0",
            borderRadius: "29px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="w-16 h-16"
            style={{
              backgroundImage: `url(${iconDataUrl})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>

        <h3 className="text-black font-plus-jakarta-sans text-2xl font-semibold mb-2">
          {service}
        </h3>
        <p className="text-gray-700 mb-4 text-center">{description}</p>
        <button className="text-zinc-900 text-base font-normal font-['Plus Jakarta Sans'] underline leading-[5px] rounded-full">
          {button}
        </button>
      </div>
    </div>
  );
};

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/services")
      .then((response) => {
        setServices(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div
      className="bg-white"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <section className="h-screen flex flex-col justify-center items-center ml-14 mr-14">
        <h2 className="text-black font-plus-jakarta-sans text-4xl font-bold mb-2">
          Services
        </h2>
        <div className="w-[188px] h-[2px] bg-red-600 mb-4"></div>{" "}
        <div className="w-[381.73px] h-[49.13px] text-center text-gray-900 text-lg font-normal font-['Plus Jakarta Sans'] leading-[27px]">
          Efficient property management and curated rental listings – your
          gateway to hassle-free living and investment
        </div>
        <br />
        <br />
        <div className="flex flex-wrap justify-between">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icons={service.icons}
              service={service.service}
              description={service.description}
              button={service.button}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
