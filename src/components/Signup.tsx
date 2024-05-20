"use client";
import Link from "next/link";
import styles from "@/app/styles/loginStyles.module.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { BASE_URL } from "@/app/config";
import { useRouter } from "next/navigation";
import { useSetRecoilState } from "recoil";
import { patientState } from "@/store/atoms/patientState";

interface Signup {
  fullName: string;
  email: string;
  password: string;
  doctorOrPatient: string;
}

export default function Signup() {
  const setPatientState = useSetRecoilState(patientState);
  const router = useRouter();
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<Signup>();

  const doctorOrPatient = watch("doctorOrPatient");

  const onSubmit = async (data: Signup) => {
    console.log(data);
    if (data.doctorOrPatient === "patient") {
      setPatientState({
        email: data.email,
        password: data.password,
        fullName: data.fullName,
        isPatientLoading: true,
      });
      router.push("/survey");
    } else {
      try {
        const response = await axios.post(`${BASE_URL}/doctor/signup`, data, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.status === 200) {
          console.log(response.data);
          router.push("/login");
        } else {
          console.log("Failed Response:", response.data);
        }
      } catch (error) {
        console.error("Error while sending the request:", error);
      }
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
          <div style={{ display: "flex" }}>
            {errors.fullName && (
              <p style={{ color: "red" }}>{errors.fullName.message}</p>
            )}
            <input
              {...register("fullName", {
                required: "*",
              })}
              placeholder="Full Name"
              className={styles.inputField}
              type="text"
            />
          </div>
        </div>
        <div style={{ display: "flex" }}>
          {errors.email && (
            <p style={{ color: "red" }}>{errors.email.message}</p>
          )}
          <input
            {...register("email", {
              required: "*",
            })}
            placeholder="Email"
            className={styles.inputField}
            type="email"
          />
        </div>
        <div style={{ display: "flex" }}>
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
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginTop: "2%",
          }}
        >
          <button className={styles.submitButton} type="submit">
            {doctorOrPatient === "patient" ? "Next" : "Signup"}
          </button>
        </div>
      </form>
      <div>
        <p>
          Already a member?{" "}
          <Link
            style={{ color: "blue", textDecorationLine: "underline" }}
            href={"/login"}
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
