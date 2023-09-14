"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteReviewCmd = void 0;
const reviewModel_1 = __importDefault(require("../models/reviewModel"));
const dbDisconnect_1 = require("../db/dbDisconnect");
const log = console.log;
const deleteReviewCmd = async () => {
    try {
        await reviewModel_1.default.deleteMany({});
        log('Deleted done');
    }
    catch (error) {
        error('Error deleting data', error);
    }
    finally {
        dbDisconnect_1.dbDisconnect;
    }
};
exports.deleteReviewCmd = deleteReviewCmd;
//# sourceMappingURL=deleteReview.js.map