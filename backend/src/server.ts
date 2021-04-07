export { }
const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

const studentRoute = require("./Routes/Student")

dotenv.config({ path: `/home/dinesh/Desktop/Qapita/qapita-students/backend/src/.env` });
app.use(express.json());

app.use(cors());

mongoose.connect(
  process.env.MONGO_ATLAS_URI?.toString(),
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err: any) => {
    if (err) {
      console.log("Error  connecting the database");
    } else {
      console.log("Database connected");
    }
  },
);

console.log(process.env.MONGO_ATLAS_URI)
app.get("/", (req: any, res: any) => res.status(200).send("Hello"))
app.use("/", studentRoute)


app.listen(process.env.NODE_PORT || 8000, () => console.log("server is up and running at 8000"))
