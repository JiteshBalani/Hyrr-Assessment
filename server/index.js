import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import {mongoPass} from "./common.js"
import { userRouter } from "./routes/users.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter );
mongoose.connect(`mongodb+srv://balanijitesh911:${mongoPass}@hyrr.tnruvc6.mongodb.net/?retryWrites=true&w=majority&appName=hyrr`);

app.listen(3000, ()  => console.log("Server started on port 3000"));