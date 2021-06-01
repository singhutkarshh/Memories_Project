import express from "express";
import cors from "cors";
import mongoose from "mongoose";
const app = express();

import PostRoutes from "./routes/posts.js";

app.use("/posts", PostRoutes);

app.use(express.urlencoded());
app.use(cors());

const CONNECTION_URI =
  "mongodb+srv://singhutkarshh:cenation.database@cluster0.o9j4o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.port || 5000;

mongoose
  .connect(CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT} !`);
    })
  )
  .catch((error) => {
    console.log(error.message);
  });

mongoose.set("useFindAndModify", false);
