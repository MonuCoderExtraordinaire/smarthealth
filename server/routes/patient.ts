import express, { Request, Response } from "express";
import { PatientModel } from "../db/mongoose";
import { parse } from "json2csv";
import fs from "fs";
import path from "path";
const router = express.Router();

router.post("/signup", async (req: Request, res: Response) => {
  const {
    fullName,
    email,
    password,
    age,
    BPMeds,
    cigsPerDay,
    isSmoking,
    sex,
    weight,
    height,
  } = req.body;
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
    age,
    BPMeds,
    cigsPerDay,
    isSmoking,
    sex,
    weight,
    height,
  });
  await newPatient.save();
  const csvData = parse(
    [
      {
        fullName,
        email,
        password,
        age,
        BPMeds,
        cigsPerDay,
        isSmoking,
        sex,
        weight,
        height,
      },
    ],
    { header: false }
  );
  console.log(csvData);
  const dirPath = path.join(__dirname, "../..", "csvFile");
  console.log("dirPath:", dirPath);
  const filePath = path.join(dirPath, "PatientSignup.csv");

  // Ensure the directory exists
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  // Append data to the file
  fs.appendFileSync(filePath, csvData + "\n", "utf-8");
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
