"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteServiceCmd = void 0;
const serviceModel_1 = __importDefault(require("../models/serviceModel"));
const dbDisconnect_1 = require("../db/dbDisconnect");
const log = console.log;
const deleteServiceCmd = async () => {
    try {
        await serviceModel_1.default.deleteMany({});
        log('Deleted done');
    }
    catch (error) {
        error('Error deleting data', error);
    }
    finally {
        dbDisconnect_1.dbDisconnect;
    }
};
exports.deleteServiceCmd = deleteServiceCmd;
//# sourceMappingURL=deleteService.js.map