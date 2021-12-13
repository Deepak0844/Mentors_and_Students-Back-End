import express from "express";
import { getMentorById } from "../../helper.js";

const router = express.Router();

router.route("/:id").get(async (request, response) => {
  const { id } = request.params;
  console.log("mentor id", id);
  const mentor = await getMentorById(id);
  response.send(mentor);
});

export const mentorRouter = router;
