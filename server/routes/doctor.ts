import express, { Request, Response } from "express";
import { DoctorModel } from "../db/mongoose";
import { parse } from "json2csv";
import fs from "fs";
import path from "path";
const router = express.Router();

router.post("/signup", async (req: Request, res: Response) => {
  const { fullName, email, password, doctorOrPatient } = req.body;
  const doesDoctorAlreadyExist = await DoctorModel.findOne({ fullName, email });
  if (doesDoctorAlreadyExist) {
    return res.json({ message: "Doctor already exists" }).status(403);
  }
  const newDoctor = new DoctorModel({
    fullName,
    email,
    password,
    doctorOrPatient,
  });
  await newDoctor.save();
  const csvData = parse([{ fullName, email, password }], { header: false });
  console.log(csvData);
  const dirPath = path.join(__dirname, "../..", "csvFile");
  console.log("dirPath:", dirPath);
  const filePath = path.join(dirPath, "DoctorSignup.csv");

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
  const Doctor = await DoctorModel.findOne({ email, password });
  if (Doctor) {
    return res
      .json({
        messsage: "Logged in successfully",
        email,
        fullName: Doctor.fullName,
      })
      .status(200);
  }
  return res.json({ message: "Login unsuccessful" }).status(401);
});

export default router;
