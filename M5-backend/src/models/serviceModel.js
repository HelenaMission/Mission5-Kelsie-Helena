import mongoose, { Schema } from "mongoose";

const servicesSchema = new Schema({
  icons: {
    type: Buffer,
    require: true,
  },
  service: {
    type: "string",
    require: true,
  },
  description: {
    type: "string",
    require: true,
  },
  button: {
    type: "string",
    require: true,
  },
});

const Service = mongoose.model("services", servicesSchema);

export default Service;
