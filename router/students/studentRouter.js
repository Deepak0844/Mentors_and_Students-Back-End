import express from "express";
import { getStudentsById } from "../../helper.js";

const router = express.Router();

router.route("/:id").get(async (request, response) => {
  const id = request.params.id;
  console.log(id);
  const student = await getStudentsById(id);
  response.send(student);
});

export const studentRouter = router;
