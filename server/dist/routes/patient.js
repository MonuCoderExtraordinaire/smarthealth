"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = require("../db/mongoose");
const json2csv_1 = require("json2csv");
const fs_1 = __importDefault(require("fs"));
const router = express_1.default.Router();
router.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { fullName, email, password, doctorOrPatient } = req.body;
    const doesPatientAlreadyExist = yield mongoose_1.PatientModel.findOne({
        fullName,
        email,
    });
    if (doesPatientAlreadyExist) {
        return res.json({ message: "User already exists" }).status(403);
    }
    const newPatient = new mongoose_1.PatientModel({
        fullName,
        email,
        password,
        doctorOrPatient,
    });
    yield newPatient.save();
    const csvData = (0, json2csv_1.parse)([{ fullName, email, password }], { header: false });
    console.log(csvData);
    fs_1.default.appendFileSync("../csvFile/PatientSignup.csv", csvData + "\n", "utf-8");
    return res.json({ message: "Signed Up successfully", email }).status(200);
}));
router.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const Patient = yield mongoose_1.PatientModel.findOne({ email, password });
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
}));
exports.default = router;
