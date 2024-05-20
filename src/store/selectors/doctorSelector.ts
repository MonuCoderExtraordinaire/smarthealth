import { selector } from "recoil";
import { doctorState } from "../atoms/doctorState";

export const doctorEmail = selector({
  key: "doctorEmail",
  get: ({ get }) => {
    const state = get(doctorState);
    return state.doctorEmail;
  },
});

export const doctorFullName = selector({
  key: "doctorFullName",
  get: ({ get }) => {
    const state = get(doctorState);
    return state.doctorFullName;
  },
});

export const isDoctorLoading = selector({
  key: "isDoctorLoading",
  get: ({ get }) => {
    const state = get(doctorState);
    return state.isDoctorLoading;
  },
});

export const doctorStateValue = selector({
  key: "doctorStateValue",
  get: ({ get }) => {
    const state = get(doctorState);
    return state;
  },
});
