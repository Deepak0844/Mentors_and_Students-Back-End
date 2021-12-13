import express from "express";
import {
  mentorFreeStudents,
  getStudents,
  addStudents,
  changeMentorForStudent,
} from "../../helper.js";

const router = express.Router();

router
  .route("/")
  //add students
  .post(async (request, respond) => {
    const data = request.body;
    const newStudents = await addStudents(data);
    respond.send("created mentor successfully");
  })
  //get all students
  .get(async (request, respond) => {
    const students = await getStudents();
    respond.send(students);
  });

router
  .route("/:id")
  //change mentor for students by students id
  .put(async (request, response) => {
    const id = request.params.id;
    //const mentor_id = request.params.mentorId;
    const { mentor_id } = request.body;

    const student = await changeMentorForStudent(id, mentor_id);
    response.send(student);
  });

router
  .route("/free")
  //get mentor free students
  .get(async (request, response) => {
    const student = await mentorFreeStudents();
    response.send(student);
  });
export const studentsRouter = router;
