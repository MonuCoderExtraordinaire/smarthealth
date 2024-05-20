import { atom } from "recoil";

export interface DoctorState {
  email: null | string;
  password: null | string;
  fullName: null | string;
  isDoctorLoading: boolean;
}

export const doctorState = atom<DoctorState>({
  key: "doctorState",
  default: {
    email: null,
    password: null,
    fullName: null,
    isDoctorLoading: true,
  },
});
