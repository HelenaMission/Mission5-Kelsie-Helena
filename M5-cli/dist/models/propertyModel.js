"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const propertySchema = new mongoose_1.Schema({
    price: {
        type: 'number',
        require: true,
    },
    type: {
        type: 'string',
        require: true,
    },
    bath: {
        type: 'string',
        require: true,
    },
    bed: {
        type: 'string',
        require: true,
    },
    address: {
        unit_number: {
            type: 'string',
        },
        street_number: {
            type: 'string',
            require: true,
        },
        street_name: {
            type: 'string',
            require: true,
        },
        suburb: {
            type: 'string',
            require: true,
        },
    },
    img: {
        img1: {
            type: Buffer,
            require: true,
        },
        img2: {
            type: Buffer,
        },
        img3: {
            type: Buffer,
        },
    },
    pet: {
        type: 'boolean',
        require: true,
    },
    parking: {
        type: 'boolean',
        require: true,
    },
    immediate: {
        type: 'boolean',
        require: true,
    },
});
const Property = mongoose_1.default.model('properties', propertySchema);
exports.default = Property;
//# sourceMappingURL=propertyModel.js.map