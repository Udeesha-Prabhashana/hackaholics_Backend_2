var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import teamRoute from "./Routes/team";
dotenv.config();
const URL = process.env.MONGO || "mongodb://localhost:27017/";
const ORIGIN = process.env.ORIGIN || "http://localhost:3000";
const PORT = process.env.PORT || 4000;
const app = express();
app.use(express.json());
app.use(cors({
    origin: ORIGIN,
    methods: ["GET", "POST", "PUT", "DELETE"]
}));
app.get("/", (req, res) => {
    res.send("Hackaholics API is running");
});
app.use("/api/teamregi", teamRoute);
const connect = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose.connect(URL);
        console.log("Connect to mongoDB");
    }
    catch (error) {
        throw error;
    }
});
mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
});
app.listen(PORT, () => {
    connect();
    console.log("Server running on port " + PORT);
});
//# sourceMappingURL=index.js.map