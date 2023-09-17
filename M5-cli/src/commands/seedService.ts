import Service from "../models/serviceModel";
import path from "path";
import fs from "fs";
import { dbDisconnect } from "../db/dbDisconnect";

const log = console.log;

export const seedServiceCmd = async () => {
  try {
    const seedingService = [
      {
        icons: readAndConvertFile("house-check.jpg"),
        service: "Service properties",
        description:
          "Discover your perfect home with our extensive,user-friendly property search tools",
        button: "See listings",
      },
      {
        icons: readAndConvertFile("house-fill.jpg"),
        service: "Rent your property",
        description:
          "Boost rental income with our expert property management services",
        button: "More info",
      },
      {
        icons: readAndConvertFile("hand.jpg"),
        service: "Decluttering Service",
        description:
          "Streamline your space for a more organized and stress-free living environment",
        button: "More info",
      },
      {
        icons: readAndConvertFile("house-flag.jpg"),
        service: "Free property appraisals",
        description:
          "Gain insight into your property's market value with our complimentary appraisal service",
        button: "More info",
      },
      {
        icons: readAndConvertFile("head.jpg"),
        service: "Healthy Home Standards",
        description:
          "We prioritize tenant well-being by adhering to the latest safety and health standards",
        button: "More info",
      },
      {
        icons: readAndConvertFile("home-person.jpg"),
        service: "Tenant Information",
        description:
          "Access essential resources and information to enhance your rental experience",
        button: "More info",
      },
    ];

    await Service.insertMany(seedingService);
    log("Seeding service data is successful");
  } catch (error) {
    console.error("Seeding service data is failed", error);
  } finally {
    dbDisconnect();
  }
};

function readAndConvertFile(file: string) {
  const imagesDir = path.join(__dirname, "..", "images");
  const filePath = path.join(imagesDir, file);

  // Read the image file as binary data
  const imageBuffer = fs.readFileSync(filePath);

  // Convert the binary data to a Buffer
  return {
    type: "Buffer",
    data: [...imageBuffer],
  };
}
