"use client";

import { useRouter } from "next/navigation";

export function Navbar() {
  const router = useRouter();
  const navitem = ["Home", "About Us", "Contact"];
  return (
    <div
      style={{
        backgroundColor: "black",
      }}
      className="flex gap-4 p-1"
    >
      {navitem.map((el, idx) => (
        <button
          style={{
            backgroundColor: "rgba(0,0,0,0.3)",
            color: "white",
            borderRadius: "20px",
            padding: 4,
          }}
          onClick={() => {
            if (el === "Home") {
              router.push("/home");
            } else if (el === "About Us") {
              router.push("/about");
            } else if (el === "Contact") {
              router.push("/contact");
            }
          }}
          key={idx}
          className="text-black-300 text-xl font-semibold cursor-pointer hover:scale-110 transition-transform duration-400"
        >
          {el}
        </button>
      ))}
    </div>
  );
}
