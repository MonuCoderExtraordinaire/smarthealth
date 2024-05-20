import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/SmartHealth");

const DoctorSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  password: String,
});

const PatientSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  password: String,
  age: String,
  BPMeds: String,
  cigsPerDay: String,
  isSmoking: String,
  sex: String,
  weight: String,
  height: String,
});

const ContactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: String,
  message: String,
});

export const DoctorModel = mongoose.model("Doctor", DoctorSchema);
export const PatientModel = mongoose.model("Patient", PatientSchema);
export const ContactModel = mongoose.model("Contact", ContactSchema);
