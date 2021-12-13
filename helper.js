import { client } from "./index.js";
import { ObjectId } from "mongodb";

async function getMentorById(id) {
  return await client
    .db("students-and-mentors")
    .collection("mentors")
    .findOne({ _id: ObjectId(id) });
}

async function changeMentorForStudent(id, mentor_id) {
  return await client
    .db("students-and-mentors")
    .collection("students")
    .updateOne({ _id: ObjectId(id) }, { $set: { mentor_id: mentor_id } });
}

async function getStudentsById(id) {
  return await client
    .db("students-and-mentors")
    .collection("students")
    .findOne({ _id: ObjectId(id) });
}

async function getStudentsForMentor(mentor_id) {
  return await client
    .db("students-and-mentors")
    .collection("students")
    .find({ mentor_id: mentor_id })
    .toArray();
}

async function addStudentsForMentor(student_id, mentor_id) {
  return await client
    .db("students-and-mentors")
    .collection("students")
    .updateOne(
      { _id: ObjectId(student_id) },
      { $set: { mentor_id: mentor_id } }
    );
}

async function getStudents() {
  return await client
    .db("students-and-mentors")
    .collection("students")
    .find()
    .toArray();
}

async function addStudents(data) {
  return await client
    .db("students-and-mentors")
    .collection("students")
    .insertOne(data);
}

async function getMentors() {
  return await client
    .db("students-and-mentors")
    .collection("mentors")
    .find()
    .toArray();
}

async function addMentors(data) {
  return await client
    .db("students-and-mentors")
    .collection("mentors")
    .insertOne(data);
}

async function mentorFreeStudents() {
  return await client
    .db("students-and-mentors")
    .collection("students")
    .find({ mentor_id: "" })
    .toArray();
}

export {
  getMentorById,
  mentorFreeStudents,
  addMentors,
  getStudents,
  getMentors,
  addStudents,
  addStudentsForMentor,
  getStudentsById,
  changeMentorForStudent,
  getStudentsForMentor,
};
