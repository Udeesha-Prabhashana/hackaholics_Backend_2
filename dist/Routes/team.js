"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const teamRegi_1 = require("../Controllers/teamRegi");
const router = express_1.default.Router();
router.post("/register", teamRegi_1.register);
router.get("/count", teamRegi_1.count);
exports.default = router;
//# sourceMappingURL=team.js.map