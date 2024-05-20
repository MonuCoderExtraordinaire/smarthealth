"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactModel = exports.PatientModel = exports.DoctorModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect("mongodb://localhost:27017/SmartHealth");
const DoctorSchema = new mongoose_1.default.Schema({
    fullName: String,
    email: String,
    password: String,
});
const PatientSchema = new mongoose_1.default.Schema({
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
const ContactSchema = new mongoose_1.default.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: String,
    message: String,
});
exports.DoctorModel = mongoose_1.default.model("Doctor", DoctorSchema);
exports.PatientModel = mongoose_1.default.model("Patient", PatientSchema);
exports.ContactModel = mongoose_1.default.model("Contact", ContactSchema);
