import express from "express";
import { getProperties } from "../controllers/controller.js";
import { getServices } from "../controllers/controller.js";

const router = express.Router();

router.get("/properties", getProperties);
router.get("/services", getServices);

export default router;
