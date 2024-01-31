"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const team_1 = __importDefault(require("../hackaholics_Backend_2/src/Routes/team"));
dotenv_1.default.config();
const URL = process.env.MONGO || "mongodb://localhost:27017/";
const ORIGIN = process.env.ORIGIN || "http://localhost:3000";
const PORT = process.env.PORT || 4000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: ORIGIN,
    methods: ["GET", "POST", "PUT", "DELETE"]
}));
app.get("/", (req, res) => {
    res.send("Hackaholics API is running");
});
app.use("/api/teamregi", team_1.default);
const connect = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(URL);
        console.log("Connect to mongoDB");
    }
    catch (error) {
        throw error;
    }
});
mongoose_1.default.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
});
app.listen(PORT, () => {
    connect();
    console.log("Server running on port " + PORT);
});
