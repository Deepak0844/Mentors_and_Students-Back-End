import express from "express";
import {
  addMentors,
  getMentors,
  addStudentsForMentor,
  getStudentsForMentor,
} from "../../helper.js";

const router = express.Router();

router
  .route("/")
  .post(async (request, respond) => {
    const data = request.body;
    const newMentor = await addMentors(data);
    respond.send("created mentor successfully");
  })
  //get all mentors
  .get(async (request, respond) => {
    const mentors = await getMentors();
    respond.send(mentors);
  });

router
  .route("/:id")
  // get students by mentor id
  .get(async (request, response) => {
    const mentor_id = request.params.id;
    const student = await getStudentsForMentor(mentor_id);
    response.send(student);
  })
  //add students for one mentors by mentors id
  .put(async (request, response) => {
    const student_id = request.params.id;
    const { mentor_id } = request.body;
    console.log("stu", student_id);
    console.log("ment", mentor_id);
    const student = await addStudentsForMentor(student_id, mentor_id);
    response.send(student);
  });
export const mentorsRouter = router;
