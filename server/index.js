import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import {mongoPass} from "./common.js"
import { userRouter } from "./routes/users.js";
import fetch from "cross-fetch";
import { newsData } from "./envVar.js";

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;

app.get('/newsData', (req, res) => {
    const url = `https://newsapi.org/v2/everything?q=keyword&apiKey=${newsData}`;
  
    fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        res.json(data);
      })
      .catch(error => {
        console.error(error);
        res.status(500).send('An error occurred');
      });
  });

// app.use("/auth", userRouter );
// mongoose.connect(`mongodb+srv://balanijitesh911:${mongoPass}@hyrr.tnruvc6.mongodb.net/?retryWrites=true&w=majority&appName=hyrr`);

app.listen(port, ()  => console.log(`Server started on port ${port}`));