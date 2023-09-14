"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePropertyCmd = void 0;
const propertyModel_1 = __importDefault(require("../models/propertyModel"));
const dbDisconnect_1 = require("../db/dbDisconnect");
const log = console.log;
const deletePropertyCmd = async () => {
    try {
        await propertyModel_1.default.deleteMany({});
        log('Deleted done');
    }
    catch (error) {
        error('Error deleting data', error);
    }
    finally {
        dbDisconnect_1.dbDisconnect;
    }
};
exports.deletePropertyCmd = deletePropertyCmd;
//# sourceMappingURL=deleteProperty.js.map