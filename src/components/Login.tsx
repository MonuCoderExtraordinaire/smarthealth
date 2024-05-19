"use client";

import Link from "next/link";
import styles from "@/app/styles/loginStyles.module.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { BASE_URL } from "@/app/config";
import { useRouter } from "next/navigation";

interface FormData {
  email: string;
  password: string;
  doctorOrPatient: string;
}

export default function Login() {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = async (data: FormData) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/${data.doctorOrPatient}/login`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data.email) {
        localStorage.setItem("fullName", response.data.fullName);
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Error occured while signing in:", error);
    }
  };
  return (
    <div className={styles.container}>
      <form
        style={{ display: "flex", flexDirection: "column", gap: 8 }}
        onSubmit={handleSubmit(onSubmit)}
        className={styles.formContainer}
      >
        <div style={{ display: "flex" }} id={styles.username}>
          {errors.email && (
            <p style={{ color: "red" }}>{errors.email.message}</p>
          )}
          <input
            {...register("email", {
              required: "*",
            })}
            placeholder="Email or Username"
            className={styles.inputField}
            type="text"
          />
        </div>

        <div style={{ display: "flex" }} id={styles.password}>
          {errors.password && (
            <p style={{ color: "red" }}>{errors.password.message}</p>
          )}
          <input
            {...register("password", {
              required: "*",
            })}
            placeholder="Password"
            className={styles.inputField}
            type="password"
          />
        </div>

        <div>
          <div
            style={{
              display: "flex",
              gap: 10,
            }}
          >
            <div style={{ display: "flex", gap: 3, alignItems: "center" }}>
              <input
                id="doctor"
                {...register("doctorOrPatient", {
                  required: "Please select the options.",
                })}
                value={"doctor"}
                // defaultChecked={true}
                type="radio"
                style={{ borderRadius: "50%" }}
              />
              <label htmlFor="doctor">Doctor</label>
            </div>
            <div style={{ display: "flex", gap: 3, alignItems: "center" }}>
              <input
                id="patient"
                {...register("doctorOrPatient", {
                  required: "Please select the options.",
                })}
                value={"patient"}
                type="radio"
                style={{ borderRadius: "50%" }}
              />
              <label htmlFor="patient">Patient</label>
            </div>
          </div>
          {errors.doctorOrPatient && (
            <p style={{ color: "red" }}>{errors.doctorOrPatient.message}</p>
          )}
        </div>

        <div>
          <button className={styles.submitButton} type="submit">
            Login
          </button>
        </div>
      </form>
      <div>
        <p>
          New Here?&nbsp;
          <Link
            style={{ color: "blue", textDecorationLine: "underline" }}
            href={"/signup"}
          >
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
}
