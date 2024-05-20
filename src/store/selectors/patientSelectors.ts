import { selector } from "recoil";
import { patientState } from "../atoms/patientState";

export const patientEmail = selector({
  key: "patientEmail",
  get: ({ get }) => {
    const state = get(patientState);
    return state.email;
  },
});

export const patientFullName = selector({
  key: "patientFullName",
  get: ({ get }) => {
    const state = get(patientState);
    return state.fullName;
  },
});

export const isPatientLoading = selector({
  key: "isPatientLoading",
  get: ({ get }) => {
    const state = get(patientState);
    return state.isPatientLoading;
  },
});

export const patientStateValue = selector({
  key: "patientStateValue",
  get: ({ get }) => {
    const state = get(patientState);
    return state;
  },
});
