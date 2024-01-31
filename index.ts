import express,{ Express , Request, Response} from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import teamRoute from "../hackaholics_Backend_2/src/Routes/team";

dotenv.config();

const URL = process.env.MONGO || "mongodb://localhost:27017/";
const ORIGIN = process.env.ORIGIN || "http://localhost:3000";
const PORT = process.env.PORT || 4000;

const app: Express = express();
app.use(express.json());
app.use(cors(
    {
        origin: ORIGIN,
        methods: ["GET", "POST", "PUT", "DELETE"]
    }
));

app.get("/", (req: Request, res: Response) => {
    res.send("Hackaholics API is running");
});

app.use("/api/teamregi", teamRoute);


const connect = async () => {
  try {
    await mongoose.connect(URL);
    console.log("Connect to mongoDB");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!")
})

app.listen(PORT, () => {
    connect();
    console.log("Server running on port " + PORT);
});