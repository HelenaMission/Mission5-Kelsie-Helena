import { request, response } from "express";
import Service from "../models/serviceModel.js";

// Helena's
export const getProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.status(200).json(properties);
  } catch (error) {
    res.status(404).json({ error: "Error getting data" });
  }
};

// Kelsie's
export const getServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (error) {
    res.status(404).json({ error: "Error getting data" });
  }
};
