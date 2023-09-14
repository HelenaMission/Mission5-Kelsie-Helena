"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedServiceCmd = void 0;
const serviceModel_1 = __importDefault(require("../models/serviceModel"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const dbDisconnect_1 = require("../db/dbDisconnect");
const log = console.log;
const seedServiceCmd = async () => {
    try {
        const seedingService = [
            {
                icons: readFile('house-check.jpg'), service: "Service properties", description: "Discover your perfect home with our extensive,user-friendly property search tools", button: "See listings"
            },
            {
                icons: readFile('house-fill.jpg'), service: "Rent your property", description: "Boost rental income with our expert property management services", button: "More info"
            },
            {
                icons: readFile('hand.jpg'), service: "Decluttering Service", description: "Streamline your space for a more organized and stress-free living environment", button: "More info"
            },
            {
                icons: readFile('house-flag.jpg'), service: "Free property appraisals", description: "Gain insight into your property's market value with our complimentary appraisal service", button: "More info"
            },
            {
                icons: readFile('head.jpg'), service: "Healthy Home Standards", description: "We prioritize tenant well-being by adhering to the latest safety and health standards", button: "More info"
            },
            {
                icons: readFile('home-person.jpg'), service: "Tenant Information", description: "Access essential resources and information to enhance your rental experience", button: "More info"
            },
        ];
        await serviceModel_1.default.insertMany(seedingService);
        log("Seeding service data is successful");
    }
    catch (error) {
        console.error("Seeding service data is failed", error);
    }
    finally {
        (0, dbDisconnect_1.dbDisconnect)();
    }
};
exports.seedServiceCmd = seedServiceCmd;
function readFile(file) {
    const imagesDir = path_1.default.join(__dirname, "..", "images");
    const filePath = path_1.default.join(imagesDir, file);
    return fs_1.default.readFileSync(filePath);
}
//# sourceMappingURL=seedService.js.map