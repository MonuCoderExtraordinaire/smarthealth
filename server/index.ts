import express from "express";
import cors from "cors";
import doctorRouter from "./routes/doctor";
import patientRouter from "./routes/patient";
import contactRouter from "./routes/contact";
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/doctor", doctorRouter);
app.use("/patient", patientRouter);
app.use("", contactRouter);

app.listen(3002, () => {
  console.log("Server is up and running");
});
