import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import cors from "cors";
import { mentorsRouter } from "./router/mentors/mentorsRouter.js";
import { mentorRouter } from "./router/mentors/mentorRouter.js";
import { studentsRouter } from "./router/students/studentsRouter.js";
import { studentRouter } from "./router/students/studentRouter.js";

dotenv.config(); //all keys it will put in process.env
const app = express();
app.use(cors());
const PORT = process.env.PORT;
app.use(express.json());
const MONGO_URL = process.env.MONGO_URL;

async function createConnections() {
  const client = new MongoClient(MONGO_URL);
  await client.connect(); //promise
  console.log("mongodb connected");
  return client;
}
export const client = await createConnections();

app.get("/", (request, respond) => {
  respond.send("hello");
});

//router
app.use("/mentors", mentorsRouter);
app.use("/students", studentsRouter);
app.use("/student", studentRouter);
app.use("/mentor", mentorRouter);

app.listen(PORT, () => console.log("App is Started", PORT));
