import express, { Request, Response } from "express";
import { PatientModel } from "../db/mongoose";
import { parse } from "json2csv";
import fs from "fs";
const router = express.Router();

router.post("/signup", async (req: Request, res: Response) => {
  const { fullName, email, password, doctorOrPatient } = req.body;
  const doesPatientAlreadyExist = await PatientModel.findOne({
    fullName,
    email,
  });
  if (doesPatientAlreadyExist) {
    return res.json({ message: "User already exists" }).status(403);
  }
  const newPatient = new PatientModel({
    fullName,
    email,
    password,
    doctorOrPatient,
  });
  await newPatient.save();
  const csvData = parse([{ fullName, email, password }], { header: false });
  console.log(csvData);
  fs.appendFileSync("../csvFile/PatientSignup.csv", csvData + "\n", "utf-8");
  return res.json({ message: "Signed Up successfully", email }).status(200);
});

router.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const Patient = await PatientModel.findOne({ email, password });
  if (Patient) {
    return res
      .json({
        messsage: "Logged in successfully",
        email,
        fullName: Patient.fullName,
      })
      .status(200);
  }
  return res.json({ message: "Login unsuccessful" }).status(401);
});

export default router;
