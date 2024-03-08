import express from "express";
import mongoose from "mongoose";
const app = express();
import router from "./routes/user-routes";
const port = 7000;
import bodyParser from "body-parser";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/user",router);
try {
  mongoose
    .connect("mongodb://0.0.0.0:27017/fooddelivery")
    .then(() => app.listen(port))
    .then(() => {
      console.log("Connected to database and listening on port 7000!!");
      // app.use("/api");

      

    })
    .catch((error) => console.log(error));
} catch (error) {
 console.log("error: ", error);
}
