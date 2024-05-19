"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const doctor_1 = __importDefault(require("./routes/doctor"));
const patient_1 = __importDefault(require("./routes/patient"));
const contact_1 = __importDefault(require("./routes/contact"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: "http://localhost:3000",
}));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use("/doctor", doctor_1.default);
app.use("/patient", patient_1.default);
app.use("", contact_1.default);
app.listen(3002, () => {
    console.log("Server is up and running");
});
