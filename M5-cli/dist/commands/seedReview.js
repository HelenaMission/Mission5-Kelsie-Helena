"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedReviewCmd = void 0;
const reviewModel_1 = __importDefault(require("../models/reviewModel"));
const dbDisconnect_1 = require("../db/dbDisconnect");
const log = console.log;
const seedReviewCmd = async () => {
    try {
        const seedingReview = [
            {
                name: "Kelsie", region: "Auckland", national: "New Zealand", rate: "5", review: "The team at Metro property management are fantastic. They are always friendly and helpful. They are quick to respond to any queries and are always willing to go the extra mile to help out. I would highly recommend them to anyone looking for a property manager."
            },
            {
                name: "Marnie", region: "Auckland", national: "New Zealand", rate: "4.5", review: "I have been renting with Metro Property Management for over 2 years now and I have had nothing but great experiences with them. They are always quick to respond to any queries and are very helpful."
            },
            {
                name: "Jacquie", region: "Auckland", national: "New Zealand", rate: "5", review: "I have been renting with Metro for over 2 years now and I have had nothing but great experiences with them. They are always quick to respond to any queries and are very helpful."
            }
        ];
        await reviewModel_1.default.insertMany(seedingReview);
        log('Seeding service data is successful');
    }
    catch (error) {
        console.error('Seeding service data is failed', error);
    }
    finally {
        (0, dbDisconnect_1.dbDisconnect)();
    }
};
exports.seedReviewCmd = seedReviewCmd;
//# sourceMappingURL=seedReview.js.map