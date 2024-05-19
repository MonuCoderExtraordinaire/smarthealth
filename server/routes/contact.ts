import express, { Request, Response } from "express";
import { ContactModel } from "../db/mongoose";
import fs from "fs";
import { parse } from "json2csv";

const router = express.Router();
router.post("/contact", async (req: Request, res: Response) => {
  const { firstName, lastName, email, phoneNumber, message } = req.body;
  try {
    const doesContactAlreadyExist = await ContactModel.findOne({
      email,
      phoneNumber,
    });
    if (doesContactAlreadyExist) {
      return res
        .json({ message: "You have already filled out the contact form." })
        .status(403);
    }
    const newContact = new ContactModel({
      firstName,
      lastName,
      email,
      phoneNumber,
      message,
    });
    await newContact.save();
    const csvData = parse(
      [{ firstName, lastName, email, phoneNumber, message }],
      { header: false }
    );
    fs.appendFileSync("../csvFile/contact.csv", csvData + "\n", "utf-8");
    return res.json({ message: "Contact form saved successfully" }).status(200);
  } catch (error) {
    console.error("Error:", error);
    return res.status(404);
  }
});

export default router;
