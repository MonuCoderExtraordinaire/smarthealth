"use client";
import Link from "next/link";
import styles from "@/app/styles/loginStyles.module.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { BASE_URL } from "@/app/config";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { patientStateValue } from "@/store/selectors/patientSelectors";

interface Survey {
  age: number;
  cigsPerDay: number;
  education: number;
  sex: string;
  isSmoking: boolean;
  BPMeds: boolean;
  height: number;
  weight: number;
}

export default function Survey() {
  const [doesThePersonSmokeCigarettes, setDoesThePersonSmokeCigarettes] =
    useState<boolean>(false);
  const router = useRouter();
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Survey>();
  const patient = useRecoilValue(patientStateValue);
  const onSubmit = async (data: Survey) => {
    console.log(data);
    console.log("data+val:", { ...data, ...patient });
    try {
      const response = await axios.post(
        `${BASE_URL}/patient/signup`,
        { ...data, ...patient },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        console.log(response.data);
        router.push("/login");
      } else {
        console.log("Failed Response:", response.data);
      }
    } catch (error) {
      console.error("Error while sending the request:", error);
    }
  };
  return (
    <div className={styles.container}>
      <form
        style={{ display: "flex", flexDirection: "column", gap: 8 }}
        onSubmit={handleSubmit(onSubmit)}
        className={styles.formContainer}
      >
        <div>
          <div
            style={{
              display: "flex",
              gap: 10,
            }}
          >
            <div style={{ display: "flex", gap: 3, alignItems: "center" }}>
              <p>Sex:&nbsp;</p>
              <input
                id="M"
                {...register("sex", {
                  required: "Please select the options.",
                })}
                value={"M"}
                type="radio"
                style={{ borderRadius: "50%" }}
              />
              <label htmlFor="M">M</label>
            </div>

            <div style={{ display: "flex", gap: 3, alignItems: "center" }}>
              <input
                id="F"
                {...register("sex", {
                  required: "Please select the options.",
                })}
                value={"F"}
                type="radio"
                style={{ borderRadius: "50%" }}
              />
              <label htmlFor="F">F</label>
            </div>
          </div>
          {errors.isSmoking && (
            <p style={{ color: "red" }}>{errors.isSmoking.message}</p>
          )}
        </div>

        <div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <input
              {...register("age", {
                validate: (value) => value > 0 || "Please enter correct age.",
              })}
              placeholder="Enter Your Age"
              className={styles.inputField}
              type="number"
            />
            {errors.age && <p style={{ color: "red" }}>{errors.age.message}</p>}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <input
            {...register("height", {
              validate: (value) => value > 0 || "Please enter correct height.",
            })}
            placeholder="Height(in cms)"
            className={styles.inputField}
            type="number"
          />
          {errors.height && (
            <p style={{ color: "red" }}>{errors.height.message}</p>
          )}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <input
            {...register("weight", {
              validate: (value) => value > 0 || "Please enter correct weight.",
            })}
            placeholder="Weight(in kgs)"
            className={styles.inputField}
            type="number"
          />
          {errors.weight && (
            <p style={{ color: "red" }}>{errors.weight.message}</p>
          )}
        </div>

        <div>
          <div
            style={{
              display: "flex",
              gap: 10,
            }}
          >
            <div style={{ display: "flex", gap: 3, alignItems: "center" }}>
              <p>Do you smoke?&nbsp;</p>
              <input
                id="yes"
                {...register("isSmoking", {
                  required: "Please select the options.",
                })}
                onClick={() => {
                  setDoesThePersonSmokeCigarettes(true);
                }}
                value={"Yes"}
                type="radio"
                style={{ borderRadius: "50%" }}
              />
              <label htmlFor="yes">Yes</label>
            </div>
            <div style={{ display: "flex", gap: 3, alignItems: "center" }}>
              <input
                id="no"
                {...register("isSmoking", {
                  required: "Please select the options.",
                })}
                onClick={() => {
                  setDoesThePersonSmokeCigarettes(false);
                }}
                value={"No"}
                type="radio"
                style={{ borderRadius: "50%" }}
              />
              <label htmlFor="no">No</label>
            </div>
          </div>
          {errors.isSmoking && (
            <p style={{ color: "red" }}>{errors.isSmoking.message}</p>
          )}
        </div>
        {doesThePersonSmokeCigarettes ? (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <input
              {...register("cigsPerDay", {
                required: doesThePersonSmokeCigarettes ? "*" : false,
                validate: (value) =>
                  value > 0 || "Please enter correct number.",
              })}
              placeholder="Cigarettes Per Day"
              className={styles.inputField}
              type="number"
              defaultValue={doesThePersonSmokeCigarettes ? "" : 0}
            />
            {errors.cigsPerDay && (
              <p style={{ color: "red" }}>{errors.cigsPerDay.message}</p>
            )}
          </div>
        ) : (
          ""
        )}

        <div>
          <div
            style={{
              display: "flex",
              gap: 10,
            }}
          >
            <div style={{ display: "flex", gap: 3, alignItems: "center" }}>
              <p>Are you on BP Meds?&nbsp;</p>
              <input
                id="BPMedsYes"
                {...register("BPMeds", {
                  required: "Please select the options.",
                })}
                value={"Yes"}
                type="radio"
                style={{ borderRadius: "50%" }}
              />
              <label htmlFor="BPMedsYes">Yes</label>
            </div>

            <div style={{ display: "flex", gap: 3, alignItems: "center" }}>
              <input
                id="BPMedsNo"
                {...register("BPMeds", {
                  required: "Please select the options.",
                })}
                value={"No"}
                type="radio"
                style={{ borderRadius: "50%" }}
              />
              <label htmlFor="BPMedsNo">No</label>
            </div>
          </div>
          {errors.isSmoking && (
            <p style={{ color: "red" }}>{errors.isSmoking.message}</p>
          )}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginTop: "2%",
          }}
        >
          <button
            className={styles.submitButton}
            type="submit"
            onClick={() => {
              if (!doesThePersonSmokeCigarettes) {
                setValue("cigsPerDay", 0);
              }
            }}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
