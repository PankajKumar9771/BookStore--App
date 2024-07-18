import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = express();
dotenv.config();
import cors from "cors";

import bookRoute from "./routes/bookRoute.js";

import userRoute from "./routes/userRoute.js";

app.use(express.json());
const PORT = 4001;
const MongoUrl = process.env.MongoUrl;

//connnect to mongo db

async function main() {
  await mongoose.connect(MongoUrl);
}
main()
  .then((res) => {
    console.log("Connection is succesfull");
  })
  .catch((err) => {
    console.log(err);
  });

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.use(cors());
app.use("/", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
