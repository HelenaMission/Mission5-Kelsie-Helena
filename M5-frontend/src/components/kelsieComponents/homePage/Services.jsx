import { useEffect, useState } from "react";

const ServiceCard = ({ icon, service, description, button }) => {
  return (
    <div className="w-1/3 p-4">
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <img src={icon} alt="Service Icon" className="w-16 h-16 mx-auto mb-4" />
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
    // Fetch data from MongoDB using Mongoose
    Service.find({})
      .then((data) => {
        setServices(data);
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
            icon={service.icons} // Assuming 'icons' is the field name in your MongoDB model
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
