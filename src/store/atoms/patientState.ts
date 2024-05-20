import { atom } from "recoil";

export interface PatientState {
  email: null | string;
  password: null | string;
  fullName: null | string;
  isPatientLoading: boolean;
}

export const patientState = atom<PatientState>({
  key: "patientState",
  default: {
    email: null,
    password: null,
    fullName: null,
    isPatientLoading: true,
  },
});
