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
const fs_1 = __importDefault(require("fs"));
const json2csv_1 = require("json2csv");
const router = express_1.default.Router();
router.post("/contact", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, email, phoneNumber, message } = req.body;
    try {
        const doesContactAlreadyExist = yield mongoose_1.ContactModel.findOne({
            email,
            phoneNumber,
        });
        if (doesContactAlreadyExist) {
            return res
                .json({ message: "You have already filled out the contact form." })
                .status(403);
        }
        const newContact = new mongoose_1.ContactModel({
            firstName,
            lastName,
            email,
            phoneNumber,
            message,
        });
        yield newContact.save();
        const csvData = (0, json2csv_1.parse)([{ firstName, lastName, email, phoneNumber, message }], { header: false });
        fs_1.default.appendFileSync("../csvFile/contact.csv", csvData + "\n", "utf-8");
        return res.json({ message: "Contact form saved successfully" }).status(200);
    }
    catch (error) {
        console.error("Error:", error);
        return res.status(404);
    }
}));
exports.default = router;
