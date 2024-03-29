"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const teamregistrationSchema = new mongoose_1.default.Schema({
    teamName: {
        type: String,
        required: true
    },
    university: {
        type: String,
        required: true
    },
    other: {
        type: String,
        required: false
    },
    leaderName: {
        type: String,
        required: true
    },
    leaderYear: {
        type: String,
        required: true
    },
    leaderWhatsapp: {
        type: String,
        required: true
    },
    leaderEmail: {
        type: String,
        required: true
    },
    leaderNIC: {
        type: String,
        required: true
    },
    member1Name: {
        type: String,
        required: true
    },
    member1Year: {
        type: String,
        required: true
    },
    member1Whatsapp: {
        type: String,
        required: true
    },
    member1Email: {
        type: String,
        required: true
    },
    member1NIC: {
        type: String,
        required: true
    },
    member2Name: {
        type: String,
        required: false
    },
    member2Year: {
        type: String,
        required: false
    },
    member2Whatsapp: {
        type: String,
        required: false
    },
    member2Email: {
        type: String,
        required: false
    },
    member2NIC: {
        type: String,
        required: false
    },
});
exports.default = mongoose_1.default.model('TeamRegistration', teamregistrationSchema);
//# sourceMappingURL=TeamRegistration.js.map