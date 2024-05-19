"use client";

import { useRouter } from "next/navigation";
import Button from "../components/Button";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  return (
    <div
      style={{
        padding: 5,
        height: "93vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: " #8EC5FC",
        backgroundImage: "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          //border: "5px solid black",
        }}
      >
        <div
          style={{
            //border: "5px solid pink",
            padding: 50,
          }}
        >
          <Image
            style={{ borderRadius: "30px" }}
            alt={"Logo Image"}
            height={600}
            width={600}
            src="/logo.png"
          />
        </div>
        <div
          style={{
            //border: "5px solid red",
            height: "43%",
            width: "34%",
            display: "flex",
            justifyContent: "center",
            alignSelf: "center",
            padding: 20,
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.7)",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            //backdropFilter: "blur(3px)", // Transparent background
          }}
        >
          <div
            style={{
              height: "10%",
              width: "90%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "25px",
              }}
            >
              <div
                style={{
                  borderRadius: "10%",
                  background: "rgba(0, 0, 0, 0.8)",
                  color: "white",
                  padding: 3,
                  marginBottom: 0,
                }}
                className="hover:scale-110 transition-transform duration-400"
              >
                <Button
                  type={"Signup"}
                  onClick={() => router.push("/signup")}
                />
              </div>
              <div style={{marginBottom: -20}}>
                <p>Already a member?</p>
              </div>

              <div
                style={{
                  borderRadius: "10%",
                  background: "rgba(0, 0, 0, 0.8)",
                  color: "white",
                  padding: 3,
                  paddingLeft: 11,
                  paddingRight: 11,
                }}
                className="hover:scale-110 transition-transform duration-400"
              >
                <Button 
                  type={"Login"} 
                  onClick={() => router.push("/login")} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
