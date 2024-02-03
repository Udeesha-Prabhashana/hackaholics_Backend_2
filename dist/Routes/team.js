// import express from "express";
// import { register, count } from "../Controllers/teamRegi";
// const router = express.Router();
// router.post("/register", register);
// router.get("/count", count);
// export default router;
//# sourceMappingURL=team.js.map

"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const team_1 = require("../Controllers/teamRegi");
const router = express_1.default.Router();
router.post("/register", team_1.register);
router.get("/count", team_1.count);

exports.default = router;