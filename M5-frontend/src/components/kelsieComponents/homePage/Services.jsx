import { useEffect, useState } from "react";
import axios from "axios";

const ServiceCard = ({ icons, service, description, button }) => {
  const [iconDataUrl, setIconDataUrl] = useState(null);

  useEffect(() => {
    // Function to convert binary data to a Base64 Data URL
    const arrayBufferToBase64 = (buffer) => {
      let binary = "";
      const bytes = new Uint8Array(buffer);
      for (let i = 0; i < bytes.byteLength; i++) {
        binary += String.fromCharCode(bytes[i]);
      }
      return "data:image/jpeg;base64," + btoa(binary);
    };

    // Check if icons and icons.data are defined
    if (icons && icons.data) {
      // Read and convert the binary data
      const reader = new FileReader();
      reader.onload = () => {
        const dataUrl = arrayBufferToBase64(reader.result);
        setIconDataUrl(dataUrl);
      };
      reader.readAsArrayBuffer(new Blob([new Uint8Array(icons.data)]));
    }
  }, [icons]);

  return (
    <div className="w-1/3 p-4">
      <div className="bg-white rounded-lg p-6 shadow-lg">
        {iconDataUrl && (
          <img
            src={iconDataUrl}
            alt="Service Icon"
            className="w-16 h-16 mx-auto mb-4"
          />
        )}
        <h3 className="text-black font-plus-jakarta-sans text-2xl font-semibold mb-2">
          {service}
        </h3>
        <p className="text-gray-700 text-center mb-4">{description}</p>
        <button className="bg-red-700 text-white px-4 py-2 rounded-full">
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
    <section className="h-932">
      <h2 className="text-black font-plus-jakarta-sans text-4xl font-semibold mb-2 border-b-3 border-red-600 w-1/4">
        Services
      </h2>
      <p className="text-gray-700 text-center mb-8 w-3/4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
        accumsan arcu.
      </p>
      <div className="flex flex-wrap">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icons={service.icons} // Assuming 'icons' is the field name in your MongoDB model
            service={service.service}
            description={service.description}
            button={service.button}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
